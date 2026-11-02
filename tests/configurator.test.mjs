import test from "node:test";
import assert from "node:assert/strict";
import { CONFIGURATOR_ORIGIN, configuratorUrl, readConfiguratorMessage } from "../lib/configurator.mjs";

test("configurator links accept only known gate types", () => {
  assert.equal(new URL(configuratorUrl("swing")).searchParams.get("type"), "swing");
  assert.equal(new URL(configuratorUrl("https://other.example")).origin, CONFIGURATOR_ORIGIN);
  assert.equal(new URL(configuratorUrl(["swing"])).searchParams.has("type"), false);
});

test("embedding accepts bounded messages only from the actual configurator frame", () => {
  const frame = {};
  const message = {source:frame, origin:CONFIGURATOR_ORIGIN, data:{type:"teccasa:configurator:resize",height:950.5}};
  assert.deepEqual(readConfiguratorMessage(message,frame),{type:"resize",value:951});
  assert.equal(readConfiguratorMessage({...message,source:{}},frame),null);
  assert.equal(readConfiguratorMessage({...message,origin:"https://other.example"},frame),null);
  for (const height of [NaN,Infinity,-10,0,20001,"1000"]) assert.equal(readConfiguratorMessage({...message,data:{...message.data,height}},frame),null);
  assert.deepEqual(readConfiguratorMessage({...message,data:{type:"teccasa:configurator:scroll",top:700}},frame),{type:"scroll",value:700});
  assert.equal(readConfiguratorMessage({...message,data:{type:"navigate",url:"https://other.example"}},frame),null);
});
