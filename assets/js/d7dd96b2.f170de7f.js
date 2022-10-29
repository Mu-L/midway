"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},p="egg:ts-helper",i={unversionedId:"tool/egg-ts-helper",id:"tool/egg-ts-helper",title:"egg:ts-helper",description:"\u9488\u5bf9 midway \u652f\u6301 Egg.js \u7684\u573a\u666f\uff0c\u91cd\u5199\u4e86\u539f egg-ts-helper \u5305\uff0c\u79fb\u9664\u4e86\u539f\u6709\u7684 TS\uff0cAST \u5206\u6790\u7b49\u5927\u4f9d\u8d56\u3002",source:"@site/docs/tool/egg-ts-helper.md",sourceDirName:"tool",slug:"/tool/egg-ts-helper",permalink:"/docs/tool/egg-ts-helper",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/egg-ts-helper.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"sequelize-auto-midway",permalink:"/docs/tool/sequelize_generator"},next:{title:"\u670d\u52a1\u5668\u542f\u52a8\u5931\u8d25\u6392\u67e5",permalink:"/docs/ops/ecs_start_err"}},s={},l=[],c={toc:l};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eggts-helper"},"egg:ts-helper"),(0,o.kt)("p",null,"\u9488\u5bf9 midway \u652f\u6301 Egg.js \u7684\u573a\u666f\uff0c\u91cd\u5199\u4e86\u539f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/whxaxes/egg-ts-helper"},"egg-ts-helper")," \u5305\uff0c\u79fb\u9664\u4e86\u539f\u6709\u7684 TS\uff0cAST \u5206\u6790\u7b49\u5927\u4f9d\u8d56\u3002"),(0,o.kt)("p",null,"\u539f\u6765\u7684\u5305\u4f9d\u8d56\u7684 ts v3 \u73af\u5883\uff0c\u4f9d\u8d56 egg \u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u8003\u8651\u975e\u5e38\u591a\u7684\u53ef\u80fd\u6027\uff0c\u5728 midway \u7684\u573a\u666f\u4e2d\u4e0d\u4f1a\u4f7f\u7528\u5230\u3002\u57fa\u4e8e\u4e0a\u8ff0\u8003\u8651 midway \u5c06\u6b64\u5305\u8fdb\u884c\u4e86\u91cd\u5199\uff0c\u7528\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u63d0\u4f9b egg \u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/egg-ts-helper"},"@midwayjs/egg-ts-helper")," \u5305\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"ets")," \u5168\u5c40\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/egg-ts-helper --save-dev\n$ ets\n")),(0,o.kt)("p",null,"\u4e00\u822c\u6211\u4eec\u4f1a\u5728\u5f00\u53d1\u547d\u4ee4\u91cc\u52a0\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "dev": "cross-env ets && cross-env NODE_ENV=local midway-bin dev --ts",\n  },\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u5305\u662f\u9488\u5bf9 midway \u5b9a\u5236\u7684\uff0c\u53ea\u80fd\u7528\u4e8e\u65b0\u7248\u672c midway \u53ca\u5176\u914d\u5957\u4ee3\u7801\u3002")),(0,o.kt)("p",null,"\u6700\u7ec8\u4f1a\u5728\u9879\u76ee\u6839\u76ee\u5f55\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"typings")," \u76ee\u5f55\uff0c\u5176\u5b9a\u4e49\u7ed3\u6784\u548c\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 typings\n    \u251c\u2500\u2500 extend\n    \u2502       \u251c\u2500\u2500 request.d.ts\n    \u2502       \u251c\u2500\u2500 response.d.ts\n    \u2502       \u251c\u2500\u2500 application.d.ts\n    \u2502   \u2514\u2500\u2500 context.d.ts\n    \u251c\u2500\u2500 app\n    \u2502   \u2514\u2500\u2500 index.d.ts\n    \u2514\u2500\u2500 config\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 plugin.d.ts\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u8be5\u6a21\u5757\u53ea\u662f\u5c06 midway v2\uff08Egg.js\uff09\u7684\u6846\u67b6 + \u63d2\u4ef6\u5b9a\u4e49\u805a\u5408\u5230\u4e00\u8d77\uff0c\u8ba9\u5f53\u524d\u7684\u4e1a\u52a1\u4ee3\u7801\u80fd\u591f\u987a\u5229\u7684\u8bfb\u53d6\u5230\u6846\u67b6\u548c\u63d2\u4ef6\u7684\u5b9a\u4e49\uff0c\u4e0d\u652f\u6301\u751f\u6210\u4e1a\u52a1\u4ee3\u7801\u672c\u8eab\u7684\u5b9a\u4e49\uff0c\u4e5f\u4e0d\u652f\u6301\u5728\u5f00\u53d1 egg \u63d2\u4ef6\u65f6\u751f\u6210\u5b9a\u4e49\u3002")))}g.isMDXComponent=!0}}]);