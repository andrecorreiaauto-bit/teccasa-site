const styles = `
.smart-service *{box-sizing:border-box}
.smart-service a{color:#08285c;text-underline-offset:4px}
.smart-service button{font-family:Arial,sans-serif}
.smart-service h1,.smart-service h2,.smart-service h3{color:#08285c}
.smart-service h1{font-size:clamp(36px,4.2vw,54px);line-height:1.08;letter-spacing:-1.2px;margin:0 0 25px;font-weight:800}
.smart-service h2{font-size:34px;line-height:1.22;letter-spacing:-.5px;margin:0 0 20px}
.smart-service h3{font-size:21px;line-height:1.35;margin:0 0 13px}
.smart-service p{margin:0 0 18px}
.smart-service a:focus-visible,.smart-service button:focus-visible,.smart-service summary:focus-visible{outline:3px solid #f7b545;outline-offset:5px}
.smart-service button,.smart-service a,.smart-service summary{-webkit-tap-highlight-color:transparent}
.smart-service [hidden]{display:none!important}
.smart-service section[id]{scroll-margin-top:175px}
.smart-service .main-card{width:min(1200px,calc(100% - 40px));margin:auto;padding:50px;border-radius:22px;background:#fff;box-shadow:0 10px 30px #0b2c5f12}
.smart-service .hero{display:grid;grid-template-columns:1.08fr 1fr;gap:42px;align-items:center;padding:26px 0 42px}
.smart-service .hero .lead{font-size:20px;line-height:1.7}
.smart-service .hero p:not(.eyebrow):not(.micro){max-width:640px}
.smart-service .eyebrow{font-size:12px;font-weight:700;letter-spacing:.4px;line-height:1.6;color:#42617e;margin:0 0 17px}
.smart-service .micro{font-size:12px;line-height:1.7;color:#66778a;margin:15px 0 0}
.smart-service .hero-picture,.smart-service .feature-picture{margin:0;min-width:0}
.smart-service .hero-picture img{width:100%;height:auto;display:block;border-radius:28px;box-shadow:0 20px 50px #08285c22}
.smart-service .hero-picture figcaption,.smart-service .feature-picture figcaption{font-size:12px;line-height:1.6;color:#66778a;margin-top:12px;text-align:center}
.smart-service .actions{display:flex;align-items:stretch;gap:12px;flex-wrap:wrap;margin-top:26px}
.smart-service .action{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;text-align:center;min-height:58px;padding:16px 22px;border:1px solid transparent;border-radius:16px;text-decoration:none;font:700 16px/1.4 Arial,sans-serif;max-width:100%;overflow-wrap:anywhere}
.smart-service .action.green{background:#25d366;border-color:#25d366;color:#fff}
.smart-service .action.outline{background:#fff;border-color:#c9d5e5;color:#08285c}
.smart-service .action.navy{background:#08285c;border-color:#08285c;color:#fff}
.smart-service .action:hover{filter:brightness(.97)}
.smart-service .config-button{overflow:hidden;min-height:80px;padding:18px 72px 18px 24px;background:#08285c;color:#fff;text-align:left;box-shadow:0 10px 25px #0b2c5f20;font-size:17px}
.smart-service .config-button small{display:block;font-size:12px;font-weight:400;line-height:1.4;margin-top:5px}
.smart-service .ribbon{position:absolute;top:15px;right:-29px;width:110px;transform:rotate(45deg);font-size:10px;line-height:20px;text-align:center;color:#08285c;background:#f7b545}
.smart-service .shortcuts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;padding-top:24px;margin-bottom:10px;border-top:1px solid #dce5f0}
.smart-service .shortcuts a{display:flex;align-items:center;justify-content:space-between;gap:15px;background:#eef3fa;border-radius:16px;padding:18px;text-decoration:none;font-size:15px;font-weight:700;line-height:1.5}
.smart-service .shortcuts span{font-size:20px}
.smart-service .section{padding:46px 0}
.smart-service .section-intro{max-width:850px;font-size:18px;line-height:1.75;margin:0 0 28px}
.smart-service .grid{display:grid;gap:20px;align-items:stretch}
.smart-service .grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.smart-service .grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}
.smart-service .grid.four{grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.smart-service .two-col{display:grid;grid-template-columns:1.05fr 1fr;gap:40px;align-items:start}
.smart-service .linked-card{display:flex;flex-direction:column;border:1px solid #dce5f0;border-radius:23px;background:#f0f5fb;text-decoration:none;overflow:hidden;min-width:0;transition:box-shadow .15s ease}
.smart-service .linked-card:hover{box-shadow:0 12px 24px #0b2c5f15}
.smart-service .linked-card>div{display:flex;flex-direction:column;flex:1;padding:24px}
.smart-service .linked-card h3{font-size:21px;margin:0 0 12px}
.smart-service .linked-card p{font-size:15px;line-height:1.75;color:#4e6075;margin-bottom:22px}
.smart-service .linked-card .eyebrow{font-size:11px;margin-bottom:12px}
.smart-service .linked-card>img{display:block;width:100%;height:190px;object-fit:cover;background:#e8eff8}
.smart-service .linked-card .card-link{margin-top:auto;font-size:13px;font-weight:700;display:flex;justify-content:space-between;gap:12px}
.smart-service .card-link b{font-size:18px;line-height:1}
.smart-service .type-cards .linked-card>img{height:155px}
.smart-service .type-cards .linked-card>div{padding:22px 19px}
.smart-service .type-cards h3{font-size:20px}
.smart-service .type-cards p{font-size:14px}
.smart-service .icon-card>img{height:175px;object-fit:contain;padding:16px;background:#eef3fa}
.smart-service .service-grid .linked-card:not(.icon-card)>img{height:175px}
.smart-service .text-link{font-size:15px;font-weight:700;text-underline-offset:5px;display:inline-block}
.smart-service .steps{display:grid;gap:20px;padding:0;margin:0;list-style:none}
.smart-service .steps li{display:flex;gap:17px;align-items:flex-start}
.smart-service .steps li>span{display:grid;place-items:center;flex-shrink:0;width:40px;height:40px;border-radius:50%;background:#08285c;color:#fff;font-size:12px;font-weight:700}
.smart-service .steps h3{font-size:18px;margin:2px 0 6px}
.smart-service .steps p{font-size:15px;line-height:1.7;margin:0}
.smart-service .feature{display:grid;grid-template-columns:1fr 1.15fr;gap:36px;align-items:center;margin:22px 0;padding:34px;border-radius:27px;background:#edf3fa}
.smart-service .feature-picture img{display:block;width:100%;height:auto;border-radius:22px}
.smart-service .feature h2{font-size:31px}
.smart-service .feature .action{margin-top:10px}
.smart-service .check-list{padding-left:20px;margin:20px 0 24px;font-size:16px;line-height:1.75}
.smart-service .check-list li{margin-bottom:12px;padding-left:4px}
.smart-service .sectional .micro{margin-top:18px;line-height:1.8}
.smart-service .config-feature{grid-template-columns:1.12fr 1fr;align-items:center;background:linear-gradient(135deg,#edf3fa,#f7f9fd)}
.smart-service .config-feature .steps{margin:26px 0}
.smart-service .config-feature .steps li>span{background:#e0eaf7;color:#08285c}
.smart-service .new-pill{display:inline-block;background:#f7b545;color:#08285c;font-size:11px;line-height:1.4;border-radius:999px;font-weight:700;padding:7px 13px;margin-bottom:18px}
.smart-service .contact-panel{display:grid;grid-template-columns:1.18fr 1fr;gap:36px;background:#edf3fa;padding:34px;border-radius:26px;margin:22px 0}
.smart-service .contact-panel h2{font-size:31px}
.smart-service .contact-panel .action{font-size:14px;padding:15px 18px}
.smart-service .info-list{display:grid;gap:24px;align-content:center}
.smart-service .info-list>div{display:flex;gap:16px}
.smart-service .info-list b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;background:#dfe9f6;border-radius:50%;font-size:12px;color:#08285c}
.smart-service .info-list span{font-size:15px;line-height:1.7}
.smart-service .info-list strong{display:block;font-size:16px;color:#08285c;margin-bottom:5px}
.smart-service .small-card{padding:24px 21px;background:#eef3fa;border-radius:22px}
.smart-service .small-card h3{font-size:20px}
.smart-service .small-card p{font-size:15px;line-height:1.7;margin:0}
.smart-service .small-card .number{display:block;font-size:12px;font-weight:700;color:#5b7796;margin-bottom:16px}
.smart-service .path-card{padding:30px;border:1px solid #d8e3f1;border-radius:24px;background:#fff}
.smart-service .path-card h3{font-size:25px}
.smart-service .path-card p:not(.eyebrow){font-size:16px}
.smart-service .panel{background:#edf3fa;padding:34px;border-radius:26px;margin:20px 0}
.smart-service .aside-note{padding:25px;background:#fff;border-radius:21px;border:1px solid #dce5f0}
.smart-service .aside-note h3{font-size:21px}
.smart-service .aside-note ul{font-size:15px;line-height:1.8;padding-left:20px;margin:0}
.smart-service .aside-note li{margin-bottom:10px}
.smart-service .aside-note .symptom-links{padding:0;list-style:none}
.smart-service .symptom-links a{font-weight:700;text-decoration:none}
.smart-service .coverage{display:grid;grid-template-columns:1.1fr 1fr;gap:38px;align-items:center}
.smart-service .coverage-cards{display:grid;gap:14px}
.smart-service .coverage-cards article{border:1px solid #dce5f0;border-radius:20px;padding:23px;background:#f1f5fa}
.smart-service .coverage-cards article>span{font-size:14px;font-weight:700;color:#08285c}
.smart-service .coverage-cards p{font-size:15px;line-height:1.75;margin:8px 0 0}
.smart-service .faq details{padding:20px 0;border-bottom:1px solid #dce5f0}
.smart-service .faq summary{color:#08285c;font-weight:700;font-size:17px;line-height:1.65;cursor:pointer;margin-left:20px;padding-left:5px}
.smart-service .faq details p{font-size:16px;line-height:1.75;max-width:920px;margin:15px 0 0 25px}
.smart-service .final{text-align:center;border-radius:28px;padding:42px 30px;margin:24px 0}
.smart-service .final h2{max-width:850px;margin:0 auto 20px}
.smart-service .final>p{max-width:800px;margin:0 auto 26px}
.smart-service .final .actions{justify-content:center}
.smart-service .dark{background:#0b2c5f;color:#fff}
.smart-service .dark h2,.smart-service .dark h3{color:#fff}
.smart-service .dark .micro{color:#d1dff0;margin-top:20px}
.smart-service .dark .config-button{background:#fff;color:#08285c;box-shadow:0 8px 24px #0002}
.smart-service .practical{font-size:13px;line-height:1.8;color:#66778a;padding:12px 0 26px;margin:0}
.smart-service .site-footer{margin-top:30px;padding:36px 28px 25px;background:#edf3fa;border-radius:24px;text-align:center}
.smart-service .site-footer h2{font-size:25px;margin:0 0 10px}
.smart-service .site-footer p{font-size:14px;margin:0 0 18px}
.smart-service .footer-contacts{display:flex;justify-content:center;gap:22px;flex-wrap:wrap;font-size:15px}
.smart-service .socials{display:flex;justify-content:center;gap:12px;margin:23px 0}
.smart-service .socials a{display:inline-flex;align-items:center;justify-content:center;padding:9px 15px;min-height:42px;border:1px solid #d1deed;border-radius:999px;text-decoration:none;background:white;font-size:13px;font-weight:700}
.smart-service .socials .green{background:#25d366;color:white;border-color:#25d366}
.smart-service .floating-wa{position:fixed;bottom:25px;right:25px;z-index:900;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 18px;border-radius:999px;background:#25d366;color:white;text-decoration:none;font-size:14px;font-weight:700;box-shadow:0 4px 18px #0002}
@media(max-width:1100px){.smart-service .hero{gap:28px}
.smart-service .actions .action{flex:1 1 170px}
.smart-service .grid.four{grid-template-columns:repeat(2,minmax(0,1fr))}
.smart-service .two-col{gap:30px}
.smart-service .feature{gap:28px}
.smart-service .contact-panel{grid-template-columns:1fr;gap:28px}
.smart-service .info-list{grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.smart-service .info-list>div{display:block}
.smart-service .info-list b{margin-bottom:12px}}
@media(max-width:850px){.smart-service .hero{grid-template-columns:1fr;gap:28px}
.smart-service .hero-picture{max-width:720px}
.smart-service .hero h1{max-width:780px}
.smart-service .grid.three{grid-template-columns:repeat(2,minmax(0,1fr))}
.smart-service .two-col,.smart-service .feature,.smart-service .coverage{grid-template-columns:1fr}
.smart-service .feature-picture{max-width:700px}
.smart-service .config-feature .feature-picture{order:1}
.smart-service .hero p:not(.eyebrow):not(.micro){max-width:none}
.smart-service .coverage{gap:26px}}
@media(max-width:600px){.smart-service .main-card{width:100%;padding:16px 12px;border-radius:18px}
.smart-service h1{font-size:35px;line-height:1.12;letter-spacing:-.6px;margin-bottom:22px}
.smart-service h2{font-size:28px;letter-spacing:-.4px}
.smart-service h3{font-size:21px}
.smart-service .hero{padding:21px 4px 32px;gap:26px}
.smart-service .hero .lead{font-size:18px;line-height:1.75}
.smart-service .hero-picture img{border-radius:22px}
.smart-service .hero-picture figcaption{font-size:11px}
.smart-service .actions{flex-direction:column;margin-top:24px}
.smart-service .actions .action{flex:0 1 auto;width:100%}
.smart-service .action{font-size:16px;padding:16px 19px;min-height:58px}
.smart-service .config-button{padding-right:70px;font-size:16px;min-height:80px}
.smart-service .eyebrow{font-size:12px}
.smart-service .micro{font-size:12px}
.smart-service .shortcuts{grid-template-columns:1fr;gap:10px;padding-top:20px}
.smart-service .shortcuts a{padding:15px 18px}
.smart-service .section{padding:30px 4px}
.smart-service .section-intro{font-size:17px;line-height:1.75;margin-bottom:24px}
.smart-service .grid.two,.smart-service .grid.three,.smart-service .grid.four{grid-template-columns:1fr;gap:16px}
.smart-service .linked-card>div{padding:23px}
.smart-service .linked-card>img{height:190px}
.smart-service .type-cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.smart-service .type-cards .linked-card>img{height:115px}
.smart-service .type-cards .linked-card>div{padding:18px 14px}
.smart-service .type-cards h3{font-size:18px}
.smart-service .type-cards p{font-size:13px;line-height:1.7}
.smart-service .type-cards .card-link{font-size:12px}
.smart-service .service-grid .linked-card{display:grid;grid-template-columns:105px minmax(0,1fr)}
.smart-service .service-grid .linked-card>img,.smart-service .service-grid .linked-card:not(.icon-card)>img{width:105px;height:100%;min-height:190px;object-fit:cover}
.smart-service .service-grid .icon-card>img{object-fit:contain;padding:7px}
.smart-service .service-grid .linked-card>div{padding:21px 18px}
.smart-service .service-grid h3{font-size:20px}
.smart-service .service-grid p{font-size:14px}
.smart-service .two-col{gap:28px}
.smart-service .steps{gap:22px}
.smart-service .steps h3{font-size:18px}
.smart-service .feature,.smart-service .panel,.smart-service .contact-panel{padding:27px 21px;margin:20px 0;border-radius:24px}
.smart-service .feature h2,.smart-service .contact-panel h2{font-size:28px}
.smart-service .feature .action{width:100%}
.smart-service .check-list{font-size:15px}
.smart-service .info-list{grid-template-columns:1fr;gap:18px}
.smart-service .info-list>div{display:flex;gap:14px}
.smart-service .info-list b{margin:0}
.smart-service .small-card,.smart-service .path-card{padding:25px 22px}
.smart-service .path-card h3{font-size:24px}
.smart-service .compact{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
.smart-service .compact .small-card{padding:22px 17px}
.smart-service .compact h3{font-size:18px}
.smart-service .compact p{font-size:14px}
.smart-service .faq summary{font-size:17px}
.smart-service .faq details p{margin-left:4px;font-size:16px}
.smart-service .final{padding:33px 21px;margin:22px 0}
.smart-service .final>p{font-size:17px}
.smart-service .practical{font-size:12px;padding:12px 4px 24px}
.smart-service .site-footer{padding:30px 22px}
.smart-service .footer-contacts{flex-direction:column;gap:11px}
.smart-service .socials{flex-wrap:wrap}
.smart-service .floating-wa{right:14px;bottom:14px;min-height:46px;font-size:13px;padding:11px 16px}}
@media(max-width:360px){.smart-service .type-cards,.smart-service .compact{grid-template-columns:1fr!important}
.smart-service .service-grid .linked-card{grid-template-columns:85px minmax(0,1fr)}
.smart-service .service-grid .linked-card>img,.smart-service .service-grid .linked-card:not(.icon-card)>img{width:85px}}
@media(prefers-reduced-motion:reduce){.smart-service .linked-card{transition:none}}
.smart-service .service-hero{padding:15px 0 42px}
.smart-service .service-hero h1{font-size:clamp(34px,3.7vw,45px);line-height:1.15;letter-spacing:-.7px}
.smart-service .service-hero .lead{font-size:19px;line-height:1.8}
.smart-service .service-hero .micro{font-size:12px;max-width:550px}
.smart-service .hero-picture img{box-shadow:0 15px 40px #08285c18}
.smart-service .solution-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.smart-service .solution-card{display:grid;grid-template-columns:135px minmax(0,1fr);overflow:hidden;border:1px solid #dbe5f1;border-radius:21px;background:#f0f5fb;min-width:0}
.smart-service .solution-card>img{width:135px;height:100%;min-height:180px;object-fit:cover}
.smart-service .solution-card>div{padding:24px}
.smart-service .solution-card h3{font-size:21px;margin-bottom:12px}
.smart-service .solution-card p{font-size:14px;line-height:1.8;margin:0;color:#52667e}
.smart-service .scope-section{display:grid;grid-template-columns:1fr 1.05fr;gap:40px;border-top:1px solid #dce5f0}
.smart-service .scope-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:500px}
.smart-service .scope-cards{display:grid;gap:16px}
.smart-service .scope-cards article{padding:24px 26px;border:1px solid #dce5f0;border-radius:19px}
.smart-service .scope-cards h3{font-size:20px}
.smart-service .scope-cards p{font-size:14px;line-height:1.8;margin:0}
.smart-service .integration-section{display:grid;grid-template-columns:1fr 1.1fr;gap:36px;align-items:center;background:#f0f5fb;padding:30px;border-radius:23px;margin:0 0 12px}
.smart-service .integration-section figure,.smart-service .camera-process figure{margin:0;min-width:0}
.smart-service .integration-section figure img{width:100%;height:auto;display:block;border-radius:20px}
.smart-service .integration-section p:not(.eyebrow){font-size:14px;line-height:1.85}
.smart-service .integration-section h2{font-size:30px}
.smart-service .ecosystem-label{font-size:11px;font-weight:700;color:#61738a;margin:22px 0 10px}
.smart-service .logo-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}
.smart-service .logo-row>div{display:flex;align-items:center;justify-content:center;height:68px;background:white;border:1px solid #dce5f0;border-radius:13px;padding:10px}
.smart-service .logo-row img{display:block;max-width:100%;max-height:46px;object-fit:contain}
.smart-service .protocols{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:17px}
.smart-service .protocols span{font-size:11px;color:#61738a}
.smart-service .protocols img{width:50px;height:35px;object-fit:contain}
.smart-service .scenario-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.smart-service .scenario-grid article{display:grid;grid-template-columns:155px minmax(0,1fr);border:1px solid #dce5f0;border-radius:20px;overflow:hidden}
.smart-service .scenario-grid img{width:155px;height:100%;min-height:180px;object-fit:cover}
.smart-service .scenario-grid article>div{padding:23px}
.smart-service .scenario-grid h3{font-size:21px}
.smart-service .scenario-grid p{font-size:14px;line-height:1.8;margin:0}
.smart-service .process-section{display:grid;grid-template-columns:1fr 1.1fr;gap:43px;border-top:1px solid #dce5f0;border-bottom:1px solid #dce5f0}
.smart-service .process-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:480px}
.smart-service .project-steps{display:grid;gap:23px;padding:0;margin:4px 0;list-style:none}
.smart-service .project-steps li{display:flex;align-items:flex-start;gap:17px}
.smart-service .project-steps b{display:grid;place-items:center;flex-shrink:0;width:34px;height:34px;border-radius:50%;background:#08285c;color:white;font-size:11px}
.smart-service .project-steps h3{font-size:19px;line-height:1.4;margin:2px 0 9px}
.smart-service .project-steps p{font-size:14px;line-height:1.85;margin:0}
.smart-service .application-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}
.smart-service .application-grid .solution-card{display:flex;flex-direction:column}
.smart-service .application-grid .solution-card>img{width:100%;height:150px;min-height:0;object-fit:cover}
.smart-service .application-grid .solution-card>div{padding:22px}
.smart-service .application-grid h3{font-size:20px}
.smart-service .planning-section{display:grid;grid-template-columns:1fr 1.1fr;gap:45px;border-top:1px solid #dce5f0;border-bottom:1px solid #dce5f0}
.smart-service .planning-section>div>p:not(.eyebrow){font-size:16px;line-height:1.85;max-width:500px}
.smart-service .planning-list{display:grid;gap:16px}
.smart-service .planning-list article{display:flex;gap:17px;background:#f0f5fb;border-radius:19px;padding:23px}
.smart-service .planning-list b{display:grid;place-items:center;flex-shrink:0;width:31px;height:31px;background:white;color:#08285c;border:1px solid #d4e0ef;border-radius:50%;font-size:10px}
.smart-service .planning-list h3{font-size:18px;margin:2px 0 9px}
.smart-service .planning-list p{font-size:14px;line-height:1.8;margin:0}
.smart-service .camera-brands{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:15px;margin:25px 0 0}
.smart-service .camera-brands>div{display:flex;align-items:center;justify-content:center;padding:18px 25px;height:95px;background:linear-gradient(180deg,#fff,#eef3fa);border:1px solid #dce5f0;border-radius:18px}
.smart-service .camera-brands img{max-height:52px;max-width:100%;object-fit:contain}
.smart-service .camera-process{display:grid;grid-template-columns:1fr 1.15fr;gap:40px;align-items:center}
.smart-service .camera-process figure img{display:block;width:100%;height:auto;border-radius:23px}
.smart-service .camera-process h2{font-size:30px}
.smart-service .camera-process .project-steps{margin-top:26px}
.smart-service .faq{max-width:960px;margin:auto}
.smart-service .faq h2{font-size:31px}
.smart-service .faq summary{font-size:16px}
.smart-service .faq details p{font-size:15px}
.smart-service .final{margin-top:25px}
.smart-service .final .actions{justify-content:center}
.smart-service .final .micro{margin:20px auto 0;font-size:12px}
.smart-service .final .eyebrow{color:#c8d8ed}
.smart-service .final h2{font-size:34px}
.smart-service .site-footer>img{display:block;width:70px;height:70px;margin:0 auto 16px}
.smart-service .site-footer .micro{margin-top:24px;font-size:12px}
@media(max-width:1050px){.smart-service .solution-card{grid-template-columns:110px minmax(0,1fr)}
.smart-service .solution-card>img{width:110px}
.smart-service .solution-card>div{padding:22px 19px}
.smart-service .scenario-grid article{grid-template-columns:110px minmax(0,1fr)}
.smart-service .scenario-grid img{width:110px}
.smart-service .scenario-grid article>div{padding:21px 18px}
.smart-service .application-grid .solution-card>img{width:100%}}
@media(max-width:850px){.smart-service .scope-section,.smart-service .process-section,.smart-service .planning-section{grid-template-columns:1fr;gap:27px}
.smart-service .scope-section>div>p:not(.eyebrow),.smart-service .process-section>div>p:not(.eyebrow),.smart-service .planning-section>div>p:not(.eyebrow){max-width:none}
.smart-service .integration-section{grid-template-columns:1fr;gap:26px}
.smart-service .integration-section figure{max-width:650px}
.smart-service .application-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.smart-service .camera-process{grid-template-columns:1fr;gap:28px}
.smart-service .camera-process figure{max-width:650px}
.smart-service .scenario-grid{grid-template-columns:1fr}
.smart-service .scenario-grid article{grid-template-columns:160px minmax(0,1fr)}
.smart-service .scenario-grid img{width:160px}}
@media(max-width:600px){.smart-service .service-hero{padding:20px 4px 32px}
.smart-service .service-hero h1{font-size:34px}
.smart-service .service-hero .lead{font-size:17px;line-height:1.8}
.smart-service .solution-grid{grid-template-columns:1fr;gap:15px}
.smart-service .solution-card{grid-template-columns:100px minmax(0,1fr)}
.smart-service .solution-card>img{width:100px;min-height:185px}
.smart-service .solution-card>div{padding:22px 17px}
.smart-service .solution-card h3{font-size:20px}
.smart-service .solution-card p{font-size:14px;line-height:1.8}
.smart-service .scope-cards article{padding:24px 22px}
.smart-service .scope-cards h3{font-size:20px}
.smart-service .integration-section{padding:25px 21px;border-radius:21px}
.smart-service .integration-section h2{font-size:28px}
.smart-service .logo-row{grid-template-columns:repeat(2,minmax(0,1fr))}
.smart-service .logo-row>div{height:65px}
.smart-service .logo-row img{max-height:44px;max-width:90px}
.smart-service .protocols{gap:12px}
.smart-service .protocols span{width:100%}
.smart-service .scenario-grid article{grid-template-columns:100px minmax(0,1fr)}
.smart-service .scenario-grid img{width:100px}
.smart-service .scenario-grid article>div{padding:22px 17px}
.smart-service .scenario-grid h3{font-size:20px}
.smart-service .project-steps li{gap:13px}
.smart-service .project-steps b{width:30px;height:30px;font-size:10px}
.smart-service .project-steps h3{font-size:18px}
.smart-service .application-grid{grid-template-columns:1fr}
.smart-service .application-grid .solution-card{display:grid;grid-template-columns:100px minmax(0,1fr)}
.smart-service .application-grid .solution-card>img{width:100px;height:100%;min-height:170px;object-fit:cover}
.smart-service .application-grid .solution-card>div{padding:22px 17px}
.smart-service .planning-list article{padding:21px 19px;gap:13px}
.smart-service .planning-list h3{font-size:18px}
.smart-service .camera-brands{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}
.smart-service .camera-brands>div{height:85px;padding:18px}
.smart-service .camera-brands img{max-height:45px}
.smart-service .camera-process h2{font-size:28px}
.smart-service .faq h2{font-size:28px}
.smart-service .faq summary{font-size:16px}
.smart-service .faq details p{font-size:15px}
.smart-service .final h2{font-size:29px}
.smart-service .final .actions .action{font-size:14px}
.smart-service .main-card{padding-top:18px}}
@media(max-width:350px){.smart-service .service-hero h1{font-size:31px}
.smart-service .solution-card{grid-template-columns:85px minmax(0,1fr)}
.smart-service .solution-card>img{width:85px}
.smart-service .solution-card>div{padding:21px 15px}
.smart-service .solution-card h3{font-size:19px}
.smart-service .application-grid .solution-card{grid-template-columns:85px minmax(0,1fr)}
.smart-service .application-grid .solution-card>img{width:85px}
.smart-service .application-grid .solution-card>div{padding:21px 15px}}
body{margin:0;background:#f4f7fb}
.smart-service{box-sizing:border-box;min-height:100vh;padding:100px 40px 40px;color:#405168;background:#f4f7fb;font:17px/1.75 Arial,sans-serif}
.smart-service .main-card{width:min(1200px,calc(100% - 40px))}
@media(max-width:600px){.smart-service{padding:94px 6px 12px;font-size:16px}.smart-service .main-card{width:100%}}

@media(max-width:350px){.smart-service .site-header .brand{font-size:14px;gap:6px;white-space:nowrap}.smart-service .site-header .brand img{width:24px;height:24px}.smart-service .site-header .header-controls{gap:8px}.smart-service .site-header .language{font-size:11px;padding:7px 8px}}
`;
export default styles;
