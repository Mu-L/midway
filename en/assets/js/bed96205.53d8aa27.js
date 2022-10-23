"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3016],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},o="Role authentication",s={unversionedId:"extensions/casbin",id:"extensions/casbin",title:"Role authentication",description:"Casbin is a powerful and efficient open source access control framework, and its rights management mechanism supports multiple access control models.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/casbin.md",sourceDirName:"extensions",slug:"/extensions/casbin",permalink:"/en/docs/extensions/casbin",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/casbin.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Authentication",permalink:"/en/docs/extensions/passport"},next:{title:"Static file hosting",permalink:"/en/docs/extensions/static_file"}},l={},p=[{value:"What is Casbin",id:"what-is-casbin",level:2},{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Prepare models and strategies",id:"prepare-models-and-strategies",level:2},{value:"Configure models and policies",id:"configure-models-and-policies",level:2},{value:"Authentication by decorator",id:"authentication-by-decorator",level:2},{value:"Define resources",id:"define-resources",level:3},{value:"Configure how to obtain users",id:"configure-how-to-obtain-users",level:3},{value:"Add guards",id:"add-guards",level:3},{value:"Define permissions",id:"define-permissions",level:3},{value:"API authentication",id:"api-authentication",level:2},{value:"Distributed policy storage",id:"distributed-policy-storage",level:2},{value:"Redis Adapter",id:"redis-adapter",level:3},{value:"TypeORM Adapter",id:"typeorm-adapter",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"role-authentication"},"Role authentication"),(0,r.kt)("p",null,"Casbin is a powerful and efficient open source access control framework, and its rights management mechanism supports multiple access control models."),(0,r.kt)("p",null,"Official website document: ",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"https://casbin.org/")),(0,r.kt)("h2",{id:"what-is-casbin"},"What is Casbin"),(0,r.kt)("p",null,"Casbin can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"supports custom request formats. the default request format is ",(0,r.kt)("inlineCode",{parentName:"li"},"{subject, object, action}"),"."),(0,r.kt)("li",{parentName:"ol"},"It has two core concepts: access control model model and policy policy."),(0,r.kt)("li",{parentName:"ol"},"Support multi-layer role inheritance in RBAC, not only the main body can have roles, resources can also have roles."),(0,r.kt)("li",{parentName:"ol"},"Supports built-in superusers such as ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"administrator"),". Super users can perform any operation without an explicit permission declaration."),(0,r.kt)("li",{parentName:"ol"},"Supports a variety of built-in operators, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"keyMatch"),", to facilitate the management of path-based resources, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo/bar"),", which can be mapped to ",(0,r.kt)("inlineCode",{parentName:"li"},"/foo *"))),(0,r.kt)("p",null,"Casbin cannot:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For authentication authentication (that is, to verify the user's user name and password),Casbin is only responsible for access control. There should be other specialized components responsible for identity authentication, and then Casbin will perform access control. The two are in a coordinated relationship."),(0,r.kt)("li",{parentName:"ol"},"Manage user lists or role lists.  Casbin believes that it is more appropriate to manage the list of users and roles by the project itself. Users usually have their passwords, but Casbin's design idea is not to use it as a container for storing passwords.  Instead, it stores the mapping relationship between users and roles in the RBAC scheme.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Available after Midway v3.6.0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Midway only encapsulates the Casbin API and provides simple support. For more information about how to write policy rules, see ",(0,r.kt)("a",{parentName:"li",href:"https://casbin.org/"},"Official documentation"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"Casbin does not provide login, but only provides authentication for existing users. It needs to be used with components such as passport to obtain user information."))))),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/casbin@3 --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/casbin": "^3.0.0",\n    // ...\n  },\n}\n')),(0,r.kt)("h2",{id:"enable-components"},"Enable components"),(0,r.kt)("p",null,"First, introduce components and import them in ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as casbin from '@midwayjs/casbin';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    casbin\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("h2",{id:"prepare-models-and-strategies"},"Prepare models and strategies"),(0,r.kt)("p",null,"Before using Casbin, you need to define the model and policy. The contents of these two files run through this article. It is recommended to go to the official website to learn about the relevant contents."),(0,r.kt)("p",null,"Let's take a basic model as an example, such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _,_\ng2 = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act || r.sub == "root"\n')),(0,r.kt)("p",null,"Save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"basic_model.conf")," file in the project root directory."),(0,r.kt)("p",null,"and a policy file containing the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"p, superuser, user, read:any\np, manager, user_roles, read:any\np, guest, user, read:own\n\ng, alice, superuser\ng, bob, guest\ng, tom, manager\n\ng, users_list, user\ng, user_roles, user\ng, user_permissions, user\ng, roles_list, role\ng, role_permissions, role\n")),(0,r.kt)("p",null,"Save it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"basic_policy.conf")," file in the project root directory."),(0,r.kt)("h2",{id:"configure-models-and-policies"},"Configure models and policies"),(0,r.kt)("p",null,"Here our strategy will be demonstrated in file form."),(0,r.kt)("p",null,"The configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayAppInfo } from '@midwayjs/core';\nimport { join } from 'path';\n\nexport default (appInfo: MidwayAppInfo) => {\n  return {\n    // ...\n    casbin: {\n      modelPath: join(appInfo.appDir, 'basic_model.conf')\n      policyAdapter: join(appInfo.appDir, 'basic_policy.csv')\n    }\n  };\n}\n\n")),(0,r.kt)("h2",{id:"authentication-by-decorator"},"Authentication by decorator"),(0,r.kt)("p",null,"There are many forms to use Casbin, here with a decorator as an example."),(0,r.kt)("h3",{id:"define-resources"},"Define resources"),(0,r.kt)("p",null,"First, define resources, for example, put them in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/resource.ts")," file, corresponding to the resources in the policy file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export enum Resource {\n  USERS_LIST = 'users_list',\n  USER_ROLES = 'user_roles',\n  USER_PERMISSIONS = 'user_permissions',\n  ROLES_LIST = 'roles_list',\n  ROLE_PERMISSIONS = 'role_permission',\n}\n")),(0,r.kt)("h3",{id:"configure-how-to-obtain-users"},"Configure how to obtain users"),(0,r.kt)("p",null,"When using decorator authentication, we need to configure a way to obtain users. For example, after passport components, we will obtain the user name from ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.user"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayAppInfo } from '@midwayjs/core';\nimport { join } from 'path';\n\nexport default (appInfo: MidwayAppInfo) => {\n  return {\n    // ...\n    casbin: {\n      modelPath: join(appInfo.appDir, 'basic_model.conf')\n      policyAdapter: join(appInfo.appDir, 'basic_policy.csv')\n      usernameFromContext: (ctx) => {\n        return ctx.user;\n      }\n    }\n  };\n}\n\n")),(0,r.kt)("h3",{id:"add-guards"},"Add guards"),(0,r.kt)("p",null,"Decorator authentication depends on guards, which can be turned on globally or on some routes. Please refer to the guard section for global guards."),(0,r.kt)("p",null,"For example, we only enable authentication on the following ",(0,r.kt)("inlineCode",{parentName:"p"},"findAllUsers")," methods, ",(0,r.kt)("inlineCode",{parentName:"p"},"AuthGuard")," the guards provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/casbin"),", which can be used directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, UseGuard } from '@midwayjs/decorator';\nimport { AuthGuard } from '@midwayjs/casbin';\nimport { Resource } from './resouce';\n\n@Controller('/')\nexport class HomeController {\n\n  @UseGuard(AuthGuard)\n  @Get('/users')\n  async findAllUsers() {\n    // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"define-permissions"},"Define permissions"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"UsePermission")," decorator to define the permissions required for routing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, UseGuard } from '@midwayjs/decorator';\nimport { AuthActionVerb, AuthGuard, AuthPossession, UsePermission } from '@midwayjs/casbin';\nimport { Resource } from './resouce';\n\n@Controller('/')\nexport class HomeController {\n\n  @UseGuard(AuthGuard)\n  @UsePermission({\n    action: AuthActionVerb.READ\n    resource: Resource.USER_ROLES\n    possession: AuthPossession.ANY\n  })\n  @Get('/users')\n  async findAllUsers() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"Users who do not have permission to read ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ROLES")," cannot call findAllUsers methods and will return 403 status codes when requesting."),(0,r.kt)("p",null,"For example, the above ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," user access will return 403, while the ",(0,r.kt)("inlineCode",{parentName:"p"},"tom")," user access will return normally."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UsePermission")," need to provide an object parameter, including ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"possession"),", and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"isOwn")," object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"action")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthActionVerb")," enumeration that includes read and write operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource")," resource string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"possession")," is a ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthPossession")," enumeration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IsOwn")," is a function that accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"Context")," (the parameter of the guard ",(0,r.kt)("inlineCode",{parentName:"li"},"canActivate"),") as a unique parameter and returns a boolean value.  ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthZGuard")," use it to determine whether the user is the owner of the resource.  If it is not defined, the default function that returns ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," is used.")),(0,r.kt)("p",null,"Multiple permissions can be defined at the same time, but the route can only be accessed if all permissions are satisfied."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@UsePermissions({\n  action: AuthActionVerb.READ\n  resource: 'USER_ADDRESS',\n  possession: AuthPossession.ANY\n}, {\n  action; AuthActionVerb.READ\n  resource: 'USER_ROLES\n  possession: AuthPossession.ANY\n})\n")),(0,r.kt)("p",null,"The route can only be accessed if the user is granted the read ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ADDRESS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ROLES")," permissions."),(0,r.kt)("h2",{id:"api-authentication"},"API authentication"),(0,r.kt)("p",null,"Casbin itself provides some common API and permission-related functions."),(0,r.kt)("p",null,"We can use it by injecting ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinEnforcerService")," services directly."),(0,r.kt)("p",null,"For example, we can code in guards or middleware."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CasbinEnforcerService } from '@midwayjs/casbin';\nimport { Guard, IGuard } from '@midwayjs/core';\n\n@Guard()\nexport class UserGuard extends IGuard {\n\n  @Inject()\n  casbinEnforcerService: CasbinEnforcerService;\n\n  async canActivate(ctx, clz, methodName) {\n    // If the user is logged in and is a specific method, check the permissions\n    if (ctx.user && methodName === 'findAllUsers') {\n      return await this.casbinEnforcerService.enforce(ctx.user, 'USER_ROLES', 'read');\n    }\n    // Unlogged users are not allowed to access\n    return false;\n  }\n}\n")),(0,r.kt)("p",null,"After the guard is enabled, the effect is the same as the decorator above."),(0,r.kt)("p",null,"In addition, ",(0,r.kt)("inlineCode",{parentName:"p"},"CasbinEnforcerService")," have more APIs, such as reloading policies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.casbinEnforcerService.loadPolicy();\n")),(0,r.kt)("h2",{id:"distributed-policy-storage"},"Distributed policy storage"),(0,r.kt)("p",null,"In scenarios where multiple machines are deployed, policies need to be stored externally."),(0,r.kt)("p",null,"Currently implemented adapters are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redis"),(0,r.kt)("li",{parentName:"ul"},"Typeorm")),(0,r.kt)("h3",{id:"redis-adapter"},"Redis Adapter"),(0,r.kt)("p",null,"You need to rely on the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/casbin-redis-adapter")," package and Redis components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i @midwayjs/casbin-redis-adapter @midwayjs/redis --save\n")),(0,r.kt)("p",null,"enable the redis component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as redis from '@midwayjs/redis';\nimport * as casbin from '@midwayjs/casbin';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    // ...\n    redis\n    casbin\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("p",null,"Configure the Redis connection and casbin adapter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayAppInfo } from '@midwayjs/core';\nimport { join } from 'path';\nimport { createAdapter } from '@midwayjs/casbin-redis-adapter';\n\nexport default (appInfo: MidwayAppInfo) => {\n  return {\n    // ...\n    redis: {\n      clients: {\n        // Defines a connection for casbin\n        node-casbin-official ': {\n          host: '127.0.0.1',\n          port: 6379\n          password: '',\n          db: '0',\n        }\n      }\n    },\n    casbin: {\n      policyAdapter: createAdapter({\n        // The connection name above is configured\n        clientName: 'node-casbin-official'\n      }),\n      // ...\n    },\n  };\n}\n\n")),(0,r.kt)("h3",{id:"typeorm-adapter"},"TypeORM Adapter"),(0,r.kt)("p",null,"You need to rely on ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/casbin-typeorm-adapter")," packages and typeorm components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm i @midwayjs/casbin-typeorm-adapter @midwayjs/typeorm --save\n")),(0,r.kt)("p",null,"Enable typeorm components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as typeorm from '@midwayjs/typeorm';\nimport * as casbin from '@midwayjs/casbin';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    // ...\n    typeorm\n    casbin\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,r.kt)("p",null,"Configure the adapter. Take sqlite storage as an example. You can view the typeorm components for mysql configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayAppInfo } from '@midwayjs/core';\nimport { join } from 'path';\nimport { CasbinRule, createAdapter } from '@midwayjs/casbin-typeorm-adapter';\n\nexport default (appInfo: MidwayAppInfo) => {\n  return {\n    // ...\n    typeorm: {\n      dataSource: {\n        // Defines a connection for casbin\n        node-casbin-official ': {\n          type: 'sqlite',\n          synchronize: true\n          database: join(appInfo.appDir, 'casbin.sqlite')\n          // Note that Entity is explicitly introduced here.\n          entities: [CasbinRule]\n        }\n      }\n    },\n    casbin: {\n      policyAdapter: createAdapter({\n        // The connection name above is configured\n        dataSourceName: 'node-casbin-official'\n      }),\n      // ...\n    }\n  };\n}\n")))}d.isMDXComponent=!0}}]);