"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,w=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Web middleware",l={unversionedId:"middleware",id:"middleware",title:"Web middleware",description:"Web middleware is a function called before and after (partially).  Middleware functions can access request and response objects.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/en/docs/middleware",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/middleware.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Routing and controller",permalink:"/en/docs/controller"},next:{title:"Application and Context",permalink:"/en/docs/req_res_app"}},d={},s=[{value:"Writing middleware",id:"writing-middleware",level:2},{value:"Use middleware",id:"use-middleware",level:2},{value:"Routing middleware",id:"routing-middleware",level:3},{value:"Global middleware",id:"global-middleware",level:3},{value:"Ignore and match routes",id:"ignore-and-match-routes",level:2},{value:"Function middleware",id:"function-middleware",level:2},{value:"Get the middleware name",id:"get-the-middleware-name",level:2},{value:"Middleware sequence",id:"middleware-sequence",level:2},{value:"Common examples",id:"common-examples",level:2},{value:"Get request scope instance in middleware",id:"get-request-scope-instance-in-middleware",level:3},{value:"Unified return data structure",id:"unified-return-data-structure",level:3},{value:"About the case where middleware returns null",id:"about-the-case-where-middleware-returns-null",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-middleware"},"Web middleware"),(0,a.kt)("p",null,"Web middleware is a function called ",(0,a.kt)("strong",{parentName:"p"},"before")," and after (partially).  Middleware functions can access request and response objects.\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01h6hYvW1ogNexjJ3Nl_!!6000000005254-2-tps-2196-438.png",alt:"image.png"})),(0,a.kt)("p",null,"Different upper-layer web frameworks have different middleware forms. Midway standard middleware is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/intro/egg-and-koa.html#midlleware"},"onion ring model"),". Express, on the other hand, is a traditional queue model."),(0,a.kt)("p",null,"Koa and EggJs can be executed",(0,a.kt)("strong",{parentName:"p"}," before and after the "),"controller. In Express, the middleware can ",(0,a.kt)("strong",{parentName:"p"},"only be called before")," the controller, which will be introduced separately in Express chapters."),(0,a.kt)("p",null,"For the following code, we will take ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," as an example."),(0,a.kt)("h2",{id:"writing-middleware"},"Writing middleware"),(0,a.kt)("p",null,"In general, we will write Web middleware in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/middleware")," folder."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/middleware/report.middleware.ts")," . In this web middleware, we print the time when the controller (Controller) executes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u251c\u2500\u2500 user.controller.ts\n\u2502   \u2502   \u2514\u2500\u2500 home.controller.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u251c\u2500\u2500 middleware                   ## middleare directory\n\u2502   \u2502   \u2514\u2500\u2500 report.middleware.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Midway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Middleware")," decorator to identify the middleware. The complete middleware sample code is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // Logic executed before the controller\n      const startTime = Date.now();\n      // Execute the next Web middleware and finally execute to the controller.\n      // Here you can get the return value of the next middleware or controller.\n      const result = await next();\n      // Logic executed after the controller\n      console.log(Date.now() - startTime);\n      // Returns the result to the previous middleware\n      return result;\n    };\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("p",null,"In short, ",(0,a.kt)("inlineCode",{parentName:"p"},"await next()")," represents the next logic to be executed, which generally represents the controller execution. Before and after execution, we can perform some printing and assignment operations, which is also the biggest advantage of the onion ring model."),(0,a.kt)("p",null,"Note that Midway finishes the traditional onion model so that it can obtain the return value of the next middleware. At the same time, you can also return the result of this middleware to the previous middleware by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," method."),(0,a.kt)("p",null,"The static ",(0,a.kt)("inlineCode",{parentName:"p"},"getName")," method here is used to specify the name of the middleware to facilitate troubleshooting."),(0,a.kt)("p",null,"\u200b\t"),(0,a.kt)("h2",{id:"use-middleware"},"Use middleware"),(0,a.kt)("p",null,"After the Web middleware is written, it needs to be applied to the request process."),(0,a.kt)("p",null,"According to the location of the application, there are two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Global middleware, middleware that all routes will execute, such as cookie, session, etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Routing middleware, middleware that a single/partial route will execute, such as pre-check of a route, data processing, etc.")))),(0,a.kt)("p",null,"The relationship between them is generally:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oQZ5Rk1jReqck6YMn_!!6000000004545-2-tps-2350-584.png",alt:"image.png"})),(0,a.kt)("h3",{id:"routing-middleware"},"Routing middleware"),(0,a.kt)("p",null,"After writing the middleware, we need to apply it to each controller route.  ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," the second parameter of the decorator, which allows us to easily add middleware to a routing group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller } from '@midwayjs/decorator';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\n\n@Controller('/', { middleware: [ ReportMiddleware ] })\nexport class HomeController {\n\n}\n")),(0,a.kt)("p",null,"Midway also provides middleware parameters on route decorators such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@Get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Post")," to facilitate middleware interception of a single route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\n\n@Controller('/')\nexport class HomeController {\n\n  @Get('/', { middleware: [ ReportMiddleware ]})\n  async home() {\n  }\n}\n")),(0,a.kt)("h3",{id:"global-middleware"},"Global middleware"),(0,a.kt)("p",null,"The so-called global middleware is the Web middleware that takes effect on all routes."),(0,a.kt)("p",null,"We need to add middleware to the middleware list of the current framework before the application starts. ",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware")," method, we can add middleware to the middleware list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useMiddleware(ReportMiddleware);\n  }\n}\n\n")),(0,a.kt)("p",null,"You can add multiple middleware at the same time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  this.app.useMiddleware([ReportMiddleware1, ReportMiddleware2]);\n}\n")),(0,a.kt)("h2",{id:"ignore-and-match-routes"},"Ignore and match routes"),(0,a.kt)("p",null,"When middleware is executed, we can add logic that routes ignore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // ...\n    };\n  }\n\n  ignore(ctx: Context): boolean {\n    // The following route will ignore this middleware\n    return ctx.path === '/'\n      || ctx.path === '/api/auth'\n      || ctx.path === '/api/login';\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("p",null,"Similarly, you can also add matching routes. Only matching routes will execute the middleware. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"match")," only take effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // ...\n    };\n  }\n\n  match(ctx: Context): boolean {\n    // The following matching route will execute this middleware\n    if (ctx.path === '/api/index') {\n      return true;\n    }\n  }\n\n  static getName(): string {\n    return 'report';\n  }\n}\n")),(0,a.kt)("h2",{id:"function-middleware"},"Function middleware"),(0,a.kt)("p",null,"Midway still supports the form of function middleware and can be added to the middleware list using ",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/another.middleware.ts\nexport async function fnMiddleware(ctx, next) {\n  // ...\n  await next();\n  // ...\n}\n\n\n// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\nimport { fnMiddleware } from './middleware/another.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // add middleware\n    this.app.useMiddleware([ReportMiddleware, fnMiddleware]);\n  }\n}\n\n\n")),(0,a.kt)("p",null,"In this way, many koa tripartite middleware in the community can be easily accessed."),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-static")," as an example."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-static")," document, it is written as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const Koa = require('koa');\nconst app = new Koa();\napp.use(require('koa-static')(root, opts));\n")),(0,a.kt)("p",null,"Then, the ",(0,a.kt)("inlineCode",{parentName:"p"},"require('koa-static'))(root, opts)")," is actually the returned middleware method. We can export it directly and call ",(0,a.kt)("inlineCode",{parentName:"p"},"useMiddleware"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  // add middleware\n  this.app.useMiddleware(require('koa-static')(root, opts));\n}\n")),(0,a.kt)("h2",{id:"get-the-middleware-name"},"Get the middleware name"),(0,a.kt)("p",null,"Each middleware should have a name. By default, the name of the class middleware will be obtained according to the following rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"When the static method of ",(0,a.kt)("inlineCode",{parentName:"li"},"getName()")," exists, take its return value as the name"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"If there is no static method of ",(0,a.kt)("inlineCode",{parentName:"li"},"getName()"),", the class name will be used as the middleware name.")))),(0,a.kt)("p",null,"A well-recognized middleware name plays a big role in manually sorting or debugging code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  // ...\n\n  static getName(): string {\n    return 'report'; // Middleware name\n  }\n}\n")),(0,a.kt)("p",null,"Function middleware is similar. The defined method name is the name of middleware, such as the following ",(0,a.kt)("inlineCode",{parentName:"p"},"fnMiddleware"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function fnMiddleware(ctx, next) {\n  // ...\n  await next();\n  // ...\n}\n")),(0,a.kt)("p",null,"If the third-party middleware exports an anonymous middleware function, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"_name")," to add a name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const fn = async (ctx, next) => {\n  // ...\n  await next();\n  // ...\n};\n\nfn._name = 'fnMiddleware';\n\n")),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"getMiddleware().getNames()")," to obtain all middleware names in the current middleware list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\nimport { fnMiddleware } from './middleware/another.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // add middleware\n    this.app.useMiddleware([ReportMiddleware, fnMiddleware]);\n\n    // output\n    console.log(this.app.getMiddleware().getNames());\n    // => report, fnMiddleware\n  }\n}\n\n\n\n")),(0,a.kt)("h2",{id:"middleware-sequence"},"Middleware sequence"),(0,a.kt)("p",null,"Sometimes, we need to modify the order of middleware in components or applications."),(0,a.kt)("p",null,"Midway provides ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," API operations to facilitate you to quickly adjust middleware."),(0,a.kt)("p",null,"We need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getMiddleware()")," method to obtain the middleware list and then operate on it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport { ReportMiddleware } from './middleware/user.middleware';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class AutoConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // Add middleware to the front\n    this.app.getMiddleware().insertFirst(ReportMiddleware);\n    // Adding middleware to the back is equivalent to useMiddleware\n    this.app.getMiddleware().insertLast(ReportMiddleware);\n\n    // After adding middleware to middleware named session\n    this.app.getMiddleware().insertAfter(ReportMiddleware, 'session');\n    // Before adding middleware to middleware named session\n    this.app.getMiddleware().insertBefore(ReportMiddleware, 'session');\n  }\n}\n\n")),(0,a.kt)("h2",{id:"common-examples"},"Common examples"),(0,a.kt)("h3",{id:"get-request-scope-instance-in-middleware"},"Get request scope instance in middleware"),(0,a.kt)("p",null,"Due to the particularity of the life cycle of Web middleware, it will be loaded (bound) to the route before the application request, so it cannot be associated with the request. The scope of the middleware class is ",(0,a.kt)("strong",{parentName:"p"},"fixed as a singleton (Singleton)"),"."),(0,a.kt)("p",null,"Because ",(0,a.kt)("strong",{parentName:"p"},"the middleware instance is a single instance"),", the instances injected in the middleware are not bound to the request, ",(0,a.kt)("strong",{parentName:"p"},"ctx cannot be obtained"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Inject()")," cannot be used to inject the instance of the request scope. Only the Singleton instances can be obtained."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("strong",{parentName:"p"},"the following code is wrong.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  @Inject()\n  userService; // The instance and context injected here are not bound and ctx cannot be obtained.\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      // TODO\n      await next();\n    };\n  }\n\n}\n")),(0,a.kt)("p",null,"If you want to get an instance of the request scope, you can use the method obtained from the request scope container ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.requestContext"),", as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class ReportMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const userService = await ctx.requestContext.getAsync<UserService>(UserService);\n      // TODO userService.xxxx\n      await next();\n    };\n  }\n\n}\n")),(0,a.kt)("h3",{id:"unified-return-data-structure"},"Unified return data structure"),(0,a.kt)("p",null,"For example, all data returned in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," uses a unified structure to reduce duplicate code in the Controller."),(0,a.kt)("p",null,"We can add a middleware code similar to the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class FormatMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const result = await next();\n      return {\n        code: 0\n        msg: 'OK',\n        data: result\n      }\n    };\n  }\n\n  match(ctx) {\n    return ctx.path.indexOf('/api')! = = -1;\n  }\n}\n")),(0,a.kt)("p",null,"The preceding code is only the code that is returned with the correct logic. If you want to return an incorrect package, you can use ",(0,a.kt)("a",{parentName:"p",href:"./error_filter"},"Filter"),"."),(0,a.kt)("h3",{id:"about-the-case-where-middleware-returns-null"},"About the case where middleware returns null"),(0,a.kt)("p",null,"under koa/egg, if a null value is returned in the middleware, the status code will become 204, and the status code needs to be explicitly assigned to the middleware."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware } from '@midwayjs/core';\nimport { Middleware } from '@midwayjs/decorator';\nimport { NextFunction, Context } from '@midwayjs/koa';\n\n@Middleware()\nexport class FormatMiddleware implements IMiddleware<Context, NextFunction> {\n\n  resolve() {\n    return async (ctx: Context, next: NextFunction) => {\n      const result = await next();\n      if (result === null) {\n        ctx.status = 200;\n      }\n      return {\n        code: 0\n        msg: 'OK',\n        data: result\n      }\n    };\n  }\n\n  match(ctx) {\n    return ctx.path.indexOf('/api')! = = -1;\n  }\n}\n")))}m.isMDXComponent=!0}}]);