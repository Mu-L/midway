"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46730],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,f=d["".concat(o,".").concat(u)]||d[u]||l[u]||n;return a?r.createElement(f,m(m({ref:t},p),{},{components:a})):r.createElement(f,m({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,m=new Array(n);m[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,m[1]=s;for(var c=2;c<n;c++)m[c]=a[c];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={date:"2022-09-25T20:00"},m="3.5.3",s={permalink:"/en/changelog/3.5.3",source:"@site/changelog/source/3.5.3.md",title:"3.5.3",description:"Bug Fixes",date:"2022-09-25T20:00:00.000Z",formattedDate:"September 25, 2022",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-09-25T20:00"},prevItem:{title:"3.6.0",permalink:"/en/changelog/3.6.0"},nextItem:{title:"3.5.2",permalink:"/en/changelog/3.5.2"},listPageLink:"/en/changelog/"},o={authorsImageUrls:[]},c=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],p={toc:c};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/grpc-js to v1.7.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2331"},"#2331"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4a962dce8f3d2990fc3a2668b7e009b670f99166"},"4a962dc"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/proto-loader to v0.7.3 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2327"},"#2327"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d05dab5e9c2f73fc14d2bb82f61fb8e6bd52416f"},"d05dab5"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," update dependency sequelize to v6.23.1 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2332"},"#2332"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/2a5c6eb82394c4b1427e936da3525d999d459b4e"},"2a5c6eb"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," update dependency ws to v8.9.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2333"},"#2333"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8a84a109b0a304c3f75db6cfb6dcf11e6d3edd78"},"8a84a10"),")"),(0,i.kt)("li",{parentName:"ul"},"make addAspect public (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2317"},"#2317"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ded7a0798b4f94936f851b202e2406d6dd3902e6"},"ded7a07"),")"),(0,i.kt)("li",{parentName:"ul"},"path parameters set (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2314"},"#2314"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/cf1b441fa1d80894e69ea6ac3bd159f04a0c6ba5"},"cf1b441"),")"),(0,i.kt)("li",{parentName:"ul"},"scripts in ",(0,i.kt)("inlineCode",{parentName:"li"},"benchmark/")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2310"},"#2310"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a039d3d269311e42cbc15c4431508219351bb521"},"a039d3d"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"view:")," fix setLocals (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2321"},"#2321"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/72789a114b1142674c1a8141c7af382538d92400"},"72789a1"),")")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add proxyTimeout for httpProxy (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2308"},"#2308"),") (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/fb141183223098534a075ab20bd3e2c366e40d4a"},"fb14118"),")")))}l.isMDXComponent=!0}}]);