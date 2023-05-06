"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="Router Table",o={unversionedId:"router_table",id:"router_table",title:"Router Table",description:"Starting from v2.8.0, Midway provides built-in routing table capability, and all Web frameworks will use this routing table to register routes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/router_table.md",sourceDirName:".",slug:"/router_table",permalink:"/en/docs/router_table",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/router_table.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Built-in service",permalink:"/en/docs/built_in_service"},next:{title:"Existing decorator index",permalink:"/en/docs/decorator_index"}},s={},u=[{value:"Get the routing table service",id:"get-the-routing-table-service",level:2},{value:"Routing information definition",id:"routing-information-definition",level:2},{value:"Routing priority",id:"routing-priority",level:2},{value:"The current matching route",id:"the-current-matching-route",level:2},{value:"Routing information",id:"routing-information",level:2},{value:"Get a list of flat routes",id:"get-a-list-of-flat-routes",level:3},{value:"Get Router information list",id:"get-router-information-list",level:3},{value:"Get hierarchical routes",id:"get-hierarchical-routes",level:3},{value:"Get all function information",id:"get-all-function-information",level:3},{value:"Add route",id:"add-route",level:2},{value:"Dynamically add web controllers",id:"dynamically-add-web-controllers",level:3},{value:"Dynamically add web routing functions",id:"dynamically-add-web-routing-functions",level:3},{value:"Dynamically add Serverless functions",id:"dynamically-add-serverless-functions",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"router-table"},"Router Table"),(0,a.kt)("p",null,"Starting from v2.8.0, Midway provides built-in routing table capability, and all Web frameworks will use this routing table to register routes."),(0,a.kt)("p",null,"Starting from v3.4.0, the routing service will be provided as a Midway built-in service."),(0,a.kt)("p",null,"Available at application startup, onReady lifecycle, and thereafter."),(0,a.kt)("h2",{id:"get-the-routing-table-service"},"Get the routing table service"),(0,a.kt)("p",null,"It has been instantiated by default and can be used by direct injection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayWebRouterService, MidwayServerlessFunctionService, Configuration, Inject } from '@midwayjs/core';\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  @Inject()\n  webRouterService: MidwayWebRouterService;\n\n  @Inject()\n  serverlessFunctionService: MidwayServerlessFunctionService;\n\n  async onReady() {\n    // Web routing\n    const routes = await this.webRouterService.getFlattenRouterTable();\n\n    // serverless function\n    const routes = await this.serverlessFunctionService.getFunctionList();\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayServerlessFunctionService")," only takes effect in Serverless scenarios, and the methods and ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayWebRouterService")," are almost the same."),(0,a.kt)("h2",{id:"routing-information-definition"},"Routing information definition"),(0,a.kt)("p",null,"Each routing information is represented by a ",(0,a.kt)("inlineCode",{parentName:"p"},"RouterInfo")," definition and contains some attributes."),(0,a.kt)("p",null,"The definition is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RouterInfo {\n  /**\n   * router prefix\n   */\n  prefix: string;\n  /**\n   * router alias name\n   */\n  routerName: string;\n  /**\n   * router path, without prefix\n   */\n  url: string | RegExp;\n  /**\n   * request method for http, like get/post/delete\n   */\n  requestMethod: string;\n  /**\n   * invoke function method\n   */\n  method: string;\n  description: string;\n  summary: string;\n  /**\n   * router handler function key\uff0cfor IoC container load\n   */\n  handlerName: string;\n  /**\n   *  serverless func load key\n   */\n  funcHandlerName: string;\n  /**\n   * controller provideId\n   */\n  controllerId: string;\n  /**\n   * router middleware\n   */\n  middleware: any[];\n  /**\n   * controller middleware in this router\n   */\n  controllerMiddleware: any[];\n  /**\n   * request args metadata\n   */\n  requestMetadata: any[];\n  /**\n   * response data metadata\n   */\n  responseMetadata: any[];\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Routing prefix, such as/or/api, the part written by the user on the @Controller decorator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"routerName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Route name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The part of the route that removes the route prefix is also the part that the user writes on decorators such as @Get")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requestMethod"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Get/post/delete/put/all, etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The method name on the class actually called")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Description, parameters on the route decorator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"summary"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Summary, parameters on the routing decorator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handlerName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Equivalent to controllerId.method")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"funcHandlerName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"handler name written in @Func")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"controllerId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"controller dependent injection container key(providerId)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middleware"),(0,a.kt)("td",{parentName:"tr",align:null},"string []"),(0,a.kt)("td",{parentName:"tr",align:null},"Routing middleware string array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"controllerMiddleware"),(0,a.kt)("td",{parentName:"tr",align:null},"string []"),(0,a.kt)("td",{parentName:"tr",align:null},"Controller middleware string array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"requestMetadata"),(0,a.kt)("td",{parentName:"tr",align:null},"any []"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata of request parameters, @Query/@Body and other metadata")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"responseMetadata"),(0,a.kt)("td",{parentName:"tr",align:null},"any []"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata of response parameters, @SetHeader/@ContentType and other metadata")))),(0,a.kt)("h2",{id:"routing-priority"},"Routing priority"),(0,a.kt)("p",null,"In the past, we need to pay attention to the loading sequence of routes. For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/*")," configuration of the route is used after the actual ",(0,a.kt)("inlineCode",{parentName:"p"},"/abc"),". Otherwise, the route will be loaded to the wrong route. In the new version, we have automatically sorted this situation."),(0,a.kt)("p",null,"The rules are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Absolute path rules have the highest priority such as ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/cb/e")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"The asterisk can only appear at the end and must be after /, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/cb/**")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"If both the absolute path and the wildcard match a path, the absolute rule has a higher priority"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"When there are multiple wildcards that can match a path, the longest rule matches, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/**")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/cd/**")," when matching ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/cd/f")," ",(0,a.kt)("inlineCode",{parentName:"li"},"/ab/cd/**")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},"If both ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/*")," can match / , but ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," takes precedence over ",(0,a.kt)("inlineCode",{parentName:"li"},"/*"))))),(0,a.kt)("p",null,"This rule is also consistent with the routing rules of the functions under the Serverless."),(0,a.kt)("p",null,'It is simply understood as "clear routes have the highest priority, long routes have the highest priority, and general distribution has the lowest priority".'),(0,a.kt)("p",null,"For example, the priority of sorting is as follows (high to low):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/api/invoke/abc\n/api/invoke /*\n/api/abc\n/api /*\n/abc\n/*\n")),(0,a.kt)("h2",{id:"the-current-matching-route"},"The current matching route"),(0,a.kt)("p",null,"Through ",(0,a.kt)("inlineCode",{parentName:"p"},"getMatchedRouterInfo")," method, we can know the current route and which route information (RouterInfo) to match, so as to further process it. This logic is very useful in scenarios such as authentication."),(0,a.kt)("p",null,"For example, in middleware, we can judge in advance before entering the controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, Inject, httpError, MidwayWebRouterService } from '@midwayjs/core';\n\n@Middleware()\nexport class AuthMiddleware {\n  @Inject()\n  webRouterService: MidwayWebRouterService;\n\n  resolve() {\n    return async (ctx, next) => {\n      // Query whether the current route is registered in the routing table.\n      const routeInfo = await this.webRouterService.getMatchedRouterInfo(ctx.path, ctx.method);\n      if (routeInfo) {\n        await next();\n      } else {\n        throw new httpError.NotFoundError();\n      }\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"routing-information"},"Routing information"),(0,a.kt)("h3",{id:"get-a-list-of-flat-routes"},"Get a list of flat routes"),(0,a.kt)("p",null,"Gets a list of all routes that can be registered to HTTP services (including @Func/@Controller and all custom decorators registered according to standard information)."),(0,a.kt)("p",null,"It will be automatically sorted from high to low by priority."),(0,a.kt)("p",null,"Definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async getFlattenRouterTable(): Promise<RouterInfo[]>\n")),(0,a.kt)("p",null,"Gets the routing table API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await this.webRouterService.getFlattenRouterTable();\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n  {\n    "prefix": "/",\n    "routerName": "",\n    "url": "/set_header",\n    "requestMethod": "get",\n    "method": "homeSet",\n    "description": "",\n    "summary": "",\n    "handlerName": "apiController.homeSet",\n    "funcHandlerName": "apiController.homeSet",\n    "controllerId": "apiController",\n    "middleware": [],\n    "controllerMiddleware": [],\n    "requestMetadata": [],\n    "responseMetadata": [\n      {\n        "type": "web:response_header",\n        "setHeaders": {\n          "ccc": "ddd"\n        }\n      },\n      {\n        "type": "web:response_header",\n        "setHeaders": {\n          "bbb": "aaa"\n        }\n      }\n    ],\n  },\n  {\n    "prefix": "/",\n    "routerName": "",\n    "url": "/ctx-body",\n    "requestMethod": "get",\n    "method": "getCtxBody",\n    "description": "",\n    "summary": "",\n    "handlerName": "apiController.getCtxBody",\n    "funcHandlerName": "apiController.getCtxBody",\n    "controllerId": "apiController",\n    "middleware": [],\n    "controllerMiddleware": [],\n    "requestMetadata": [],\n    "responseMetadata": [],\n  },\n    // ...\n]\n')),(0,a.kt)("h3",{id:"get-router-information-list"},"Get Router information list"),(0,a.kt)("p",null,"In Midway, each Controller corresponds to a Router object, and each Router will have a route prefix, in which all routes will be sorted according to the above rules."),(0,a.kt)("p",null,"Router itself will also be sorted by prefix."),(0,a.kt)("p",null,"Definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RouterPriority {\n  prefix: string;\n  priority: number;\n  middleware: any[];\n  routerOptions: any;\n  controllerId: string;\n}\n\nasync getRoutePriorityList(): Promise<RouterPriority[]>\n")),(0,a.kt)("p",null,"Router's data is relatively simple."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"prefix"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Routing prefix, such as/or/API, the part written by the user on the @Controller decorator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Router's priority, @Priority the value filled in by the decorator,/root Router has the lowest default priority, which is -999")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"middleware"),(0,a.kt)("td",{parentName:"tr",align:null},"string []"),(0,a.kt)("td",{parentName:"tr",align:null},"Controller middleware string array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"controllerId"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"controller dependent injection container key(providerId)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"routerOptions"),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"@options of Controller decorator")))),(0,a.kt)("p",null,"Get route table API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const list = await collector.getRoutePriorityList();\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'[\n  {\n    "prefix": "/case",\n    "priority": 0,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "caseController"\n  },\n  {\n    "prefix": "/user",\n    "priority": 0,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "userController"\n  },\n  {\n    "prefix": "/",\n    "priority": -999,\n    "middleware": [],\n    "routerOptions": {\n      "middleware": [],\n      "sensitive": true\n    },\n    "controllerId": "apiController"\n  }\n]\n')),(0,a.kt)("h3",{id:"get-hierarchical-routes"},"Get hierarchical routes"),(0,a.kt)("p",null,"In some cases, we need to get hierarchical routes, including which routes are under which controller (Controller), so as to better create routes."),(0,a.kt)("p",null,"Midway also provides a method for obtaining hierarchical routing tables. The hierarchy is automatically sorted from high to low by priority."),(0,a.kt)("p",null,"Definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async getRouterTable(): Promise<Map<string, RouterInfo[]>>\n")),(0,a.kt)("p",null,"Obtain the hierarchical routing table API and return a map with the key as the prefix string of the controller's routing prefix. If the route prefix is not explicitly specified (such as functions or other scenarios), it will be classified as/route prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await collector.getRouterTable();\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"Map(3) {\n  '/' => [\n    {\n      prefix: '/',\n      routerName: '',\n      url: '/set_header',\n      requestMethod: 'get',\n      method: 'homeSet',\n      description: '',\n      summary: '',\n      handlerName: 'apiController.homeSet',\n      funcHandlerName: 'apiController.homeSet',\n      controllerId: 'apiController',\n      middleware: [],\n      controllerMiddleware: [],\n      requestMetadata: [],\n      responseMetadata: [Array],\n    },\n    {\n      prefix: '/',\n      routerName: '',\n      url: '/ctx-body',\n      requestMethod: 'get',\n      method: 'getCtxBody',\n      description: '',\n      summary: '',\n      handlerName: 'apiController.getCtxBody',\n      funcHandlerName: 'apiController.getCtxBody',\n      controllerId: 'apiController',\n      middleware: [],\n      controllerMiddleware: [],\n      requestMetadata: [],\n      responseMetadata: [],\n    },\n    // ...\n  ]\n}\n")),(0,a.kt)("h3",{id:"get-all-function-information"},"Get all function information"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"getFlattenRouterTable"),", except that the returned content contains more information about the function part."),(0,a.kt)("p",null,"Definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async getFunctionList(): Promise<RouterInfo[]>\n")),(0,a.kt)("p",null,"Gets the function routing table API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const result = await this.serverlessFunctionService.getFunctionList();\n")),(0,a.kt)("h2",{id:"add-route"},"Add route"),(0,a.kt)("h3",{id:"dynamically-add-web-controllers"},"Dynamically add web controllers"),(0,a.kt)("p",null,"Sometimes we want to dynamically add a controller according to certain conditions, we can use this method."),(0,a.kt)("p",null,"First, we need to have a controller class, but do not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, Provide } from '@midwayjs/core';\n\n// Note that @Controller decoration is not used here\n@Provide()\nexport class DataController {\n  @Get('/query_data')\n  async getData() {\n    return 'hello world';\n  }\n}\n")),(0,a.kt)("p",null,"We can add it dynamically by ",(0,a.kt)("inlineCode",{parentName:"p"},"addController")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { MidwayWebRouterService, Configuration, Inject } from '@midwayjs/core';\nimport { DataController } from './controller/data.controller';\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  @Inject()\n  webRouterService: MidwayWebRouterService;\n\n  async onReady() {\n    if (process.env.NODE_ENV === 'test') {\n      this.webRouterService.addController(DataController, {\n        prefix: '/test',\n        routerOptions: {\n          middleware: [\n            // ...\n          ]\n        }\n      });\n    }\n        // ...\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"addController")," method, the first parameter is the class itself, and the second parameter is the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," decorator parameter."),(0,a.kt)("h3",{id:"dynamically-add-web-routing-functions"},"Dynamically add web routing functions"),(0,a.kt)("p",null,"In some scenarios, users can add methods directly and dynamically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { MidwayWebRouterService, Configuration, Inject } from '@midwayjs/core';\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  @Inject()\n  webRouterService: MidwayWebRouterService;\n\n  async onReady() {\n    // koa/egg format\n    this.webRouterService.addRouter(async (ctx) => {\n      return 'hello world';\n    }, {\n      url: '/api/user',\n      requestMethod: 'GET',\n    });\n        // ...\n\n    // express format\n    this.webRouterService.addRouter(async (req, res) => {\n      return 'hello world';\n    }, {\n      url: '/api/user',\n      requestMethod: 'GET',\n    });\n  }\n}\n")),(0,a.kt)("p",null,"The method of ",(0,a.kt)("inlineCode",{parentName:"p"},"addRouter"),", the first parameter is the route method body, and the second parameter is the metadata of the route."),(0,a.kt)("h3",{id:"dynamically-add-serverless-functions"},"Dynamically add Serverless functions"),(0,a.kt)("p",null,"Similar to adding dynamic Web routes, it is added using built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"MidwayServerlessFunctionService")," services."),(0,a.kt)("p",null,"For example, add an http function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { MidwayServerlessFunctionService, Configuration, Inject } from '@midwayjs/core';\n\n@Configuration({\n  // ...\n})\nexport class MainConfiguration {\n  @Inject()\n  serverlessFunctionService: MidwayServerlessFunctionService;\n\n  async onReady() {\n    this.serverlessFunctionService.addServerlessFunction(async (ctx, event) => {\n      return 'hello world';\n    }, {\n      type: ServerlessTriggerType.HTTP,\n      metadata: {\n        method: 'get',\n        path: '/api/hello'\n      },\n      functionName: 'hello',\n      handlerName: 'index.hello',\n    });\n  }\n}\n")),(0,a.kt)("p",null,"The information ",(0,a.kt)("inlineCode",{parentName:"p"},"metadata")," is the same as the parameters of the @ServerlessTrigger."))}c.isMDXComponent=!0}}]);