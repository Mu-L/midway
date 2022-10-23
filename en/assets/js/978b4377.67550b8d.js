"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Introduce",l={unversionedId:"serverless/serverless_intro",id:"serverless/serverless_intro",title:"Introduce",description:"What Midway Serverless Can Do",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_intro.md",sourceDirName:"serverless",slug:"/serverless/serverless_intro",permalink:"/en/docs/serverless/serverless_intro",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_intro.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",next:{title:"Migrate from Serverless v2 to v3",permalink:"/en/docs/serverless/serverless_v2_upgrade_serverless_v3"}},s={},c=[{value:"What Midway Serverless Can Do",id:"what-midway-serverless-can-do",level:2},{value:"The relationship between Midway Serverless and Midway",id:"the-relationship-between-midway-serverless-and-midway",level:2},{value:"What the function (FaaS) can do",id:"what-the-function-faas-can-do",level:2},{value:"What can&#39;t a function do",id:"what-cant-a-function-do",level:2},{value:"Description of terms",id:"description-of-terms",level:2},{value:"function",id:"function",level:3},{value:"Function group",id:"function-group",level:3},{value:"Trigger",id:"trigger",level:3},{value:"Function runtime",id:"function-runtime",level:3},{value:"Publishing platform",id:"publishing-platform",level:3},{value:"Layer",id:"layer",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduce"},"Introduce"),(0,r.kt)("h2",{id:"what-midway-serverless-can-do"},"What Midway Serverless Can Do"),(0,r.kt)("p",null,"Midway Serverless is a Serverless framework for building Node.js cloud functions. help you significantly reduce maintenance costs and focus more on product development in the cloud-native era."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-cloud vendor:")," One code can be quickly deployed across multiple cloud platforms without worrying that your product will be bound by the cloud vendor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Integration:")," Provides multiple integrated development solutions with community front-end React, Vue, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code Reuse:")," Through the dependency injection capability of the framework, each part of the logical unit is naturally reusable and can be quickly and easily combined to generate complex applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Traditional migration:")," Through the runtime scalability of the framework, traditional applications such as Egg.js, Koa, and Express.js can be seamlessly migrated to cloud functions of various cloud vendors")),(0,r.kt)("p",null,"You can use Midway to build your ",(0,r.kt)("strong",{parentName:"p"},"full stack application"),", you can also publish ",(0,r.kt)("strong",{parentName:"p"},"function services")," ,Restful interfaces, etc., you can also add front-end (react,vue) code to ",(0,r.kt)("strong",{parentName:"p"},"build back-end projects"),", or you can use Midway to ",(0,r.kt)("strong",{parentName:"p"},"migrate traditional")," Egg/Koa/Express application elastic containers."),(0,r.kt)("h2",{id:"the-relationship-between-midway-serverless-and-midway"},"The relationship between Midway Serverless and Midway"),(0,r.kt)("p",null,"Midway Serverless is a set of development solutions for Serverless cloud platforms produced by Midway. Its content mainly includes the function framework ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas"),", as well as a series of tool chains and launchers matching the platform."),(0,r.kt)("p",null,"After Midway Serverless 2.0, Midway Serverless and Midway's capabilities are reused, with the same CLI tool chain, compiler, decorator, etc."),(0,r.kt)("p",null,"At present, Midway Serverless is mainly aimed at FaaS scenarios."),(0,r.kt)("h2",{id:"what-the-function-faas-can-do"},"What the function (FaaS) can do"),(0,r.kt)("p",null,"Many people are not very clear about functions or do not understand what they can do. The current function can be used as a small container. Originally, we wanted to write a complete application to carry the capacity. Now we only need to write the middle logic part and consider the input and output data."),(0,r.kt)("p",null,"By binding the trigger of the platform, you can carry traffic such as HTTP,Socket, etc."),(0,r.kt)("p",null,"Through the BaaS SDK provided by the platform, you can call the database, Redis and other services."),(0,r.kt)("p",null,"Through functions, traditional HTTP API services can be provided, and beautiful pages can be rendered one by one in combination with existing front-end frameworks (react,vue, etc.). It can also be used as an independent data module, waiting to be called (triggered), such as common file upload changes, decompression, etc. It can also be used as a logical part of a timing task and executed at a specified time or interval."),(0,r.kt)("p",null,"With the change of time, the iteration of the platform, the ability of the function will become stronger, and the user's cost of getting started, the server cost will become lower and lower."),(0,r.kt)("h2",{id:"what-cant-a-function-do"},"What can't a function do"),(0,r.kt)("p",null,"The architecture of functions determines that some requirements cannot be supported. In addition, functions and applications are still different in capability."),(0,r.kt)("p",null,"Function not applicable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The execution time exceeds the limit under the function configuration (preferably not more than 5S)"),(0,r.kt)("li",{parentName:"ul"},"stateful, storing data locally"),(0,r.kt)("li",{parentName:"ul"},"Long links, such as ws, etc."),(0,r.kt)("li",{parentName:"ul"},"Background tasks, executed by big data"),(0,r.kt)("li",{parentName:"ul"},"Relying on multi-process communication"),(0,r.kt)("li",{parentName:"ul"},"Large file upload (for example, the gateway limit is more than 2M)"),(0,r.kt)("li",{parentName:"ul"},"Custom environment, such as nginx configuration, C ++ library (C ++ addon dynamic link library, etc.), Python version depends on"),(0,r.kt)("li",{parentName:"ul"},"A large number of server-side caches"),(0,r.kt)("li",{parentName:"ul"},"Fixed ip")),(0,r.kt)("h2",{id:"description-of-terms"},"Description of terms"),(0,r.kt)("h3",{id:"function"},"function"),(0,r.kt)("p",null,"A logical snippet of code is executed by wrapping a common entry file. Functions are single link and stateless. Now many people think that Serverless = FaaS + BaaS, while FaaS is a stateless function. BaaS solves stateful services."),(0,r.kt)("h3",{id:"function-group"},"Function group"),(0,r.kt)("p",null,"The logical grouping name of multiple functions, corresponding to the original application concept."),(0,r.kt)("h3",{id:"trigger"},"Trigger"),(0,r.kt)("p",null,"Triggers, also called Event, Trigger, etc., specifically refer to the way functions are triggered.\nDifferent from traditional development concepts, functions do not need to start a service to listen to data, but bind one (or more) triggers. Data is called to functions through a mechanism similar to event triggering."),(0,r.kt)("h3",{id:"function-runtime"},"Function runtime"),(0,r.kt)("p",null,"The English name is Runtime, which specifically refers to the environment in which the function is executed. It may be a mirror image or a Node.js code package on each platform. For example, there are kubeless when common communities are running. The code package will realize the capabilities of docking various interfaces of the platform, handling exceptions, forwarding logs, etc."),(0,r.kt)("h3",{id:"publishing-platform"},"Publishing platform"),(0,r.kt)("p",null,"The platform finally carried by the function is now the most common in the community such as Aliyun FC, Tencent Cloud SCF,AWS Lambda, etc."),(0,r.kt)("h3",{id:"layer"},"Layer"),(0,r.kt)("p",null,"Because the runtime code is relatively simple and needs to ensure stability and cannot be updated frequently, Layer is designed to extend the runtime capability and reduce the amount of local function code (some platforms limit the size of the uploaded compression package)."))}d.isMDXComponent=!0}}]);