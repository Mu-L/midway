"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return n?r.createElement(k,p(p({ref:t},d),{},{components:n})):r.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"Express"},p=void 0,o={unversionedId:"express",id:"version-2.0.0/express",title:"Express",description:"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002",source:"@site/versioned_docs/version-2.0.0/express.md",sourceDirName:".",slug:"/express",permalink:"/en/docs/2.0.0/express",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/express.md",tags:[],version:"2.0.0",frontMatter:{title:"Express"},sidebar:"common",previous:{title:"Koa",permalink:"/en/docs/2.0.0/koa"},next:{title:"SocketIO",permalink:"/en/docs/2.0.0/socketio"}},i={},s=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u63a7\u5236\u5668\uff08Controller\uff09",id:"\u63a7\u5236\u5668controller",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u88c5\u9970\u5668",id:"\u8bf7\u6c42\u53c2\u6570\u88c5\u9970\u5668",level:3},{value:"\u7f16\u5199 Web \u4e2d\u95f4\u4ef6",id:"\u7f16\u5199-web-\u4e2d\u95f4\u4ef6",level:2},{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",level:2},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:2},{value:"\u6846\u67b6\u542f\u52a8\u53c2\u6570",id:"\u6846\u67b6\u542f\u52a8\u53c2\u6570",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u90e8\u7f72\u5230\u666e\u901a\u5e94\u7528\u5bb9\u5668",id:"\u90e8\u7f72\u5230\u666e\u901a\u5e94\u7528\u5bb9\u5668",level:3},{value:"\u90e8\u7f72\u5230 Serverless \u73af\u5883",id:"\u90e8\u7f72\u5230-serverless-\u73af\u5883",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u5185\u5bb9\uff0c\u4e3b\u8981\u4ecb\u7ecd\u5728 Midway \u4e2d\u5982\u4f55\u4f7f\u7528 Express \u4f5c\u4e3a\u4e0a\u5c42\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u81ea\u8eab\u7684\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u7684\u811a\u624b\u67b6\u6765\u521b\u5efa\u4e00\u4e2a\u6a21\u7248\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm -v\n\n# \u5982\u679c\u662f npm v6\n$ npm init midway --type=express hello_express\n\n# \u5982\u679c\u662f npm v7\n$ npm init midway -- --type=express hello_express\n")),(0,a.kt)("p",null,"\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd hello_express  // \u8fdb\u5165\u9879\u76ee\u8def\u5f84\n$ npm run dev       // \u672c\u5730\u8fd0\u884c\n")),(0,a.kt)("p",null,"\u9488\u5bf9 Express\uff0cMidway \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u5305\u8fdb\u884c\u4e86\u9002\u914d\uff0c\u5728\u5176\u4e2d\u63d0\u4f9b\u4e86 Midway \u7279\u6709\u7684\u4f9d\u8d56\u6ce8\u5165\u3001\u5207\u9762\u7b49\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5305\u5217\u4e3e\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "@midwayjs/express": "^2.3.11",\n    "@midwayjs/decorator": "^2.3.11"\n  },\n  "devDependencies": {\n    "@midwayjs/mock": "^2.3.11",\n  },\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"@midwayjs/express"),(0,a.kt)("th",{parentName:"tr",align:null},"Midway \u9488\u5bf9 express \u7684\u9002\u914d\u5c42"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/decorator"),(0,a.kt)("td",{parentName:"tr",align:null},"Midway \u7cfb\u5217\u901a\u7528\u7684\u88c5\u9970\u5668\u5305")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/mock"),(0,a.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5f00\u53d1\u5de5\u5177\u5305")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4f7f\u7528\u7684 Express \u7248\u672c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"v4")," \u3002")),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller                                              # controller\u63a5\u53e3\u7684\u5730\u65b9\n\u2502   \u251c\u2500\u2500 service                                                     # service\u903b\u8f91\u5904\u7406\u7684\u5730\u65b9\n|   \u2514\u2500\u2500 configuration.ts                                    # \u5165\u53e3\u53ca\u751f\u547d\u5468\u671f\u914d\u7f6e\u3001\u7ec4\u4ef6\u7ba1\u7406\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("h2",{id:"\u63a7\u5236\u5668controller"},"\u63a7\u5236\u5668\uff08Controller\uff09"),(0,a.kt)("p",null,"\u6574\u4e2a\u8bf7\u6c42\u63a7\u5236\u5668\u7684\u5199\u6cd5\u548c Midway \u9002\u914d\u5176\u4ed6\u6846\u67b6\u7684\u7c7b\u4f3c\u3002\u4e3a\u4e86\u548c\u5176\u4ed6\u573a\u666f\u7684\u6846\u67b6\u5199\u6cd5\u4e00\u81f4\uff0c\u5728\u8bf7\u6c42\u7684\u65f6\u5019\uff0cMidway \u5c06 Express \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," \u5305\u88c5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," \u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/express';\nimport { Request, Response } from 'express';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context; // \u5305\u542b\u4e86 req \u548c res\n\n  @Get('/')\n  async home(@Query() id) {\n    console.log(id); // this.ctx.req.query.id === id\n    return 'hello world'; // \u7b80\u5355\u8fd4\u56de\uff0c\u7b49\u4ef7\u4e8e res.send('hello world');\n  }\n}\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u989d\u5916\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"req")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"res")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/express';\nimport { Request, Response } from 'express';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Inject()\n  ctx: Context; // \u5305\u542b\u4e86 req \u548c res\n\n  @Inject()\n  req: Request;\n\n  @Inject()\n  res: Response;\n\n  @Get('/')\n  async home(@Query() id) {\n    // this.req.query.id === id\n  }\n}\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u88c5\u9970\u5668"},"\u8bf7\u6c42\u53c2\u6570\u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u5728 @midwayjs/express \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5927\u90e8\u5206\u7684\u8bf7\u6c42\u88c5\u9970\u5668\uff0c\u5177\u4f53\u7684\u5217\u8868\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"@Query"),(0,a.kt)("th",{parentName:"tr",align:null},"\u221a"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Body"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u81ea\u884c\u5b89\u88c5 body \u89e3\u6790\u5e93\u540e\u4f7f\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Param"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Headers"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Session"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u81ea\u884c\u5b89\u88c5 session \u540e\u4f7f\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@RequestPath"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@RequestIP"),(0,a.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@Queries"),(0,a.kt)("td",{parentName:"tr",align:null},"\u540c @Query")))),(0,a.kt)("p",null,"\u7531\u4e8e express \u6846\u67b6\u76f8\u5bf9\u7eaf\u7cb9\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u6ca1\u6709\u57cb\u5165 body \u89e3\u6790\u7684\u5e93\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Body")," \u88c5\u9970\u5668\u5c06\u5728\u5b89\u88c5\u4e86\u89e3\u6790 body \u5e93\u4e4b\u540e\u624d\u80fd\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c31\u662f\u5982\u4f55\u4f7f\u7528 body \u89e3\u6790\u5e93\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i body-parser --save\n")),(0,a.kt)("p",null,"\u7136\u540e\u4e2d\u95f4\u4ef6\u5728 configuration \u4e2d\u52a0\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/express';\nimport * as bodyParser from 'body-parser';\n\n@Configuration()\nexport class AutoConfiguration {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(bodyParser.json());\n    this.app.use(bodyParser.urlencoded({ extended: false }));\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/expressjs/body-parser"},"body-parser")," \u6587\u6863\u3002"),(0,a.kt)("p",null,"\u540c\u7406 Session \u652f\u6301\u4e5f\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"session"},"Session \u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199-web-\u4e2d\u95f4\u4ef6"},"\u7f16\u5199 Web \u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"Express \u7684\u4e2d\u95f4\u4ef6\u5199\u6cd5\u6bd4\u8f83\u7279\u6b8a\uff0c\u5b83\u7684\u53c2\u6570\u4e0d\u540c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { IWebMiddleware } from '@midwayjs/express';\nimport { Request, Response, NextFunction } from 'express';\n\n@Provide()\nexport class ReportMiddleware implements IWebMiddleware {\n  resolve() {\n    return async (req: Request, res: Response, next: NextFunction) => {\n      console.log('Request...');\n      next();\n    };\n  }\n}\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6211\u4eec\u5bfc\u51fa\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReportMiddleware"),"\xa0 \u7c7b\uff0c\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7c7b\u7684 id \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"reportMiddleware"),"\xa0\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a\u4e0a\u9762\u7f16\u5199\u7684\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a Controller \u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5c06\u4e2d\u95f4\u4ef6\u5e94\u7528\u5230\u5355\u4e2a\u8def\u7531\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Provide } from '@midwayjs/decorator';\n\n@Provide()\n@Controller('/', { middleware: ['reportMiddleware'] }) // controller \u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\nexport class HomeController {\n  @Get('/', { middleware: ['reportMiddleware'] }) // \u8def\u7531\u7ea7\u522b\u7684\u4e2d\u95f4\u4ef6\n  async home() {\n    return 'hello world';\n  }\n}\n")),(0,a.kt)("h2",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"app.generateMiddleware"),"\xa0 \u65b9\u6cd5\uff0c\u5728\u5165\u53e3\u5904\u52a0\u8f7d\u5168\u5c40\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/express';\n\n@Configuration()\nexport class ContainerLifeCycle implements ILifeCycle {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(await this.app.generateMiddleware('reportMiddleware'));\n  }\n}\n")),(0,a.kt)("p",null,"\u9664\u4e86\u52a0\u8f7d Class \u5f62\u5f0f\u7684\u4e2d\u95f4\u4ef6\u5916\uff0c\u4e5f\u652f\u6301\u52a0\u8f7d\u4f20\u7edf\u7684 Express \u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/express';\nimport { join } from 'path';\n\n@Configuration()\nexport class ContainerLifeCycle implements ILifeCycle {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use((req, res, next) => {\n      // xxx\n    });\n  }\n}\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," \u5bf9\u8c61\uff0c\u6765\u8c03\u7528\u5230\u6240\u6709 Express \u4e0a\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u6846\u67b6\u542f\u52a8\u53c2\u6570"},"\u6846\u67b6\u542f\u52a8\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/express"),"\xa0 \u6846\u67b6\u7684\u542f\u52a8\u53c2\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"port"),(0,a.kt)("th",{parentName:"tr",align:null},"number"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\uff0c\u542f\u52a8\u7684\u7aef\u53e3"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Array<Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Object>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHTTPS \u8bc1\u4e66 key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cert"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Array<Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Object>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHTTPS \u8bc1\u4e66 cert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ca"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Array<Buffer"),(0,a.kt)("td",{parentName:"tr",align:null},"Object>"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0cHTTPS \u8bc1\u4e66 ca")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684 hostname\uff0c\u9ed8\u8ba4 127.1"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"http2"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0chttp2 \u652f\u6301\uff0c\u9ed8\u8ba4 false"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u90e8\u7f72\u5230\u666e\u901a\u5e94\u7528\u5bb9\u5668"},"\u90e8\u7f72\u5230\u666e\u901a\u5e94\u7528\u5bb9\u5668"),(0,a.kt)("p",null,"Midway \u6784\u5efa\u51fa\u6765\u7684\u9879\u76ee\u662f\u5355\u8fdb\u7a0b\u7684\uff0c\u4e0d\u7ba1\u662f\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," \u6a21\u5f0f\u8fd8\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster")," \u6a21\u5f0f\uff0c\u5355\u8fdb\u7a0b\u7684\u4ee3\u7801\u603b\u662f\u5f88\u5bb9\u6613\u7684\u517c\u5bb9\u5230\u4e0d\u540c\u7684\u4f53\u7cfb\u4e2d\uff0c\u56e0\u6b64\u975e\u5e38\u5bb9\u6613\u88ab\u793e\u533a\u73b0\u6709\u7684 pm2/forever \u7b49\u5de5\u5177\u6240\u52a0\u8f7d\uff0c"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u4ee5 pm2 \u6765\u6f14\u793a\u5982\u4f55\u90e8\u7f72\u3002"),(0,a.kt)("p",null,"\u9879\u76ee\u4e00\u822c\u90fd\u9700\u8981\u4e00\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u6bd4\u5982\uff0c\u6211\u4eec\u5728\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u4f5c\u4e3a\u6211\u4eec\u7684\u90e8\u7f72\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  hello_express tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist                # Midway \u6784\u5efa\u4ea7\u7269\u76ee\u5f55\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 server.js                       # \u90e8\u7f72\u542f\u52a8\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u65b9\u5f0f\u4ee5\u6ee1\u8db3\u4e0d\u540c\u573a\u666f\u7684\u542f\u52a8\u65b9\u5f0f\uff0c\u53ea\u9700\u8981\u5b89\u88c5\u6211\u4eec\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/bootstrap")," \u6a21\u5757\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/bootstrap --save\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5199\u5165\u4ee3\u7801\uff0c\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u4ee3\u7801\u4f7f\u7528\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u83b7\u53d6\u6846\u67b6\nconst WebFramework = require('@midwayjs/express').Framework;\n// \u521d\u59cb\u5316 web \u6846\u67b6\u5e76\u4f20\u5165\u542f\u52a8\u53c2\u6570\nconst web = new WebFramework().configure({\n  port: 7001,\n});\n\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\n// \u52a0\u8f7d\u6846\u67b6\u5e76\u6267\u884c\nBootstrap.load(web).run();\n")),(0,a.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u7684\u6bcf\u4e2a\u4e0a\u5c42\u6846\u67b6\u90fd\u5c06\u4f1a\u5bfc\u51fa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Framework")," \u7c7b\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrap")," \u7684\u4f5c\u7528\u5219\u662f\u52a0\u8f7d\u8fd9\u4e9b\u6846\u67b6\uff0c\u4f20\u5165\u542f\u52a8\u53c2\u6570\uff0c\u8fd0\u884c\u4ed6\u4eec\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u4f60\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"node bootstrap.js")," \u6765\u542f\u52a8\u4ee3\u7801\u4e86\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 pm2 \u6765\u6267\u884c\u542f\u52a8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g pm2\n$ pm2 start bootstrap.js\n")),(0,a.kt)("h3",{id:"\u90e8\u7f72\u5230-serverless-\u73af\u5883"},"\u90e8\u7f72\u5230 Serverless \u73af\u5883"),(0,a.kt)("p",null,"Serverless \u73af\u5883\u6307\u7684\u662f\u963f\u91cc\u4e91 FC\uff0c\u817e\u8baf\u4e91\u7b49\u51fd\u6570\u73af\u5883\u3002Midway \u53ef\u4ee5\u5c06\u73b0\u6709\u7684 Web \u9879\u76ee\u90e8\u7f72\u4e3a Serverless \u5e94\u7528\uff0c\u8fd9\u91cc\u4ee5\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u51fd\u6570\u8ba1\u7b97\u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"1\u3001\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u6587\u4ef6\u5230\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  hello_express tree\n.\n\u251c\u2500\u2500 src\n\u251c\u2500\u2500 dist\n\u251c\u2500\u2500 f.yml                               # Midway Serverless \u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-midway-app ## \u5e94\u7528\u53d1\u5e03\u5230\u4e91\u5e73\u53f0\u7684\u540d\u5b57\uff0c\u4e00\u822c\u6307\u5e94\u7528\u540d\n\nprovider:\n  name: aliyun ## \u53d1\u5e03\u7684\u4e91\u5e73\u53f0\uff0caliyun\uff0ctencent \u7b49\n\ndeployType: express ## \u90e8\u7f72\u7684\u5e94\u7528\u7c7b\u578b\n")),(0,a.kt)("p",null,"2\u3001\u4ee3\u7801\u4fee\u6539"),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," \u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," \uff0c\u79fb\u9664\u5185\u90e8\u7684\u7aef\u53e3\uff08Serverless \u73af\u5883\u4e0d\u9700\u8981\uff09\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a app\u3002"),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u83b7\u53d6\u6846\u67b6\nconst WebFramework = require('@midwayjs/express').Framework;\n// \u521d\u59cb\u5316 web \u6846\u67b6\u5e76\u4f20\u5165\u542f\u52a8\u53c2\u6570\nconst web = new WebFramework().configure({});\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\nmodule.exports = async () => {\n  // \u52a0\u8f7d\u6846\u67b6\u5e76\u6267\u884c\n  await Bootstrap.load(web).run();\n  // \u8fd4\u56de app \u5bf9\u8c61\n  return web.getApplication();\n};\n")),(0,a.kt)("p",null,"3\u3001\u6dfb\u52a0\u53d1\u5e03\u65f6\u7684\u6784\u5efa\u94a9\u5b50"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u52a0\u5165\u4e0b\u9762\u7684\u8fd9\u6bb5\uff0c\u7528\u4e8e\u5728\u53d1\u5e03\u65f6\u81ea\u52a8\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  "midway-integration": {\n    "lifecycle": {\n      "before:package:cleanup": "npm run build"\n    }\n  },\n    "scripts": {\n    "deploy": "midway-bin deploy"\n  }\n')),(0,a.kt)("p",null,"3\u3001\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u5373\u53ef\uff0c\u53d1\u5e03\u540e\uff0c\u963f\u91cc\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png#height=193&id=WKAhy&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=1219&originalType=binary&ratio=1&size=35152&status=done&style=none&width=1219",width:"1219"}),(0,a.kt)("p",null,"\u5982\u9700\u66f4\u8be6\u7ec6\u7684\u53d1\u5e03\u6587\u6863\uff0c\u8bf7\u67e5\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/midwayjs/faas/deploy_aliyun_faq"},(0,a.kt)("strong",{parentName:"a"},"Serverless \u53d1\u5e03 FAQ")),"\u3002"))}m.isMDXComponent=!0}}]);