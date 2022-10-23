"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[147],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={},o="Redis",s={unversionedId:"extensions/redis",id:"extensions/redis",title:"Redis",description:"Here is how to quickly use Redis in Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/redis.md",sourceDirName:"extensions",slug:"/extensions/redis",permalink:"/en/docs/extensions/redis",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/redis.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Sequelize",permalink:"/en/docs/extensions/sequelize"},next:{title:"MongoDB",permalink:"/en/docs/extensions/mongodb"}},l={},p=[{value:"Installation dependency",id:"installation-dependency",level:2},{value:"Introducing components",id:"introducing-components",level:2},{value:"Configure Redis",id:"configure-redis",level:2},{value:"Use Redis service",id:"use-redis-service",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis"},"Redis"),(0,i.kt)("p",null,"Here is how to quickly use Redis in Midway."),(0,i.kt)("p",null,"Related information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("h2",{id:"installation-dependency"},"Installation dependency"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/redis")," is the main function package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/redis@3 --save\n")),(0,i.kt)("p",null,"Or reinstall the following dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/redis": "^3.0.0",\n    // ...\n  }\n}\n')),(0,i.kt)("h2",{id:"introducing-components"},"Introducing components"),(0,i.kt)("p",null,"First, introduce components and import them in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as redis from '@midwayjs/redis';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    redis // import redis components\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,i.kt)("h2",{id:"configure-redis"},"Configure Redis"),(0,i.kt)("p",null,"For example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Single-client configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    client: {\n      port: 6379, // Redis port\n      host: "127.0.0.1", // Redis host\n      password: "auth ",\n      db: 0\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sentinel configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    client: {\n      sentinels: [{ // Sentinel instances\n        port: 26379, // Sentinel port\n        host: '127.0.0.1', // Sentinel host\n      }],\n      name: 'mymaster', // Master name\n      password: 'auth',\n      db: 0\n    },\n  },\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cluster mode configuration, you need to configure multiple")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    // Cluster Redis\n    client: {\n      cluster: true\n      nodes: [{\n        host: 'host',\n        port: 'port',\n      },{\n        host: 'host',\n        port: 'port',\n      }],\n      redisOptions: {\n        family: '',\n        password: 'xxxx',\n        db: 'xxx'\n      }\n    }\n  },\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configure multiple clients.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n        // Multi Redis\n    clients: {\n      instance1: {\n        host: 'host',\n        port: 'port',\n        password: 'password',\n        db: 'db',\n      },\n      instance2: {\n        host: 'host',\n        port: 'port',\n        password: 'password',\n        db: 'db',\n      },\n    },\n  },\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luin/ioredis/blob/master/API.md#new_Redis_new"},"ioredis document")," can be viewed for more parameters."),(0,i.kt)("h2",{id:"use-redis-service"},"Use Redis service"),(0,i.kt)("p",null,"We can inject it into any code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { RedisService } from '@midwayjs/redis';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisService: RedisService;\n\n  async invoke() {\n\n    // Simple setup\n    await this.redisService.set('foo', 'bar');\n\n    // Set the expiration time in seconds.\n    await this.redisService.set('foo', 'bar', 'EX', 10);\n\n    // get data\n    const result = await this.redisService.get('foo');\n\n   // result => bar\n  }\n}\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisServiceFactory")," to get different instances."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedisServiceFactory } from '@midwayjs/redis';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisServiceFactory: RedisServiceFactory;\n\n  async save() {\n    const redis1 = this.redisServiceFactory.get('instance1');\n    const redis2 = this.redisServiceFactory.get('instance3');\n\n    //...\n\n  }\n}\n")))}c.isMDXComponent=!0}}]);