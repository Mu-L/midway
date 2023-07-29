"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},i="Application and Context",p={unversionedId:"req_res_app",id:"req_res_app",title:"Application and Context",description:"Midway's application will expose different protocols, such as Http,WebSocket, etc. Each protocol here is provided by an independent component for Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/req_res_app.md",sourceDirName:".",slug:"/req_res_app",permalink:"/en/docs/req_res_app",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/req_res_app.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Web middleware",permalink:"/en/docs/middleware"},next:{title:"Service and Injection",permalink:"/en/docs/service"}},l={},s=[{value:"Defining conventions",id:"defining-conventions",level:2},{value:"Application",id:"application",level:2},{value:"How to get",id:"how-to-get",level:3},{value:"Main Application",id:"main-application",level:3},{value:"getAppDir",id:"getappdir",level:3},{value:"getBaseDir",id:"getbasedir",level:3},{value:"getEnv",id:"getenv",level:3},{value:"getApplicationContext",id:"getapplicationcontext",level:3},{value:"getConfig",id:"getconfig",level:3},{value:"getLogger",id:"getlogger",level:3},{value:"getCoreLogger",id:"getcorelogger",level:3},{value:"getProjectName",id:"getprojectname",level:3},{value:"setAttr &amp; getAttr",id:"setattr--getattr",level:3},{value:"getNamespace",id:"getnamespace",level:3},{value:"Context",id:"context",level:2},{value:"How to get",id:"how-to-get-1",level:3},{value:"requestContext",id:"requestcontext",level:3},{value:"logger",id:"logger",level:3},{value:"startTime",id:"starttime",level:3},{value:"setAttr &amp; getAttr",id:"setattr--getattr-1",level:3},{value:"getLogger",id:"getlogger-1",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-and-context"},"Application and Context"),(0,o.kt)("p",null,"Midway's application will expose different protocols, such as Http,WebSocket, etc. Each protocol here is provided by an independent component for Midway."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," in our previous example is a component that provides Http services. We will take this component as an example to introduce built-in objects."),(0,o.kt)("p",null,"Each Web framework used will provide its own unique capabilities, which will be reflected in its own ",(0,o.kt)("strong",{parentName:"p"},"context")," (Context) and ",(0,o.kt)("strong",{parentName:"p"},"application")," (Application)."),(0,o.kt)("h2",{id:"defining-conventions"},"Defining conventions"),(0,o.kt)("p",null,"In order to simplify the use, all components of the exposure protocol will export ",(0,o.kt)("strong",{parentName:"p"},"context")," (Context) and ",(0,o.kt)("strong",{parentName:"p"},"application")," (Application) definitions, and we are consistent. That is, ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/koa';\nimport { Application, Context } from '@midwayjs/faas';\nimport { Application, Context } from '@midwayjs/web';\nimport { Application, Context } from '@midwayjs/express';\n")),(0,o.kt)("p",null,"And non-Web framework, we have also maintained the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application, Context } from '@midwayjs/socketio';\nimport { Application, Context } from '@midwayjs/grpc';\nimport { Application, Context } from '@midwayjs/rabbitmq';\n")),(0,o.kt)("h2",{id:"application"},"Application"),(0,o.kt)("p",null,"Application is the application object in a component, and may have different implementations in different components. The Application object will contain some unified methods, which are unified from the ",(0,o.kt)("inlineCode",{parentName:"p"},"IMidwayApplication")," definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application } from '@midwayjs/koa';\n")),(0,o.kt)("h3",{id:"how-to-get"},"How to get"),(0,o.kt)("p",null,"In all classes that depend on injection container management, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@App()")," decorator can be used to obtain the ",(0,o.kt)("strong",{parentName:"p"},"current most important")," Application."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Controller, Get } from '@midwayjs/core';\nimport { Application } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @App()\n  app: Application;\n\n  @Get('/')\n  async home() {\n    // this.app.getConfig()\n    // this.app.getEnv()\n  }\n}\n")),(0,o.kt)("h3",{id:"main-application"},"Main Application"),(0,o.kt)("p",null,"The protocols exposed by Midway applications are brought by components, and each component will expose the Application objects corresponding to its own protocol."),(0,o.kt)("p",null,"This means that there will be multiple Application in an application. By default, we agree that the first Application introduced in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," is the ",(0,o.kt)("strong",{parentName:"p"},"Main Application")," (the ",(0,o.kt)("strong",{parentName:"p"},"main Application")," )."),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("strong",{parentName:"p"},"Main Application")," is the Application instance in the following KOA (the ",(0,o.kt)("strong",{parentName:"p"},"main Application")," )."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { Configuration, ILifeCycle } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [koa, ws]\n})\nexport class MainConfiguration implements ILifeCycle {\n  // ...\n}\n")),(0,o.kt)("p",null,"In fact, Application all implement interfaces with ",(0,o.kt)("inlineCode",{parentName:"p"},"IMidwayApplication"),". If we use a common API, there is no difference."),(0,o.kt)("p",null,"Being a Main Application has some advantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In most scenarios, you can use ",(0,o.kt)("inlineCode",{parentName:"li"},"@App()")," to inject and obtain"),(0,o.kt)("li",{parentName:"ul"},"Priority initialization")),(0,o.kt)("p",null,"For example, when multiple export Application components need to load middleware, they can be simply coded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { Configuration, ILifeCycle } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [koa, ws]\n})\nexport class MainConfiguration implements ILifeCycle {\n  @App()\n  koaApp: koa.Application;\n\n  @App('webSocket')\n  wsApp: ws.Application;\n\n  async onReady() {\n    this.koaApp.useMiddleweare(...);\n    this.wsApp.useMiddleweare(...);\n  }\n}\n")),(0,o.kt)("p",null,"Non-primary Application need to be obtained through the parameters or ",(0,o.kt)("a",{parentName:"p",href:"./built_in_service#midwayapplicationmanager"},"ApplicationManager")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@App()")," decorator."),(0,o.kt)("p",null,"The parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@App()")," decorator is the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," of the component."),(0,o.kt)("p",null,"Common namespaces are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Package"),(0,o.kt)("th",{parentName:"tr",align:null},"Namespace"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,o.kt)("td",{parentName:"tr",align:null},"egg")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,o.kt)("td",{parentName:"tr",align:null},"koa")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,o.kt)("td",{parentName:"tr",align:null},"express")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/grpc"),(0,o.kt)("td",{parentName:"tr",align:null},"gRPC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/ws"),(0,o.kt)("td",{parentName:"tr",align:null},"webSocket")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/socketio"),(0,o.kt)("td",{parentName:"tr",align:null},"socketIO")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,o.kt)("td",{parentName:"tr",align:null},"faas")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/kafka"),(0,o.kt)("td",{parentName:"tr",align:null},"kafka")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/rabbitmq"),(0,o.kt)("td",{parentName:"tr",align:null},"rabbitMQ")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@midwayjs/bull"),(0,o.kt)("td",{parentName:"tr",align:null},"bull")))),(0,o.kt)("h3",{id:"getappdir"},"getAppDir"),(0,o.kt)("p",null,"Used to get the project root directory path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getAppDir();\n// => /my_project\n")),(0,o.kt)("h3",{id:"getbasedir"},"getBaseDir"),(0,o.kt)("p",null,"It is used to obtain the basic path of the project TypeScript. By default, it is the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory in development and the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory after compilation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getBaseDir();\n// => /my_project/src\n")),(0,o.kt)("h3",{id:"getenv"},"getEnv"),(0,o.kt)("p",null,"Gets the current project environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getEnv();\n// => production\n")),(0,o.kt)("h3",{id:"getapplicationcontext"},"getApplicationContext"),(0,o.kt)("p",null,"Gets the current global dependency injection container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getApplicationContext();\n")),(0,o.kt)("h3",{id:"getconfig"},"getConfig"),(0,o.kt)("p",null,"Get the configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get all configurations\nthis.app.getConfig();\n// Get specific key configuration\nthis.app.getConfig('koa');\n// Obtain multi-level configuration\nthis.app.getConfig('midwayLoggers.default.dir');\n")),(0,o.kt)("h3",{id:"getlogger"},"getLogger"),(0,o.kt)("p",null,"Obtain a Logger, do not pass parameters, and return appLogger by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getLogger();\n// => app logger\nthis.app.getLogger('custom');\n// => custom logger\n")),(0,o.kt)("h3",{id:"getcorelogger"},"getCoreLogger"),(0,o.kt)("p",null,"Get Core Logger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getCoreLogger();\n")),(0,o.kt)("h3",{id:"getprojectname"},"getProjectName"),(0,o.kt)("p",null,"The project name is obtained from the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h3",{id:"setattr--getattr"},"setAttr & getAttr"),(0,o.kt)("p",null,"Mount an object directly on the Application can cause difficulty in defining and maintaining it."),(0,o.kt)("p",null,"In most cases, what users need is a temporary global data storage method, such as temporarily accessing a data across files within an application or component, saving from one class and obtaining it from another class."),(0,o.kt)("p",null,"For this reason, Midway provides an API for global data access to solve such requirements."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.setAttr('abc', {\n  a: 1\n  B: 2\n});\n")),(0,o.kt)("p",null,"Get it in another place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = this.app.getAttr('abc');\nconsole.log(value);\n// { a: 1, B: 2}\n")),(0,o.kt)("h3",{id:"getnamespace"},"getNamespace"),(0,o.kt)("p",null,"Through the ",(0,o.kt)("inlineCode",{parentName:"p"},"getNamespace")," API, you can get the ",(0,o.kt)("a",{parentName:"p",href:"#main-application"},"framework type")," of the component to which the current app belongs (that is, the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," of the component)."),(0,o.kt)("p",null,"For example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"koa")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.app.getNamespace();\n// 'koa'\n")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"A Context is a ",(0,o.kt)("strong",{parentName:"p"},"request-level object"),". Each time a user request is received, the framework instantiates a Context object,"),(0,o.kt)("p",null,"In Http scenarios, this object encapsulates the information requested by the user this time, or other methods for obtaining request parameters and setting response information. In scenarios such as WebSocket and Rabbitmq, Context also have their own attributes, subject to the definition of the framework."),(0,o.kt)("p",null,"The following API is a common attribute or interface for each context implementation."),(0,o.kt)("h3",{id:"how-to-get-1"},"How to get"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"default request scope"),", that is, in the controller (Controller) or common service (Service), we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," to inject the corresponding instance."),(0,o.kt)("p",null,"for example, you can obtain the corresponding ctx instance in this way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx")," is a framework built-in ctx instance keyword, if you want to use a different attribute name, you can also modify the decorator parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject('ctx')\n  customContextName: Context;\n\n  @Get('/')\n  async home() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"If a service can be called by multiple upper-level frameworks, since the ctx types provided by different frameworks are different, it can be solved by type combination."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { Context as BullContext } from '@midwayjs/bull';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  ctx: Context & BullContext;\n\n  async getUser() {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"In addition to explicit declarations, when the interceptor or decorator is designed, because we cannot know whether the user has written the ctx attribute, we can also obtain it through the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"REQUEST_ OBJ_CTX_KEY")," field."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Controller, Get, REQUEST_OBJ_CTX_KEY } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async home() {\n    ctx.logger.info(this.ctx === this[REQUEST_OBJ_CTX_KEY]);\n    // => true\n  }\n}\n")),(0,o.kt)("h3",{id:"requestcontext"},"requestContext"),(0,o.kt)("p",null,"Midway mounts a ",(0,o.kt)("inlineCode",{parentName:"p"},"requestContext")," attribute for each Context, a dependency injection container under the request scope, which is used to create objects under the request scope."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const userService = await this.ctx.requestContext.getAsync(UserService);\n// ...\n")),(0,o.kt)("h3",{id:"logger"},"logger"),(0,o.kt)("p",null,"The default logger object under the request scope, which contains context data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.logger.info('xxxx');\n")),(0,o.kt)("h3",{id:"starttime"},"startTime"),(0,o.kt)("p",null,"The time when context execution starts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.startTime\n// 1642820640502\n")),(0,o.kt)("h3",{id:"setattr--getattr-1"},"setAttr & getAttr"),(0,o.kt)("p",null,"The method is the same as that used in ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),". The data of these methods is stored in the request link. As the request is destroyed, you can put some temporary data of the request in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.setAttr('abc', {\n  a: 1\n  B: 2\n});\n")),(0,o.kt)("p",null,"Get it in another place."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = this.ctx.getAttr('abc');\nconsole.log(value);\n// { a: 1, B: 2}\n")),(0,o.kt)("h3",{id:"getlogger-1"},"getLogger"),(0,o.kt)("p",null,"Gets the context log of a custom Logger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"this.ctx.getLogger('custom');\n// => custom logger\n")))}d.isMDXComponent=!0}}]);