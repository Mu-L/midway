"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Publish to Tencent Cloud SCF",i={unversionedId:"serverless/deploy_to_tencent",id:"serverless/deploy_to_tencent",title:"Publish to Tencent Cloud SCF",description:"Configuration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/deploy_to_tencent.md",sourceDirName:"serverless",slug:"/serverless/deploy_to_tencent",permalink:"/en/docs/serverless/deploy_to_tencent",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/deploy_to_tencent.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"publish-to-tencent-cloud-scf"},"Publish to Tencent Cloud SCF"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Make sure it is ",(0,a.kt)("inlineCode",{parentName:"p"},"tencent")," at the ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," paragraph of ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," in the project root directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n")),(0,a.kt)("p",null,"Configuration runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  runtime: nodejs12\n")),(0,a.kt)("p",null,"Configuration function timeout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  Timeout: 60 # Unit Seconds\n")),(0,a.kt)("p",null,"Multiplex HTTP gateway"),(0,a.kt)("p",null,"Tencent Cloud will create a new gateway binding every time HTTP type is deployed. For development, we can reuse the same id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: tencent\n  serviceId: ********\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"deploy_tencent_faq#NGqUs"},"DIP"),"."),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),". The Deploy command is automatically packaged and released by calling the official deployment tool of Tencent Cloud."),(0,a.kt)("p",null,"The video flow is as follows:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/attachments/yuque/0/2021/mov/501408/1616730670232-05605683-d88e-4e27-a393-9d8f2dfa489f.mov?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fmov%2F501408%2F1616730670232-05605683-d88e-4e27-a393-9d8f2dfa489f.mov%22%2C%22name%22%3A%22%E5%B1%8F%E5%B9%95%E5%BD%95%E5%88%B62021-03-25+%E4%B8%8B%E5%8D%884.47.41.mov%22%2C%22size%22%3A19344722%2C%22type%22%3A%22video%2Fquicktime%22%2C%22ext%22%3A%22mov%22%2C%22status%22%3A%22done%22%2C%22uid%22%3A%221616730664011-0%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22percent%22%3A0%2C%22id%22%3A%22dWRP5%22%2C%22card%22%3A%22file%22%7D"},"\u5c4f\u5e55\u5f55\u5236 2021-03-25 \u4e0b\u5348 4.47.41.mov")),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"deploy_tencent_faq"},"Tencent Cloud release FAQ"),"."))}u.isMDXComponent=!0}}]);