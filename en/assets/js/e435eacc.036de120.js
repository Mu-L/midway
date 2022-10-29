"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="Self-executing code",c={unversionedId:"auto_run",id:"auto_run",title:"Self-executing code",description:"In the initialization process, when our code has nothing to do with the main process but wants to execute it, it will usually be executed in the startup onReady phase. As the amount of code increases, the onReady will become bloated.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/auto_run.md",sourceDirName:".",slug:"/auto_run",permalink:"/en/docs/auto_run",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/auto_run.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Interceptors(AOP)",permalink:"/en/docs/aspect"},next:{title:"Pipeline",permalink:"/en/docs/pipeline"}},s={},l=[{value:"Self-initialization",id:"self-initialization",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"self-executing-code"},"Self-executing code"),(0,o.kt)("p",null,"In the initialization process, when our code has nothing to do with the main process but wants to execute it, it will usually be executed in the startup onReady phase. As the amount of code increases, the onReady will become bloated."),(0,o.kt)("p",null,"For example, we have some logic that needs to be executed in advance, one for listening for Redis errors and the other for initializing data synchronization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class RedisErrorListener() {\n  // ...\n}\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class DataSyncListener() {\n  // ...\n}\n")),(0,o.kt)("p",null,"In general, we will create an instance at startup by ",(0,o.kt)("inlineCode",{parentName:"p"},"getAsync")," methods to make it execute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\n\n// configuration.ts\n//...\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  async onReady(container) {\n    await container.getAsync(RedisErrorListerner);\n    await container.getAsync(DataSyncListerner);\n  }\n}\n")),(0,o.kt)("p",null,"In this way, once there is more code, there will be many necessary process codes in the onReady."),(0,o.kt)("h2",{id:"self-initialization"},"Self-initialization"),(0,o.kt)("p",null,"If the code is not coupled to the main process and belongs to independent logic, such as listening to some events and initializing data synchronization, you can use the @Autoload decorator to enable a class to initialize itself."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Autolaod, Scope, ScopeEnum } from '@midwayjs/decorator';\n\n@Autolaod()\n@Scope(ScopeEnum.Singleton)\nexport class RedisErrorListener() {\n  @Init()\n  async init() {\n    const redis = new Redis();\n    redis.on('xxx', () => {\n      // ...\n    });\n  }\n}\n")),(0,o.kt)("p",null,"This automatically initializes without using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAsync")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"onReady")," and executes the init method."))}p.isMDXComponent=!0}}]);