"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6624:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={date:"2021-01-27T20:00"},o="2.7.0",m={permalink:"/en/changelog/2.7.0",source:"@site/changelog/source/2.7.0.md",title:"2.7.0",description:"Bug Fixes",date:"2021-01-27T20:00:00.000Z",formattedDate:"January 27, 2021",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-01-27T20:00"},prevItem:{title:"2.7.1",permalink:"/en/changelog/2.7.1"},nextItem:{title:"2.6.13",permalink:"/en/changelog/2.6.13"},listPageLink:"/en/changelog/page/6"},c={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add info level for core logger in local env (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/826"},"#826"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8e8fc59435bd77c917d7ce7bdf4e486492455a61"},"8e8fc59"),")"),(0,n.kt)("li",{parentName:"ul"},"date string error in ISO pattern (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/817"},"#817"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/6557e95f70517900df113aa44d1dc42ee1435e9b"},"6557e95"),")"),(0,n.kt)("li",{parentName:"ul"},"midway logger and mixin egg logger will be missing log (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/823"},"#823"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ac33af217f59a4b06224cb5d6f7eead007a4da41"},"ac33af2"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add component mongoose (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/805"},"#805"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0092831858d469ebfbd1a678d665aa956ef1f2fa"},"0092831"),")"),(0,n.kt)("li",{parentName:"ul"},"add midway gRPC framework (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/786"},"#786"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d90362c6bf15c00621ffc2981f19842f216395f8"},"d90362c"),")"),(0,n.kt)("li",{parentName:"ul"},"rabbitmq component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/802"},"#802"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d40197a66cdff4a49ad16c6cd1a3467003c9a0a1"},"d40197a"),")"),(0,n.kt)("li",{parentName:"ul"},"support entry file in bootstrap (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/819"},"#819"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/49a5ff662134bdd42dc3a80738b44a05138f8f7c"},"49a5ff6"),")")))}p.isMDXComponent=!0}}]);