"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26235],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={},l="Web \u4e2d\u95f4\u4ef6",o={unversionedId:"middleware",id:"middleware",title:"Web \u4e2d\u95f4\u4ef6",description:"Web \u4e2d\u95f4\u4ef6\u662f\u5728\u63a7\u5236\u5668\u8c03\u7528 \u4e4b\u524d \u548c \u4e4b\u540e\uff08\u90e8\u5206\uff09\u8c03\u7528\u7684\u51fd\u6570\u3002 \u4e2d\u95f4\u4ef6\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61\u3002",source:"@site/docs/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/docs/middleware",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u8def\u7531\u548c\u63a7\u5236\u5668",permalink:"/docs/controller"},next:{title:"Application \u548c Context",permalink:"/docs/req_res_app"}},p={},d=[{value:"\u7f16\u5199\u4e2d\u95f4\u4ef6",id:"\u7f16\u5199\u4e2d\u95f4\u4ef6",level:2},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:2},{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",level:3},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:3},{value:"\u5ffd\u7565\u548c\u5339\u914d\u8def\u7531",id:"\u5ffd\u7565\u548c\u5339\u914d\u8def\u7531",level:2},{value:"\u51fd\u6570\u4e2d\u95f4\u4ef6",id:"\u51fd\u6570\u4e2d\u95f4\u4ef6",level:2},{value:"\u83b7\u53d6\u4e2d\u95f4\u4ef6\u540d",id:"\u83b7\u53d6\u4e2d\u95f4\u4ef6\u540d",level:2},{value:"\u4e2d\u95f4\u4ef6\u987a\u5e8f",id:"\u4e2d\u95f4\u4ef6\u987a\u5e8f",level:2},{value:"\u5e38\u89c1\u793a\u4f8b",id:"\u5e38\u89c1\u793a\u4f8b",level:2},{value:"\u4e2d\u95f4\u4ef6\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4f5c\u7528\u57df\u5b9e\u4f8b",id:"\u4e2d\u95f4\u4ef6\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4f5c\u7528\u57df\u5b9e\u4f8b",level:3},{value:"\u7edf\u4e00\u8fd4\u56de\u6570\u636e\u7ed3\u6784",id:"\u7edf\u4e00\u8fd4\u56de\u6570\u636e\u7ed3\u6784",level:3},{value:"\u5173\u4e8e\u4e2d\u95f4\u4ef6\u8fd4\u56de null \u7684\u60c5\u51b5",id:"\u5173\u4e8e\u4e2d\u95f4\u4ef6\u8fd4\u56de-null-\u7684\u60c5\u51b5",level:3}],s={toc:d},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-\u4e2d\u95f4\u4ef6"},"Web \u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"Web \u4e2d\u95f4\u4ef6\u662f\u5728\u63a7\u5236\u5668\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u524d")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u540e\uff08\u90e8\u5206\uff09"),"\u8c03\u7528\u7684\u51fd\u6570\u3002 \u4e2d\u95f4\u4ef6\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01h6hYvW1ogNexjJ3Nl_!!6000000005254-2-tps-2196-438.png",alt:"image.png"})),(0,a.kt)("p",null,"\u4e0d\u540c\u7684\u4e0a\u5c42 Web \u6846\u67b6\u4e2d\u95f4\u4ef6\u5f62\u5f0f\u4e0d\u540c\uff0cMidway \u6807\u51c6\u7684\u4e2d\u95f4\u4ef6\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/intro/egg-and-koa.html#midlleware"},"\u6d0b\u8471\u5708\u6a21\u578b"),"\u3002\u800c Express \u5219\u662f\u4f20\u7edf\u7684\u961f\u5217\u6a21\u578b\u3002"),(0,a.kt)("p",null,"Koa \u548c EggJs \u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"\u63a7\u5236\u5668\u524d\u540e\u90fd\u88ab\u6267\u884c"),"\uff0c\u5728 Express \u4e2d\uff0c\u4e2d\u95f4\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u80fd\u5728\u63a7\u5236\u5668\u4e4b\u524d")," \u8c03\u7528\uff0c\u5c06\u5728 Express \u7ae0\u8282\u5355\u72ec\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u5c06\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u4e3e\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u7f16\u5199\u4e2d\u95f4\u4ef6"},"\u7f16\u5199\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/middleware")," \u6587\u4ef6\u5939\u4e2d\u7f16\u5199 Web \u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/middleware/report.middleware.ts")," \u3002\u6211\u4eec\u5728\u8fd9\u4e2a Web \u4e2d\u95f4\u4ef6\u4e2d\u6253\u5370\u4e86\u63a7\u5236\u5668\uff08Controller\uff09\u6267\u884c\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u251c\u2500\u2500 user.controller.ts\n\u2502   \u2502   \u2514\u2500\u2500 home.controller.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u251c\u2500\u2500 middleware                   ## \u4e2d\u95f4\u4ef6\u76ee\u5f55\n\u2502   \u2502   \u2514\u2500\u2500 report.middleware.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Midway \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Middleware")," \u88c5\u9970\u5668\u6807\u8bc6\u4e2d\u95f4\u4ef6\uff0c\u5b8c\u6574\u7684\u4e2d\u95f4\u4ef6\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // \u63a7\u5236\u5668\u524d\u6267\u884c\u7684\u903b\u8f91\n      const startTime = Date.now();\n      // \u6267\u884c\u4e0b\u4e00\u4e2a Web \u4e2d\u95f4\u4ef6\uff0c\u6700\u540e\u6267\u884c\u5230\u63a7\u5236\u5668\n      // \u8fd9\u91cc\u53ef\u4ee5\u62ff\u5230\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u6216\u8005\u63a7\u5236\u5668\u7684\u8fd4\u56de\u503c\n      const result = await next();\n      // \u63a7\u5236\u5668\u4e4b\u540e\u6267\u884c\u7684\u903b\u8f91\n      console.log(Date.now() - startTime);\n      // \u8fd4\u56de\u7ed9\u4e0a\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u7684\u7ed3\u679c\n      return result;\n    };\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"await next()")," \u5219\u4ee3\u8868\u4e86\u4e0b\u4e00\u4e2a\u8981\u6267\u884c\u7684\u903b\u8f91\uff0c\u8fd9\u91cc\u4e00\u822c\u4ee3\u8868\u63a7\u5236\u5668\u6267\u884c\uff0c\u5728\u6267\u884c\u7684\u524d\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u6253\u5370\u548c\u8d4b\u503c\u64cd\u4f5c\uff0c\u8fd9\u4e5f\u662f\u6d0b\u8471\u5708\u6a21\u578b\u6700\u5927\u7684\u4f18\u52bf\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0cMidway \u5bf9\u4f20\u7edf\u7684\u6d0b\u8471\u6a21\u578b\u505a\u4e86\u4e00\u4e9b\u5fae\u8c03\uff0c\u4f7f\u5f97\u5176\u53ef\u4ee5\u83b7\u53d6\u5230\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u7684\u8fd4\u56de\u503c\uff0c\u540c\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u8fd9\u4e2a\u4e2d\u95f4\u4ef6\u7684\u7ed3\u679c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," \u65b9\u6cd5\u8fd4\u56de\u7ed9\u4e0a\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u9759\u6001 ",(0,a.kt)("inlineCode",{parentName:"p"},"getName")," \u65b9\u6cd5\uff0c\u7528\u6765\u6307\u5b9a\u4e2d\u95f4\u4ef6\u7684\u540d\u5b57\uff0c\u65b9\u4fbf\u6392\u67e5\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"Web \u4e2d\u95f4\u4ef6\u5728\u5199\u5b8c\u4e4b\u540e\uff0c\u9700\u8981\u5e94\u7528\u5230\u8bf7\u6c42\u6d41\u7a0b\u4e4b\u4e2d\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u5e94\u7528\u5230\u7684\u4f4d\u7f6e\uff0c\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5168\u5c40\u4e2d\u95f4\u4ef6\uff0c\u6240\u6709\u7684\u8def\u7531\u90fd\u4f1a\u6267\u884c\u7684\u4e2d\u95f4\u4ef6\uff0c\u6bd4\u5982 cookie\u3001session \u7b49\u7b49"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u8def\u7531\u4e2d\u95f4\u4ef6\uff0c\u5355\u4e2a/\u90e8\u5206\u8def\u7531\u4f1a\u6267\u884c\u7684\u4e2d\u95f4\u4ef6\uff0c\u6bd4\u5982\u67d0\u4e2a\u8def\u7531\u7684\u524d\u7f6e\u6821\u9a8c\uff0c\u6570\u636e\u5904\u7406\u7b49\u7b49")),(0,a.kt)("p",null,"\u4ed6\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u4e00\u822c\u4e3a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oQZ5Rk1jReqck6YMn_!!6000000004545-2-tps-2350-584.png",alt:"image.png"})),(0,a.kt)("h3",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u5728\u5199\u5b8c\u4e2d\u95f4\u4ef6\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u628a\u5b83\u5e94\u7528\u5230\u5404\u4e2a\u63a7\u5236\u5668\u8def\u7531\u4e4b\u4e0a\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," \u88c5\u9970\u5668\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u65b9\u4fbf\u7684\u5728\u67d0\u4e2a\u8def\u7531\u5206\u7ec4\u4e4b\u4e0a\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller } from '@midwayjs/core';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\n\n@Controller('/', { middleware: [ ReportMiddleware ] })\nexport class HomeController {\n\n}\n")),(0,a.kt)("p",null,"Midway \u540c\u65f6\u4e5f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Get")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Post")," \u7b49\u8def\u7531\u88c5\u9970\u5668\u4e0a\u90fd\u63d0\u4f9b\u4e86 middleware \u53c2\u6570\uff0c\u65b9\u4fbf\u5bf9\u5355\u4e2a\u8def\u7531\u505a\u4e2d\u95f4\u4ef6\u62e6\u622a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/core';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/', { middleware: [ ReportMiddleware ]})\n  async home() {\n  }\n}\n")),(0,a.kt)("h3",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u6240\u8c13\u7684\u5168\u5c40\u4e2d\u95f4\u4ef6\uff0c\u5c31\u662f\u5bf9\u6240\u6709\u7684\u8def\u7531\u751f\u6548\u7684 Web \u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728\u5e94\u7528\u542f\u52a8\u524d\uff0c\u52a0\u5165\u5f53\u524d\u6846\u67b6\u7684\u4e2d\u95f4\u4ef6\u5217\u8868\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u628a\u4e2d\u95f4\u4ef6\u52a0\u5165\u5230\u4e2d\u95f4\u4ef6\u5217\u8868\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useMiddleware(ReportMiddleware);\n  }\n}\n\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u540c\u65f6\u6dfb\u52a0\u591a\u4e2a\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  this.app.useMiddleware([ReportMiddleware1, ReportMiddleware2]);\n}\n")),(0,a.kt)("h2",{id:"\u5ffd\u7565\u548c\u5339\u914d\u8def\u7531"},"\u5ffd\u7565\u548c\u5339\u914d\u8def\u7531"),(0,a.kt)("p",null,"\u5728\u4e2d\u95f4\u4ef6\u6267\u884c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u8def\u7531\u5ffd\u7565\u7684\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // ...\n    };\n  }\n\n  ignore(ctx: Context): boolean {\n    // \u4e0b\u9762\u7684\u8def\u7531\u5c06\u5ffd\u7565\u6b64\u4e2d\u95f4\u4ef6\n    return ctx.path === '/'\n      || ctx.path === '/api/auth'\n      || ctx.path === '/api/login';\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("p",null,"\u540c\u7406\uff0c\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u5339\u914d\u7684\u8def\u7531\uff0c\u53ea\u6709\u5339\u914d\u5230\u7684\u8def\u7531\u624d\u4f1a\u6267\u884c\u8be5\u4e2d\u95f4\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ignore")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," \u540c\u65f6\u53ea\u6709\u4e00\u4e2a\u4f1a\u751f\u6548\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // ...\n    };\n  }\n\n  match(ctx: Context): boolean {\n    // \u4e0b\u9762\u7684\u5339\u914d\u5230\u7684\u8def\u7531\u4f1a\u6267\u884c\u6b64\u4e2d\u95f4\u4ef6\n    if (ctx.path === '/api/index') {\n      return true;\n    }\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("h2",{id:"\u51fd\u6570\u4e2d\u95f4\u4ef6"},"\u51fd\u6570\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"Midway \u4f9d\u65e7\u652f\u6301\u51fd\u6570\u4e2d\u95f4\u4ef6\u7684\u5f62\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware")," \u6765\u52a0\u5165\u5230\u4e2d\u95f4\u4ef6\u5217\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/another.middleware.ts\nexport async function fnMiddleware(ctx, next) {\n  // ...\n  await next();\n  // ...\n}\n\n\n// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\nimport { fnMiddleware } from './middleware/another.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // add middleware\n    this.app.useMiddleware([ReportMiddleware, fnMiddleware]);\n  }\n}\n\n\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u793e\u533a\u5f88\u591a koa \u4e09\u65b9\u4e2d\u95f4\u4ef6\u90fd\u53ef\u4ee5\u6bd4\u8f83\u65b9\u4fbf\u7684\u63a5\u5165\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-static")," \u4e3e\u4f8b\u3002"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-static")," \u6587\u6863\u4e2d\uff0c\u662f\u8fd9\u6837\u5199\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const Koa = require('koa');\nconst app = new Koa();\napp.use(require('koa-static')(root, opts));\n")),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"require('koa-static')(root, opts)")," \u8fd9\u4e2a\uff0c\u5176\u5b9e\u5c31\u662f\u8fd4\u56de\u7684\u4e2d\u95f4\u4ef6\u65b9\u6cd5\uff0c\u6211\u4eec\u76f4\u63a5\u5bfc\u51fa\uff0c\u5e76\u4e14\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware")," \u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  // add middleware\n  this.app.useMiddleware(require('koa-static')(root, opts));\n}\n")),(0,a.kt)("h2",{id:"\u83b7\u53d6\u4e2d\u95f4\u4ef6\u540d"},"\u83b7\u53d6\u4e2d\u95f4\u4ef6\u540d"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4e2d\u95f4\u4ef6\u5e94\u5f53\u6709\u4e00\u4e2a\u540d\u5b57\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7c7b\u4e2d\u95f4\u4ef6\u7684\u540d\u5b57\u5c06\u4f9d\u7167\u4e0b\u9762\u7684\u89c4\u5219\u83b7\u53d6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"getName()")," \u9759\u6001\u65b9\u6cd5\u5b58\u5728\u65f6\uff0c\u4ee5\u5176\u8fd4\u56de\u503c\u4f5c\u4e3a\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u5982\u679c\u4e0d\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"getName()")," \u9759\u6001\u65b9\u6cd5\uff0c\u5c06\u4f7f\u7528\u7c7b\u540d\u4f5c\u4e3a\u4e2d\u95f4\u4ef6\u540d")),(0,a.kt)("p",null,"\u4e00\u4e2a\u597d\u8ba4\u7684\u4e2d\u95f4\u4ef6\u540d\u5728\u624b\u52a8\u6392\u5e8f\u6216\u8005\u8c03\u8bd5\u4ee3\u7801\u65f6\u6709\u5f88\u5927\u7684\u4f5c\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Middleware()\nexport class ReportMiddleware  implements IMiddleware<Context, NextFunction> {\n\n  // ...\n\n  static getName(): string {\n    return 'report';    // \u4e2d\u95f4\u4ef6\u540d\n  }\n}\n")),(0,a.kt)("p",null,"\u51fd\u6570\u4e2d\u95f4\u4ef6\u4e5f\u662f\u7c7b\u4f3c\uff0c\u5b9a\u4e49\u7684\u65b9\u6cd5\u540d\u5c31\u662f\u4e2d\u95f4\u4ef6\u7684\u540d\u5b57\uff0c\u6bd4\u5982\u4e0b\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"fnMiddleware")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function fnMiddleware(ctx, next) {\n  // ...\n  await next();\n  // ...\n}\n")),(0,a.kt)("p",null,"\u5047\u5982\u4e09\u65b9\u4e2d\u95f4\u4ef6\u5bfc\u51fa\u4e86\u4e00\u4e2a\u533f\u540d\u7684\u4e2d\u95f4\u4ef6\u51fd\u6570\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"_name")," \u6765\u6dfb\u52a0\u4e00\u4e2a\u540d\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const fn = async (ctx, next) => {\n  // ...\n  await next();\n  // ...\n};\n\nfn._name = 'fnMiddleware';\n\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getMiddleware().getNames()")," \u6765\u83b7\u53d6\u5f53\u524d\u4e2d\u95f4\u4ef6\u5217\u8868\u4e2d\u7684\u6240\u6709\u4e2d\u95f4\u4ef6\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\nimport { fnMiddleware } from './middleware/another.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // add middleware\n    this.app.useMiddleware([ReportMiddleware, fnMiddleware]);\n\n    // output\n    console.log(this.app.getMiddleware().getNames());\n    // => report, fnMiddleware\n  }\n}\n\n\n\n")),(0,a.kt)("h2",{id:"\u4e2d\u95f4\u4ef6\u987a\u5e8f"},"\u4e2d\u95f4\u4ef6\u987a\u5e8f"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec4\u4ef6\u6216\u8005\u5e94\u7528\u4e2d\u4fee\u6539\u4e2d\u95f4\u4ef6\u7684\u987a\u5e8f\u3002"),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," \u7cfb\u5217\u7684 API\uff0c\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u8c03\u6574\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getMiddleware()")," \u65b9\u6cd5\u83b7\u53d6\u4e2d\u95f4\u4ef6\u5217\u8868\uff0c\u7136\u540e\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // \u628a\u4e2d\u95f4\u4ef6\u6dfb\u52a0\u5230\u6700\u524d\u9762\n    this.app.getMiddleware().insertFirst(ReportMiddleware);\n    // \u628a\u4e2d\u95f4\u4ef6\u6dfb\u52a0\u5230\u6700\u540e\u9762\uff0c\u7b49\u4ef7\u4e8e useMiddleware\n    this.app.getMiddleware().insertLast(ReportMiddleware);\n\n    // \u628a\u4e2d\u95f4\u4ef6\u6dfb\u52a0\u5230\u540d\u4e3a session \u7684\u4e2d\u95f4\u4ef6\u4e4b\u540e\n    this.app.getMiddleware().insertAfter(ReportMiddleware, 'session');\n    // \u628a\u4e2d\u95f4\u4ef6\u6dfb\u52a0\u5230\u540d\u4e3a session \u7684\u4e2d\u95f4\u4ef6\u4e4b\u524d\n    this.app.getMiddleware().insertBefore(ReportMiddleware, 'session');\n  }\n}\n\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u793a\u4f8b"},"\u5e38\u89c1\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u4e2d\u95f4\u4ef6\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4f5c\u7528\u57df\u5b9e\u4f8b"},"\u4e2d\u95f4\u4ef6\u4e2d\u83b7\u53d6\u8bf7\u6c42\u4f5c\u7528\u57df\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u7531\u4e8e Web \u4e2d\u95f4\u4ef6\u5728\u751f\u547d\u5468\u671f\u7684\u7279\u6b8a\u6027\uff0c\u4f1a\u5728\u5e94\u7528\u8bf7\u6c42\u524d\u5c31\u88ab\u52a0\u8f7d\uff08\u7ed1\u5b9a\uff09\u5230\u8def\u7531\u4e0a\uff0c\u6240\u4ee5\u65e0\u6cd5\u548c\u8bf7\u6c42\u5173\u8054\u3002\u4e2d\u95f4\u4ef6\u7c7b\u7684\u4f5c\u7528\u57df ",(0,a.kt)("strong",{parentName:"p"},"\u56fa\u5b9a\u4e3a\u5355\u4f8b\uff08Singleton\uff09"),"\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u95f4\u4ef6\u5b9e\u4f8b\u4e3a\u5355\u4f8b"),"\uff0c\u6240\u4ee5\u4e2d\u95f4\u4ef6\u4e2d\u6ce8\u5165\u7684\u5b9e\u4f8b\u548c\u8bf7\u6c42\u4e0d\u7ed1\u5b9a\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u65e0\u6cd5\u83b7\u53d6\u5230 ctx"),"\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject()")," \u6ce8\u5165\u8bf7\u6c42\u4f5c\u7528\u57df\u7684\u5b9e\u4f8b\uff0c\u53ea\u80fd\u83b7\u53d6 Singleton \u7684\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u7684\u4ee3\u7801\u662f\u9519\u8bef\u7684\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  @Inject()\n  userService;          // \u8fd9\u91cc\u6ce8\u5165\u7684\u5b9e\u4f8b\u548c\u4e0a\u4e0b\u6587\u4e0d\u7ed1\u5b9a\uff0c\u65e0\u6cd5\u83b7\u53d6\u5230 ctx\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // TODO\n      await next();\n    };\n  }\n\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u83b7\u53d6\u8bf7\u6c42\u4f5c\u7528\u57df\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ece\u8bf7\u6c42\u4f5c\u7528\u57df\u5bb9\u5668 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.requestContext")," \u4e2d\u83b7\u53d6\uff0c\u5982\u4e0b\u9762\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const userService = await ctx.requestContext.getAsync<UserService>(UserService);\n      // TODO userService.xxxx\n      await next();\n    };\n  }\n\n}\n")),(0,a.kt)("h3",{id:"\u7edf\u4e00\u8fd4\u56de\u6570\u636e\u7ed3\u6784"},"\u7edf\u4e00\u8fd4\u56de\u6570\u636e\u7ed3\u6784"),(0,a.kt)("p",null,"\u6bd4\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," \u8fd4\u56de\u7684\u6240\u6709\u6570\u636e\u90fd\u662f\u7528\u7edf\u4e00\u7684\u7ed3\u6784\uff0c\u51cf\u5c11 Controller \u4e2d\u7684\u91cd\u590d\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u589e\u52a0\u4e00\u4e2a\u7c7b\u4f3c\u4e0b\u9762\u7684\u4e2d\u95f4\u4ef6\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class FormatMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const result = await next();\n      return {\n        code: 0,\n        msg: 'OK',\n        data: result,\n      }\n    };\n  }\n\n  match(ctx) {\n    return ctx.path.indexOf('/api') !== -1;\n  }\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ec5\u662f\u6b63\u786e\u903b\u8f91\u8fd4\u56de\u7684\u4ee3\u7801\uff0c\u5982\u9700\u9519\u8bef\u7684\u8fd4\u56de\u5305\u88f9\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"./error_filter"},"\u8fc7\u6ee4\u5668"),"\u3002"),(0,a.kt)("h3",{id:"\u5173\u4e8e\u4e2d\u95f4\u4ef6\u8fd4\u56de-null-\u7684\u60c5\u51b5"},"\u5173\u4e8e\u4e2d\u95f4\u4ef6\u8fd4\u56de null \u7684\u60c5\u51b5"),(0,a.kt)("p",null,"\u5728 koa/egg \u4e0b\uff0c\u5982\u679c\u4e2d\u95f4\u4ef6\u4e2d\u8fd4\u56de null \u503c\uff0c\u4f1a\u4f7f\u5f97\u72b6\u6001\u7801\u53d8\u4e3a 204\uff0c\u9700\u8981\u5728\u4e2d\u95f4\u4ef6\u4e2d\u663e\u5f0f\u989d\u5916\u8d4b\u503c\u72b6\u6001\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, IMiddleware } from '@midwayjs/core';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class FormatMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const result = await next();\n      if (result === null) {\n        ctx.status = 200;\n      }\n      return {\n        code: 0,\n        msg: 'OK',\n        data: result,\n      }\n    };\n  }\n\n  match(ctx) {\n    return ctx.path.indexOf('/api') !== -1;\n  }\n}\n")))}c.isMDXComponent=!0}}]);