"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={date:"2020-10-13T20:00"},o="2.3.13",c={permalink:"/changelog/2.3.13",source:"@site/changelog/source/2.3.13.md",title:"2.3.13",description:"Bug Fixes",date:"2020-10-13T20:00:00.000Z",formattedDate:"2020\u5e7410\u670813\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2020-10-13T20:00"},prevItem:{title:"2.3.14",permalink:"/changelog/2.3.14"},nextItem:{title:"2.3.12",permalink:"/changelog/2.3.12"},listPageLink:"/changelog/page/8"},l={authorsImageUrls:[]},p=[{value:"Bug Fixes",id:"bug-fixes",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/plugin"},"@plugin")," inject undefined in web middleware (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/667"},"#667"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/cacb2faa61258172ef445db0a86e45c3f19014a6"},"cacb2fa"),")"),(0,a.kt)("li",{parentName:"ul"},"when middleware config options is undefined, options.match (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/670"},"#670"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/18930498434d8bc0254fa1db013346443a96e9f5"},"1893049"),")"),(0,a.kt)("li",{parentName:"ul"},"when middleware config options is undefined. options.enable expr\u2026 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/668"},"#668"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/3378ea41d0715e4451fb1cda3e72612d458582b0"},"3378ea4"),")")))}m.isMDXComponent=!0}}]);