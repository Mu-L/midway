"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61939],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||a;return t?r.createElement(u,l(l({ref:n},d),{},{components:t})):r.createElement(u,l({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"Web \u4e2d\u95f4\u4ef6"},l=void 0,i={unversionedId:"hooks/middleware",id:"hooks/middleware",title:"Web \u4e2d\u95f4\u4ef6",description:"Midway Hooks \u652f\u6301\u901a\u8fc7\u51fd\u6570 + useContext() \u6765\u5b9a\u4e49 Web \u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/hooks/middleware.md",sourceDirName:"hooks",slug:"/hooks/middleware",permalink:"/docs/hooks/middleware",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/middleware.md",tags:[],version:"current",frontMatter:{title:"Web \u4e2d\u95f4\u4ef6"},sidebar:"hooks",previous:{title:"\u53c2\u6570\u6821\u9a8c",permalink:"/docs/hooks/validate"},next:{title:"\u8de8\u57df CORS",permalink:"/docs/hooks/cors"}},p={},s=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u57fa\u7840\u793a\u4f8b",id:"\u57fa\u7840\u793a\u4f8b",level:3},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:2},{value:"\u6587\u4ef6\u7ea7\u4e2d\u95f4\u4ef6",id:"\u6587\u4ef6\u7ea7\u4e2d\u95f4\u4ef6",level:2},{value:"\u5355\u51fd\u6570\u4e2d\u95f4\u4ef6",id:"\u5355\u51fd\u6570\u4e2d\u95f4\u4ef6",level:2},{value:"\u4f7f\u7528 Koa \u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528-koa-\u4e2d\u95f4\u4ef6",level:2}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Midway Hooks \u652f\u6301\u901a\u8fc7\u51fd\u6570 + ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext()")," \u6765\u5b9a\u4e49 Web \u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("p",null,"\u4e2d\u95f4\u4ef6\u4ec5\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," \u4e00\u4e2a\u53c2\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," \u9700\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," \u83b7\u5f97\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528\u4efb\u610f\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Hooks"),"\u3002"),(0,o.kt)("h3",{id:"\u57fa\u7840\u793a\u4f8b"},"\u57fa\u7840\u793a\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u8bb0\u5f55\u8bf7\u6c42\u65e5\u5fd7\u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/koa';\nimport { useContext } from '@midwayjs/hooks';\n\nexport const logger = async (next: any) => {\n  const ctx = useContext<Context>();\n\n  console.log(\n    `<-- [${ctx.method}] ${ctx.url}`\n  );\n\n  const start = Date.now();\n  await next();\n  const cost = Date.now() - start;\n\n  console.log(\n    `--\x3e [${ctx.method}] ${ctx.url} ${cost}ms`\n  );\n};\n")),(0,o.kt)("h2",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u5168\u5c40\u4e2d\u95f4\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5b9a\u4e49\uff0c\u6b64\u5904\u5b9a\u4e49\u7684\u4e2d\u95f4\u4ef6\u5bf9\u6240\u6709\u63a5\u53e3\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  hooks,\n  createConfiguration,\n} from '@midwayjs/hooks';\nimport { logger } from './logger';\n\n// Global Middleware\nexport default createConfiguration({\n  imports: [\n    // highlight-start\n    hooks({\n      middleware: [logger],\n    }),\n    // highlight-end\n  ],\n});\n")),(0,o.kt)("h2",{id:"\u6587\u4ef6\u7ea7\u4e2d\u95f4\u4ef6"},"\u6587\u4ef6\u7ea7\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u6587\u4ef6\u7ea7\u4e2d\u95f4\u4ef6\u5728 Api \u6587\u4ef6\u4e2d\u5b9a\u4e49\uff0c\u901a\u8fc7\u5bfc\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.middleware"),"\uff0c\u8be5\u4e2d\u95f4\u4ef6\u5bf9\u6587\u4ef6\u5185\u6240\u6709 Api \u51fd\u6570\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ApiConfig,\n  Api,\n  Get,\n} from '@midwayjs/hooks';\nimport logger from './logger';\n\n// File Level Middleware\n// highlight-start\nexport const config: ApiConfig = {\n  middleware: [logger],\n};\n// highlight-end\n\nexport default Api(Get(), async () => {\n  return 'Hello World!';\n});\n")),(0,o.kt)("h2",{id:"\u5355\u51fd\u6570\u4e2d\u95f4\u4ef6"},"\u5355\u51fd\u6570\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Middleware(...middlewares: HooksMiddleware[])")," \u5b9a\u4e49\u7684\u4e2d\u95f4\u4ef6\u4ec5\u5bf9\u5355\u4e2a\u51fd\u6570\u751f\u6548"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Middleware,\n} from '@midwayjs/hooks';\nimport logger from './logger';\n\nexport default Api(\n  Get(),\n  // highlight-start\n  Middleware(logger),\n  // highlight-end\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,o.kt)("h2",{id:"\u4f7f\u7528-koa-\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528 Koa \u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0a\u8ff0\u7684\u4f8b\u5b50\u4e2d\u76f4\u63a5\u4f20\u5165 Koa \u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@koa/cors"},"@koa/cors")," \u4e3a\u4f8b"),(0,o.kt)("p",null,"\u5168\u5c40\u542f\u7528:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  hooks,\n  createConfiguration,\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\n// Global Middleware\nexport default createConfiguration({\n  imports: [\n    hooks({\n      // highlight-start\n      middleware: [logger, cors()],\n      // highlight-end\n    }),\n  ],\n});\n")),(0,o.kt)("p",null,"\u6587\u4ef6\u7ea7\u522b\u542f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  ApiConfig,\n  Api,\n  Get,\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\n// File Level Middleware\n// highlight-start\nexport const config: ApiConfig = {\n  middleware: [logger, cors],\n};\n// highlight-end\n\nexport default Api(Get(), async () => {\n  return 'Hello World!';\n});\n")),(0,o.kt)("p",null,"\u51fd\u6570\u7ea7\u522b\u542f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Middleware,\n} from '@midwayjs/hooks';\nimport logger from './logger';\nimport cors from '@koa/cors';\n\nexport default Api(\n  Get(),\n  // highlight-start\n  Middleware(logger, cors),\n  // highlight-end\n  async () => {\n    return 'Hello World!';\n  }\n);\n")))}c.isMDXComponent=!0}}]);