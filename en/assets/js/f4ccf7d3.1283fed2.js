"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={slug:"release/3.6.0",title:"Release 3.6.0",authors:["harry"],tags:["release"]},l=void 0,s={permalink:"/en/blog/release/3.6.0",source:"@site/blog/2022-10-12-release-3-6.md",title:"Release 3.6.0",description:"v.3.6.0 \u5305\u542b\u4e00\u4e2a\u91cd\u5927\u7684 \u91cd\u6784\uff0c\u6211\u4eec\u5c06 @midwayjs/decorator \u5305\u548c @midwayjs/core \u5305\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u672a\u6765\u6240\u6709\u7684 decorator \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u90fd\u4f1a\u7531 @midwayjs/core \u5bfc\u51fa\uff0c@midwayjs/decorator \u5305\u4ec5\u505a\u4ee3\u7406\uff0c\u4fdd\u6301\u529f\u80fd\u517c\u5bb9\u3002",date:"2022-10-12T00:00:00.000Z",formattedDate:"October 12, 2022",tags:[{label:"release",permalink:"/en/blog/tags/release"}],readingTime:2.19,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.6.0",title:"Release 3.6.0",authors:["harry"],tags:["release"]},prevItem:{title:"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd",permalink:"/en/blog/core-decorator-merge"}},i={authorsImageUrls:[void 0]},c=[{value:"Features",id:"features",level:2},{value:"1\u3001\u5b88\u536b",id:"1\u5b88\u536b",level:3},{value:"2\u3001\u9274\u6743",id:"2\u9274\u6743",level:3},{value:"3\u3001bull \u7ec4\u4ef6",id:"3bull-\u7ec4\u4ef6",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"v.3.6.0 \u5305\u542b\u4e00\u4e2a\u91cd\u5927\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway/issues/2258"},"\u91cd\u6784"),"\uff0c\u6211\u4eec\u5c06 @midwayjs/decorator \u5305\u548c @midwayjs/core \u5305\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u672a\u6765\u6240\u6709\u7684 decorator \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u90fd\u4f1a\u7531 @midwayjs/core \u5bfc\u51fa\uff0c@midwayjs/decorator \u5305\u4ec5\u505a\u4ee3\u7406\uff0c\u4fdd\u6301\u529f\u80fd\u517c\u5bb9\u3002\n\u540e\u7eed\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u6587\u6863\u4e0a\u8fdb\u884c decorator \u5305\u7684\u79fb\u9664\u64cd\u4f5c\uff0c\u5728\u8fd9\u6bb5\u65f6\u95f4\u4e2d\uff0c\u5927\u5bb6\u8fd8\u662f\u4f1a\u770b\u5230 decorator \u548c core \u5e76\u5b58\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"1\u5b88\u536b"},"1\u3001\u5b88\u536b"),(0,a.kt)("p",null,"\u4ece v3.6.0 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5b88\u536b\u80fd\u529b\uff0c\u548c middleare\uff0cfilter \u7c7b\u4f3c\uff0c\u4e5f\u662f\u4e00\u4e2a\u5168\u6846\u67b6\u590d\u7528\u7684\u80fd\u529b\uff08koa/egg/grpc/rabbitmq/bull \u7b49\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://midwayjs.org/docs/guard"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"2\u9274\u6743"},"2\u3001\u9274\u6743"),(0,a.kt)("p",null,"\u57fa\u4e8e\u5b88\u536b\u529f\u80fd\u7684\u5b8c\u6210\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49 @Role \u88c5\u9970\u5668\u6765\u5b8c\u6210\u7b80\u5355\u7684\u89d2\u8272\u9274\u6743\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u5c01\u88c5\u4e86 casbin \u8fd9\u4e00\u5728\u793e\u533a\u8f83\u4e3a\u901a\u7528\u7684\u9274\u6743\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u5927\u5bb6\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u901a\u8fc7\u88c5\u9970\u5668\u9274\u6743\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, UseGuard } from '@midwayjs/decorator';\nimport { AuthActionVerb, AuthGuard, AuthPossession, UsePermission } from '@midwayjs/casbin';\nimport { Resource } from './resouce';\n\n@Controller('/')\nexport class HomeController {\n\n  @UseGuard(AuthGuard)\n  @UsePermission({\n    action: AuthActionVerb.READ,\n    resource: Resource.USER_ROLES,\n    possession: AuthPossession.ANY\n  })\n  @Get('/users')\n  async findAllUsers() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"casbin \u7ec4\u4ef6\u76ee\u524d\u5b9e\u73b0\u4e86 redis \u548c typeorm \u4e24\u4e2a\u53ef\u4ee5\u590d\u7528\u7684\u9002\u914d\u5668\u4f9b\u5927\u5bb6\u9009\u62e9\uff0c\u5982\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u989d\u5916\u8fdb\u884c\u9002\u914d\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://midwayjs.org/docs/extensions/casbin"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"3bull-\u7ec4\u4ef6"},"3\u3001bull \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u65b0\u589e\u4e86 bull \u7ec4\u4ef6\u7528\u4e8e\u66ff\u4ee3\u539f\u6709\u7684 task \u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// invoke\nconst testQueue = this.bullFramework.getQueue('test');\n// \u7acb\u5373\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\nawait testQueue?.runJob({\n  aaa: 1,\n  bbb: 2,\n});\n")),(0,a.kt)("p",null,"\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a bull-board \u7ec4\u4ef6\u7528\u4e8e\u7ba1\u7406\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/501408/1665641044268-8ebfc3bb-777b-43f8-a8d9-bfb77f95e47c.png",alt:null})),(0,a.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b \u6587\u6863\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u4ecb\u7ecd\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1ZB4y1j7H3/"},"b \u7ad9\u89c6\u9891")))}p.isMDXComponent=!0}}]);