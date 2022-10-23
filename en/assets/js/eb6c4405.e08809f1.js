"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="COS Triggers (Object Storage)",l={unversionedId:"serverless/tencent_trigger_cos",id:"serverless/tencent_trigger_cos",title:"COS Triggers (Object Storage)",description:"COS is a service used by Tencent Cloud to store some resource files.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/tencent_trigger_cos.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_cos",permalink:"/en/docs/serverless/tencent_trigger_cos",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/tencent_trigger_cos.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"COS trigger configuration",id:"cos-trigger-configuration",level:2},{value:"Event structure",id:"event-structure",level:2},{value:"Local development",id:"local-development",level:2},{value:"Local test",id:"local-test",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cos-triggers-object-storage"},"COS Triggers (Object Storage)"),(0,a.kt)("p",null,"COS is a service used by Tencent Cloud to store some resource files."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide\n  Inject\n  ServerlessTrigger\n  ServerlessTriggerType\n} from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType. OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*',\n    filter: {\n      prefix: 'filterdir /',\n      suffix: '.jpg',\n    },\n  })\n  async handleCOSEvent(event: SCF.COSEvent) {\n    // xxx\n  }\n}\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"."),(0,a.kt)("h2",{id:"cos-trigger-configuration"},"COS trigger configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The bucket address of the object store.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"events"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the event that triggered the execution of the function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"{",(0,a.kt)("br",null),"prefix: string; ",(0,a.kt)("br",null),"suffix: string;",(0,a.kt)("br",null),"}"),(0,a.kt)("td",{parentName:"tr",align:null},"the object filtering parameter. only objects that meet the filtering criteria can trigger the function. it contains a configuration property key, which indicates the object key that the filter supports filtering.")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Listener Object Creation Event")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  @ServerlessTrigger(ServerlessTriggerType. OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*',\n    filter: {\n      prefix: 'filterdir /',\n      suffix: '.jpg',\n    },\n  })\n")),(0,a.kt)("h2",{id:"event-structure"},"Event structure"),(0,a.kt)("p",null,"The structure returned by COS messages is as follows, which is described in the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"SCF.COSEvent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Records": [\n    {\n      "cos": {\n        "cosSchemaVersion": "1.0 ",\n        "cosObject": {\n          "url": "http://testpic-1253970026.cos.ap-chengdu.myqcloud.com/testfile ",\n          "meta": {\n            "x-cos-request-id": "NWMxOWY4MGFfMjViMjU4NjRfMTUyMV8yNzhhZjM =",\n            "Content-Type": ""\n          },\n          "vid": "",\n          "key": "",\n          "size": 1029\n        },\n        "cosBucket": {\n          "region": "cd ",\n          "name": "testpic ",\n          "appid": "1253970026"\n        },\n        "cosNotificationId": "unkown"\n      },\n      "event": {\n        "eventName": "cos:ObjectCreated :*",\n        "eventVersion": "1.0 ",\n        "eventTime": 1545205770\n        "eventSource": "qcs::cos ",\n        "requestParameters": {\n          "requestSourceIP": "192.168.15.101 ",\n          "requestHeaders": {\n            "Authorization": "****************"\n          }\n        },\n        "eventQueue": "qcs:0:lambda:cd:appid/1253970026:default.printevent.$LATEST ",\n        "reservedInfo": "",\n        "reqid": 179398952\n      }\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"You cannot use dev to develop events locally. You can only run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test")," command to run tests."),(0,a.kt)("h2",{id:"local-test"},"Local test"),(0,a.kt)("p",null,"Unlike HTTP testing, the function app is created by ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp"),", and the instance of the entire class is obtained by ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance"),", thus calling a specific method to test."),(0,a.kt)("p",null,"You can quickly create the structure passed in by the platform by ",(0,a.kt)("inlineCode",{parentName:"p"},"createCOSEvent")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createCOSEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleCOSEvent(createCOSEvent())).toEqual('hello world');\n  });\n});\n")))}u.isMDXComponent=!0}}]);