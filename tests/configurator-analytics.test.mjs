import test from "node:test";
import assert from "node:assert/strict";
import { ENTRY_KEY, analyticsAllowed, trackConfiguratorEntry, createConfiguratorTracker } from "../lib/configurator-analytics.mjs";
import { CONFIGURATOR_ORIGIN, readConfiguratorMessage } from "../lib/configurator.mjs";
import { saveConsent, ANALYTICS_EXCLUSION_KEY, ANALYTICS_ID } from "../lib/consent.mjs";

function fixture(consent = true) {
  const makeStorage = () => { const data = new Map(); return {getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)}; };
  const events = [], browser = {localStorage:makeStorage(), sessionStorage:makeStorage(), location:{origin:"https://tec-casa.pt",pathname:"/instalacao-automatismos-portoes-almada"},gtag:(...args)=>events.push(args)};
  if (consent !== null) saveConsent(browser.localStorage,consent);
  const anchor = {getAttribute:()=>"/configurador-automatismos-portoes?tipo=swing&email=private@example.com",closest:()=>null};
  return {browser, events, anchor, doc:{referrer:"https://tec-casa.pt/instalacao-automatismos-portoes-almada?private=secret"}};
}
const payload = (event, sequence, extra={}) => ({event, sequence, step:"contact",gateType:"swing",...extra});

test("no funnel events or entry storage without valid consent, including exclusions and withdrawal", () => {
  for (const consent of [false,null]) {
    const f=fixture(consent), track=createConfiguratorTracker(f);
    assert.equal(track(payload("success",1)),false);
    assert.equal(trackConfiguratorEntry(f.anchor,f),false);
    assert.equal(f.browser.sessionStorage.getItem(ENTRY_KEY),null);
    assert.equal(f.events.length,0);
  }
  const f=fixture(),track=createConfiguratorTracker(f);
  assert.equal(track(payload("open",1)),true);
  saveConsent(f.browser.localStorage,false);
  assert.equal(track(payload("step",2)),false);
  saveConsent(f.browser.localStorage,true);
  f.browser.localStorage.setItem(ANALYTICS_EXCLUSION_KEY,"true");
  assert.equal(track(payload("success",3)),false);
  f.browser.localStorage.setItem(ANALYTICS_EXCLUSION_KEY,"false");
  f.browser[`ga-disable-${ANALYTICS_ID}`]=true;
  assert.equal(analyticsAllowed(f.browser),false);
  assert.equal(f.events.length,1);
});

test("entry attribution retains the public source route but no URL query or contact information", () => {
  const f=fixture();assert.equal(trackConfiguratorEntry(f.anchor,f),true);
  const track=createConfiguratorTracker(f);
  assert.equal(track(payload("success",1,{name:"private",email:"private@example.com",reference:"secret",weight:300,photos:["private"]})),true);
  const success=f.events.at(-1);
  assert.equal(success[1],"generate_lead");
  assert.equal(success[2].entry_page,f.browser.location.pathname);
  assert.equal(success[2].lead_type,"gate_automation");
  assert.equal(success[2].method,"configurator");
  for (const word of ["private","secret","email","weight","photos","300"]) assert.equal(JSON.stringify(f.events).includes(word),false,word);
});

test("replayed messages, arbitrary event names, stages and gate types are rejected", () => {
  const f=fixture(),track=createConfiguratorTracker(f);
  assert.equal(track(payload("submit",1)),true);
  assert.equal(track(payload("success",2)),true);
  assert.equal(track(payload("success",2)),false);
  assert.equal(track(payload("success",1)),false);
  for (const p of [payload("__proto__",3),payload("success",3,{step:"private@example.com"}),payload("success",3,{gateType:"secret"}),payload("success",0),payload("success",Infinity)]) assert.equal(track(p),false);
  assert.deepEqual(f.events.map(x=>x[1]),["configurator_submit","generate_lead"]);
});

test("only the known iframe origin and window can supply funnel messages", () => {
  const frame={},data={type:"teccasa:configurator:analytics",...payload("success",1)};
  const event={source:frame,origin:CONFIGURATOR_ORIGIN,data};
  assert.equal(readConfiguratorMessage(event,frame).type,"analytics");
  assert.equal(readConfiguratorMessage({...event,source:{}},frame),null);
  assert.equal(readConfiguratorMessage({...event,origin:"https://other.example"},frame),null);
});

test("management clicks, external destinations and corrupt or stale attribution stay out of reports", () => {
  const f=fixture();
  for(const href of ["https://other.example/configurador-automatismos-portoes","/privacidade"]) assert.equal(trackConfiguratorEntry({...f.anchor,getAttribute:()=>href},f),false);
  assert.equal(trackConfiguratorEntry({...f.anchor,closest:selector=>selector===".seo-directory"},f),false);
  for(const entry of [{page:"/private@example.com",placement:"content",at:Date.now()},{page:"/",placement:"content",at:Date.now()-31*60000}]) {
    f.browser.sessionStorage.setItem(ENTRY_KEY,JSON.stringify(entry));
    createConfiguratorTracker(f)(payload("open",1));
    assert.equal(f.events.at(-1)[2].entry_placement,"internal");
  }
});
