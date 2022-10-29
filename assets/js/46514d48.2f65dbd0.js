"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89182],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u4f7f\u7528 Midway \u7ec4\u4ef6"},i=void 0,c={unversionedId:"hooks/component",id:"hooks/component",title:"\u4f7f\u7528 Midway \u7ec4\u4ef6",description:"Midway \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u7ec4\u4ef6\uff0c\u5305\u542b Cache / Http / Redis \u7b49\u3002",source:"@site/docs/hooks/component.md",sourceDirName:"hooks",slug:"/hooks/component",permalink:"/docs/hooks/component",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/component.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Midway \u7ec4\u4ef6"},sidebar:"hooks",previous:{title:"\u8de8\u57df CORS",permalink:"/docs/hooks/cors"},next:{title:"Prisma ORM",permalink:"/docs/hooks/prisma"}},p={},s=[{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u4f7f\u7528\u7ec4\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6",level:2}],l={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7684\u7ec4\u4ef6\uff0c\u5305\u542b Cache / Http / Redis \u7b49\u3002\n\u800c\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Midway \u7ec4\u4ef6\uff0c\u6765\u5feb\u901f\u5b9e\u73b0\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,o.kt)("p",null,"Midway Hooks \u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createConfiguration()")," \u6765\u914d\u7f6e\u9879\u76ee\uff0c\u5176 Api \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/decorator")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration()")," \u4e00\u81f4\u3002"),(0,o.kt)("p",null,"\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/cache")," \u7ec4\u4ef6\u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createConfiguration,\n  hooks,\n} from '@midwayjs/hooks';\nimport * as Koa from '@midwayjs/koa';\nimport { join } from 'path';\nimport * as cache from '@midwayjs/cache';\n\nexport default createConfiguration({\n  imports: [cache, Koa, Hooks()],\n  importConfigs: [\n    join(__dirname, 'config'),\n  ],\n});\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"imports")," \u6765\u5bfc\u5165\u7ec4\u4ef6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"importConfigs")," \u6765\u5bfc\u5165\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u7ec4\u4ef6"},"\u4f7f\u7528\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/cache")," \u4e2d\uff0c\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheManager")," \u7c7b\u6765\u64cd\u4f5c\u7f13\u5b58\u3002"),(0,o.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useInject(class)")," \u6765\u5728\u8fd0\u884c\u65f6\u83b7\u53d6\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useInject,\n} from '@midwayjs/hooks';\nimport { CacheManager } from '@midwayjs/cache';\n\nexport default Api(Get(), async () => {\n  const cache = await useInject(\n    CacheManager\n  );\n\n  await cache.set('name', 'Midway');\n  const result = await cache.get(\n    `name`\n  );\n\n  return `Hello ${result}!`;\n});\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useInject(CacheManager)")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject() cache: CacheManager")," \u7684\u529f\u80fd\u662f\u4e00\u81f4\u7684\u3002"))}m.isMDXComponent=!0}}]);