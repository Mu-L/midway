"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Full stack kit",l={unversionedId:"hooks/fullstack",id:"hooks/fullstack",title:"Full stack kit",description:"In Midway Hooks, we provide @midwayjs/hooks-kit to quickly develop full stack applications. At present, we provide the following templates that can be used directly:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/fullstack.md",sourceDirName:"hooks",slug:"/hooks/fullstack",permalink:"/en/docs/hooks/fullstack",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/fullstack.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"File Upload",permalink:"/en/docs/hooks/upload"},next:{title:"Front-end request client",permalink:"/en/docs/hooks/client"}},s={},c=[{value:"Command line interface",id:"command-line-interface",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"full-stack-kit"},"Full stack kit"),(0,o.kt)("p",null,"In Midway Hooks, we provide ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," to quickly develop full stack applications. At present, we provide the following templates that can be used directly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/react"},"react")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/vue"},"vue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/prisma"},"prisma"))),(0,o.kt)("h2",{id:"command-line-interface"},"Command line interface"),(0,o.kt)("p",null,"In projects that use ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit"),", hooks executables can be used in npm scripts or run through ",(0,o.kt)("inlineCode",{parentName:"p"},"npx hooks"),". The following is the default npm scripts in Midway full stack projects created through scaffolding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "hooks dev", // start the development server\n    "start": "hooks start", // start the production server, please make sure you have run\' npm run build\' before using it\'\n    "build": "hooks build" // Build the product for production\n  }\n}\n')),(0,o.kt)("p",null,"When using a command line, you can pass in options through command line parameters, and specific options can be referenced through -- help."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks build -- help")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage:\n  $hooks build [root]\n\nOptions:\n  --outDir <dir> [string] output directory (default: dist)\n  --clean [boolean] clean output directory before build (default: false)\n  -h, --help Display this message\n")))}u.isMDXComponent=!0}}]);