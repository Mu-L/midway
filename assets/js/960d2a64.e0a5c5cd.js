"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22801],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?r.createElement(g,p(p({ref:n},c),{},{components:t})):r.createElement(g,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={},p="Egg \u5e94\u7528\u8fc1\u79fb",i={unversionedId:"serverless/migrate_egg",id:"serverless/migrate_egg",title:"Egg \u5e94\u7528\u8fc1\u79fb",description:"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 egg \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002",source:"@site/docs/serverless/migrate_egg.md",sourceDirName:"serverless",slug:"/serverless/migrate_egg",permalink:"/docs/serverless/migrate_egg",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_egg.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"Express \u5e94\u7528\u8fc1\u79fb",permalink:"/docs/serverless/migrate_express"},next:{title:"Serverless \u89e6\u53d1\u5668 POST \u60c5\u51b5\u5dee\u5f02",permalink:"/docs/serverless/serverless_post_difference"}},o={},s=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"TS \u7f16\u8bd1",id:"ts-\u7f16\u8bd1",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u9ed8\u8ba4\u60c5\u51b5",id:"\u9ed8\u8ba4\u60c5\u51b5",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d",id:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d",level:3},{value:"\u8fc1\u79fb\u65b9\u6848\u7684 Egg \u9ed8\u8ba4\u914d\u7f6e",id:"\u8fc1\u79fb\u65b9\u6848\u7684-egg-\u9ed8\u8ba4\u914d\u7f6e",level:3},{value:"\u963f\u91cc\u4e91",id:"\u963f\u91cc\u4e91",level:3},{value:"\u817e\u8baf\u4e91",id:"\u817e\u8baf\u4e91",level:3},{value:"\u4e00\u4e9b\u9650\u5236",id:"\u4e00\u4e9b\u9650\u5236",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"egg-\u5e94\u7528\u8fc1\u79fb"},"Egg \u5e94\u7528\u8fc1\u79fb"),(0,a.kt)("p",null,"Midway Serverless \u63d0\u4f9b\u4e86\u4e00\u5957\u901a\u7528\u7684\u5e94\u7528\u8fc1\u79fb\u65b9\u6848\uff0c\u5c06\u539f\u6709\u5e94\u7528\u5c3d\u53ef\u80fd\u4e0d\u4fee\u6539\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u53d1\u5e03\u5230\u51fd\u6570\u5e73\u53f0\u3002\u4f7f\u7528\u6b64\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u539f\u6709\u7684 egg \u5e94\u7528\u5c3d\u53ef\u80fd\u5feb\u901f\u7b80\u5355\u7684\u8fc1\u79fb\u5230\u51fd\u6570\u5e73\u53f0\u8fdb\u884c\u6258\u7ba1\uff0c\u4eab\u53d7\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5f39\u6027\u7ea2\u5229\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u6839\u76ee\u5f55\u65b0\u589e\u52a0\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml"),"\uff0c\u6700\u4e3a\u7cbe\u7b80\u7684\u5185\u5bb9\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-egg-demo       ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun             ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType: \n  type: egg                ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n  version: 3.0.0\n\npackage:\n  include:\n    - public               ## \u5982\u679c\u6709\u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u5199\u5728\u8fd9\u91cc\u4f1a\u88ab\u81ea\u52a8\u62f7\u8d1d\n  exclude:\n    - package-lock.json    ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n\ncustom:\n  customDomain:\n    domainName: auto       ## \u81ea\u52a8\u751f\u6210\u57df\u540d\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6709\u65f6\u5019 package-lock.json \u6587\u4ef6\u4f1a\u9020\u6210\u90e8\u7f72\u5305\u8fc7\u5927\uff08\u5c06 dev \u4f9d\u8d56\u6253\u5165\uff09\u3002")),(0,a.kt)("h2",{id:"ts-\u7f16\u8bd1"},"TS \u7f16\u8bd1"),(0,a.kt)("p",null,"\u5982\u679c\u662f  egg-ts \u9879\u76ee\uff0c\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u53d1\u5e03\u94a9\u5b50\uff0c\u5728\u53d1\u5e03\u65f6\u81ea\u52a8\u6267\u884c\u7f16\u8bd1\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "xxxxxx",\n  "version": "xxxx",\n  .....\n  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run tsc"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e Scripts \u811a\u672c\u548c dev \u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "midway-bin deploy",\n    ...\n  }\n}\n')),(0,a.kt)("p",null,"\u6216\u8005\u4f7f\u7528\u4e0d\u540c\u7684 npm \u5305\u52a0\u901f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "midway-bin deploy --npm=cnpm",\n    ...\n  }\n}\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5355\u72ec\u6267\u884c\u547d\u4ee4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx midway-bin deploy                                     ## deploy by npm\n$ npx midway-bin deploy --npm=cnpm              ## deploy by cnpm\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u60c5\u51b5"},"\u9ed8\u8ba4\u60c5\u51b5"),(0,a.kt)("h3",{id:"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d"},"\u4fee\u6539\u9ed8\u8ba4\u90e8\u7f72\u7684\u51fd\u6570\u540d"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 name \u5b57\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-demo                        ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\n\nprovider:\n  name: aliyun                          ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType:\n  type: egg\n  version: 3.0.0\n  name: app_idx                             ## \u51fd\u6570\u540d\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 deployType \u65f6 aggregation \u5b57\u6bb5\u4e0d\u751f\u6548\u3002")),(0,a.kt)("h3",{id:"\u8fc1\u79fb\u65b9\u6848\u7684-egg-\u9ed8\u8ba4\u914d\u7f6e"},"\u8fc1\u79fb\u65b9\u6848\u7684 Egg \u9ed8\u8ba4\u914d\u7f6e"),(0,a.kt)("p",null,"\u5f53\u524d\u8fc1\u79fb\u65b9\u6848\u4f1a\u589e\u52a0\u4e00\u4e9b\u9ed8\u8ba4\u914d\u7f6e\uff0c\u7528\u4e8e\u5728\u51fd\u6570\u4f53\u7cfb\u4e0b\u66f4\u597d\u8fd0\u884c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u65e0\u9700\u4fee\u6539"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default\nconst os = require('os');\nexports.logger = {\n  dir: os.tmpdir(),\n};\n\nexports.rundir = os.tmpdir();\n\nexports.static = {\n  buffer: true,\n};\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u51fd\u6570\u73af\u5883\u78c1\u76d8\u4e0d\u53ef\u5199\uff0c\u6211\u4eec\u5c06\u9ed8\u8ba4\u7684\u65e5\u5fd7\u76ee\u5f55\u90fd\u8c03\u6574\u4e3a\u4e86\u4e34\u65f6\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// plugin\n\n'use strict';\n\nexports.i18n = false;\nexports.watcher = false;\nexports.development = false;\nexports.logrotator = false;\nexports.schedule = false;\nexports.static = false;\n")),(0,a.kt)("p",null,"\u548c\u9ed8\u8ba4 egg \u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u91cc\u9ed8\u8ba4\u5173\u95ed\u4e86 static \u63d2\u4ef6\uff0c\u539f\u56e0\u662f\uff0c\u5982\u679c\u9ed8\u8ba4\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"app/public")," \u76ee\u5f55\uff0c\u63d2\u4ef6\u542f\u52a8\u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a\uff0c\u7531\u4e8e\u670d\u52a1\u5668\u78c1\u76d8\u4e0d\u53ef\u5199\uff0c\u5c31\u4f1a\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709 static \u63d2\u4ef6\u7684\u9700\u6c42\uff0c\u8bf7",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6253\u5f00"),"\uff0c\u5e76",(0,a.kt)("strong",{parentName:"p"},"\u52a1\u5fc5\u4fdd\u8bc1\u5b58\u5728")," ",(0,a.kt)("inlineCode",{parentName:"p"},"app/public")," \u6216\u8005\u76f8\u5e94\u7684\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," \u76ee\u5f55\u5728\u6839\u76ee\u5f55\uff0c\u8bf7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.include")," \u5b57\u6bb5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"package:\n  include:\n    - public                ## \u5982\u679c\u6709\u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u5199\u5728\u8fd9\u91cc\u4f1a\u88ab\u81ea\u52a8\u62f7\u8d1d\n  exclude:\n    - package-lock.json     ## \u5ffd\u7565 package-lock.json \u6587\u4ef6\n")),(0,a.kt)("h3",{id:"\u963f\u91cc\u4e91"},"\u963f\u91cc\u4e91"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a http \u89e6\u53d1\u5668\uff0c\u5982\u679c\u9700\u8981 API \u7f51\u5173\uff0c\u53ef\u4ee5\u81ea\u884c\u6309\u7167 f.yml \u7684\u683c\u5f0f\u8fdb\u884c functions \u7ed3\u6784\u7684\u4fee\u6539\u914d\u7f6e\uff0c\u540c\u65f6\uff0c\u5728 API \u7f51\u5173\u5904\u914d\u7f6e\u8def\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"/*")," \u4e2d\u8f6c\u5230\u8be5\u51fd\u6570\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u817e\u8baf\u4e91"},"\u817e\u8baf\u4e91"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u53d1\u5e03\u4e3a API \u7f51\u5173\u89e6\u53d1\u5668\uff0c\u540c\u65f6\u4f1a\u81ea\u52a8\u914d\u7f6e\u7f51\u5173\u8def\u7531\u3002"),(0,a.kt)("h2",{id:"\u4e00\u4e9b\u9650\u5236"},"\u4e00\u4e9b\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 egg-socketio \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u7b49\u7f51\u5173\u65e0\u6cd5\u652f\u6301\u7684\u80fd\u529b")))}u.isMDXComponent=!0}}]);