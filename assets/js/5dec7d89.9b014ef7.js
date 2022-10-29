"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Debug"},c=void 0,a={unversionedId:"debug",id:"version-1.0.0/debug",title:"Debug",description:"\u4e00\u4e2a\u66f4\u7b80\u5355\u7684 Debug \u65b9\u6848\uff0c\u65b0\u7248\u672c VSCode \u5df2\u7ecf\u652f\u6301\u4e86 autoAttach\u3002",source:"@site/versioned_docs/version-1.0.0/debug.md",sourceDirName:".",slug:"/debug",permalink:"/docs/1.0.0/debug",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/debug.md",tags:[],version:"1.0.0",frontMatter:{title:"Debug"},sidebar:"common",previous:{title:"\u5168\u5c40\u4e2d\u95f4\u4ef6",permalink:"/docs/1.0.0/middleware"},next:{title:"\u5e94\u7528\u6d4b\u8bd5",permalink:"/docs/1.0.0/test"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u4e2a\u66f4\u7b80\u5355\u7684 Debug \u65b9\u6848\uff0c\u65b0\u7248\u672c VSCode \u5df2\u7ecf\u652f\u6301\u4e86 autoAttach\u3002\n\u7b2c\u4e00\u6b65\uff0cvsc \u91cc\u6309 cmd+shift+p\uff0c\u5f00\u542f auto attach\u3002"),(0,i.kt)("p",null,"["),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1598343869968-12f6eb2c-a38d-4670-9bc9-dac94f672bcc.png#align=left&display=inline&height=171&margin=%5Bobject%20Object%5D&originHeight=171&originWidth=869&size=0&status=done&style=none&width=869",width:"869"}),"](https://user-images.githubusercontent.com/418820/83840648-b92a1380-a731-11ea-844e-cbbbfbe52720.png)",(0,i.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff0c\u4fee\u6539\uff0c\u6216\u8005\u65b0\u589e\u547d\u4ee4\uff0c\u5176\u5b9e\u5c31\u662f\u5728\u539f\u6765\u7684\u547d\u4ee4\u540e\u9762\u4f20\u5165\u8c03\u8bd5\u53c2\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"test": "npm run lint && midway-bin test --ts --inspect",\n')),(0,i.kt)("p",null,"\u7b2c\u4e09\u6b65\uff0c\u52a0\u5165\u65ad\u70b9\uff0c\u5728 vsc \u7684\u63a7\u5236\u53f0\uff08\u4e00\u5b9a\u8981\u5728 vsc \u91cc\u542f\u52a8\uff09\u6267\u884c\u547d\u4ee4\uff0c\u6bd4\u5982\u4e0a\u9762\u7684 npm run test \u5373\u53ef\u65ad\u5230\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1598343902763-e4ed8e5c-2dbc-48bb-a9f0-fd3cc2105c53.png#align=left&display=inline&height=2740&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2740&originWidth=3378&size=1202444&status=done&style=none&width=3378",width:"3378"}))}p.isMDXComponent=!0}}]);