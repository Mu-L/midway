"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13182],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={},l="\u6a21\u677f\u6e32\u67d3",o={unversionedId:"extensions/render",id:"extensions/render",title:"\u6a21\u677f\u6e32\u67d3",description:"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5728 midway \u4f53\u7cfb\u4f7f\u7528\u670d\u52a1\u7aef\u6e32\u67d3 ejs\uff0cnunjucks \u6a21\u677f\u3002",source:"@site/docs/extensions/render.md",sourceDirName:"extensions",slug:"/extensions/render",permalink:"/docs/extensions/render",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/render.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u5b89\u5168",permalink:"/docs/extensions/security"},next:{title:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/extensions/upload"}},p={},s=[{value:"\u4f7f\u7528 ejs",id:"\u4f7f\u7528-ejs",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u914d\u7f6e\u540e\u7f00",id:"\u914d\u7f6e\u540e\u7f00",level:3},{value:"\u9ed8\u8ba4\u6e32\u67d3\u5f15\u64ce",id:"\u9ed8\u8ba4\u6e32\u67d3\u5f15\u64ce",level:3},{value:"\u914d\u7f6e\u591a\u4e2a\u6a21\u677f\u76ee\u5f55",id:"\u914d\u7f6e\u591a\u4e2a\u6a21\u677f\u76ee\u5f55",level:3},{value:"\u4f7f\u7528 Nunjucks",id:"\u4f7f\u7528-nunjucks",level:2},{value:"\u81ea\u5b9a\u4e49\u6a21\u677f\u5f15\u64ce",id:"\u81ea\u5b9a\u4e49\u6a21\u677f\u5f15\u64ce",level:2},{value:"\u5b9e\u73b0\u6a21\u677f\u5f15\u64ce",id:"\u5b9e\u73b0\u6a21\u677f\u5f15\u64ce",level:3},{value:"\u6ce8\u518c\u6a21\u677f\u5f15\u64ce",id:"\u6ce8\u518c\u6a21\u677f\u5f15\u64ce",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6a21\u677f\u6e32\u67d3"},"\u6a21\u677f\u6e32\u67d3"),(0,a.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5728 midway \u4f53\u7cfb\u4f7f\u7528\u670d\u52a1\u7aef\u6e32\u67d3 ejs\uff0cnunjucks \u6a21\u677f\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,a.kt)("h2",{id:"\u4f7f\u7528-ejs"},"\u4f7f\u7528 ejs"),(0,a.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,a.kt)("p",null,"\u9009\u62e9\u5bf9\u5e94\u7684\u6a21\u677f\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/view-ejs@3 --save\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/view-ejs": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,a.kt)("h3",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165\u7ec4\u4ef6\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as view from '@midwayjs/view-ejs';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    view        // \u5bfc\u5165 ejs \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u914d\u7f6e\u540e\u7f00\uff0c\u6620\u5c04\u5230\u6307\u5b9a\u7684\u5f15\u64ce\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  view: {\n    mapping: {\n      '.ejs': 'ejs',\n    },\n  },\n  // ejs config\n  ejs: {}\n}\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u9ed8\u8ba4\u7684 view \u76ee\u5f55\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"${appDir}/view")," \uff0c\u5728\u5176\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.ejs")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 controller                 ## Controller \u76ee\u5f55\n\u2502       \u2514\u2500\u2500 home.ts\n\u251c\u2500\u2500 view                           ## \u6a21\u677f\u76ee\u5f55\n\u2502   \u2514\u2500\u2500 hello.ejs\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u6a21\u677f\u91cc\u5199\u4e00\u4e9b ejs \u683c\u5f0f\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// view/hello.ejs\nhello <%= data %>\n")),(0,a.kt)("p",null,"\u5728 Controller \u4e2d\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async render(){\n    await this.ctx.render('hello.ejs', {\n      data: 'world',\n    });\n  }\n}\n")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u540e\u7f00"},"\u914d\u7f6e\u540e\u7f00"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u540e\u7f00\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," \uff0c\u4e3a\u4e86\u6539\u6210\u4e60\u60ef\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".ejs")," \u540e\u7f00\uff0c\u6211\u4eec\u53ef\u4ee5\u52a0\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultExtension")," \u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  view: {\n    defaultExtension: '.ejs',\n    mapping: {\n      '.ejs': 'ejs',\n    },\n  },\n  // ejs config\n  ejs: {}\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5728\u6e32\u67d3\u65f6\u4e0d\u9700\u8981\u589e\u52a0\u540e\u7f00\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async render(){\n    await this.ctx.render('hello', {\n      data: 'world',\n    });\n  }\n}\n")),(0,a.kt)("h3",{id:"\u9ed8\u8ba4\u6e32\u67d3\u5f15\u64ce"},"\u9ed8\u8ba4\u6e32\u67d3\u5f15\u64ce"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultViewEngine")," \u6765\u8bbe\u7f6e\u9ed8\u8ba4\u7684\u6e32\u67d3\u5f15\u64ce\u3002"),(0,a.kt)("p",null,"\u5176\u4f5c\u7528\u662f\uff0c\u5f53\u9047\u5230\u7684\u6a21\u677f\u540e\u7f00\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," \u672a\u5728\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mapping")," \u5b57\u6bb5\u4e2d\u627e\u5230\u65f6\uff0c\u4f7f\u7528\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultViewEngine")," \u5b57\u6bb5\u6307\u5b9a\u7684\u5f15\u64ce\u6765\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  view: {\n    defaultViewEngine: 'ejs',\n    mapping: {\n      '.ejs': 'ejs',\n    },\n  },\n  // ejs config\n  ejs: {}\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u5982\u679c\u6a21\u677f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," \u540e\u7f00\uff0c\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"mapping")," \u4e2d\u672a\u6307\u5b9a\uff0c\u4f9d\u65e7\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ejs")," \u6765\u6e32\u67d3\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u591a\u4e2a\u6a21\u677f\u76ee\u5f55"},"\u914d\u7f6e\u591a\u4e2a\u6a21\u677f\u76ee\u5f55"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5c06\u4ee3\u7801\u5c01\u88c5\u4e3a\u7ec4\u4ef6\u63d0\u4f9b\uff0c\u5c31\u9700\u8981\u652f\u6301\u4e0d\u540c\u7684\u6a21\u677f\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684\u6a21\u677f\u76ee\u5f55\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"${appDir}/view"),"\u3002\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rootDir")," \u5b57\u6bb5\u589e\u52a0\u5176\u4ed6\u7684\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\n// \u4fee\u6539\u9ed8\u8ba4 view \u7ec4\u4ef6\u7684 default \u76ee\u5f55\nexport default {\n  // ...\n  view: {\n    rootDir: {\n      default: path.join(__dirname, './view'),\n    }\n  },\n}\n\n// \u5176\u4ed6\u7ec4\u4ef6\u9700\u8981\u589e\u52a0\u76ee\u5f55\u7684\u914d\u7f6e\nexport default {\n  // ...\n  // view \u7ec4\u4ef6\u7684\u914d\u7f6e\n  view: {\n    rootDir: {\n      anotherRoot: path.join(__dirname, './view'),\n    }\n  },\n}\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u5bf9\u8c61\u5408\u5e76\u7684\u673a\u5236\uff0c\u4f7f\u5f97\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"rootDir")," \u90fd\u80fd\u5408\u5e76\u5230\u4e00\u8d77\uff0c\u7ec4\u4ef6\u5185\u90e8\u4f1a\u83b7\u53d6 values \u505a\u5339\u914d\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-nunjucks"},"\u4f7f\u7528 Nunjucks"),(0,a.kt)("p",null,"\u548c ejs \u7c7b\u4f3c\uff0c\u5f15\u5165\u5bf9\u5e94\u7ec4\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"1\u3001\u9009\u62e9\u5bf9\u5e94\u7684\u6a21\u677f\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/view-nunjucks@3 --save\n")),(0,a.kt)("p",null,"\u6216\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/view-nunjucks": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,a.kt)("p",null,"2\u3001\u5f15\u5165\u7ec4\u4ef6\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as view from '@midwayjs/view-nunjucks';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    view        // \u5bfc\u5165 nunjucks \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,a.kt)("p",null,"3\u3001\u589e\u52a0 nunjucks \u7684\u914d\u7f6e\uff0c\u6bd4\u5982\u9ed8\u8ba4\u4f7f\u7528 nunjucks\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  view: {\n    defaultViewEngine: 'nunjucks',\n    mapping: {\n      '.nj': 'nunjucks',\n    },\n  },\n}\n")),(0,a.kt)("p",null,"4\u3001\u5728 view \u76ee\u5f55\u589e\u52a0\u6a21\u677f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// view/test.nj\nhi, {{ user }}\n")),(0,a.kt)("p",null,"\u5728 Controller \u4e2d\u6e32\u67d3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async render(){\n    await ctx.render('test.nj', { user: 'midway' });\n  }\n}\n")),(0,a.kt)("p",null,"\u8bbf\u95ee\u540e\u4f1a\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"hi, midway")," \u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u81ea\u5b9a\u4e49 filter \u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u5728\u5165\u53e3\u5904\u589e\u52a0\uff0c\u6bd4\u5982\u4e0b\u9762\u589e\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"hello")," \u7684 filter\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Configuration, Inject } from '@midwayjs/core';\nimport * as view from '@midwayjs/view-nunjucks';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [view],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class MainConfiguration {\n\n  @App()\n  app;\n\n  @Inject()\n  env: view.NunjucksEnvironment;\n\n  async onReady(){\n    this.env.addFilter('hello', (str) => {\n      return 'hi, ' + str;\n    });\n  }\n}\n\n")),(0,a.kt)("p",null,"\u5728\u6a21\u677f\u91cc\u53ef\u4ee5\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"{{ name | hello }}\n")),(0,a.kt)("p",null,"\u7136\u540e\u6e32\u67d3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// controller\n// ...\nawait ctx.render('test.nj', { name: 'midway' });\n")),(0,a.kt)("p",null,"\u4e5f\u4f1a\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"hi, midway")," \u3002"),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6a21\u677f\u5f15\u64ce"},"\u81ea\u5b9a\u4e49\u6a21\u677f\u5f15\u64ce"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u6211\u4eec\u53ea\u63d0\u4f9b\u4e86 ejs \u548c nunjucks \u7684\u6a21\u677f\u5f15\u64ce\uff0c\u4f60\u4e5f\u53ef\u4ee5\u7f16\u5199\u81ea\u5df1\u7684\u6a21\u677f\u5f15\u64ce\u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u6a21\u677f\u5f15\u64ce"},"\u5b9e\u73b0\u6a21\u677f\u5f15\u64ce"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u8bf7\u6c42\u4f5c\u7528\u57df\u7684\u6a21\u677f\u5f15\u64ce\u7c7b\uff0c\u5b83\u5c06\u5728\u6bcf\u4e2a\u8bf7\u6c42\u6267\u884c\u65f6\u521d\u59cb\u5316\u3002\u4f60\u9700\u9700\u8981\u5b9e\u73b0\u5176\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"renderString")," \u65b9\u6cd5\u3002\u5982\u679c\u4f60\u7684\u6a21\u677f\u5f15\u64ce\u4e0d\u652f\u6301\u67d0\u4e2a\u65b9\u6cd5\uff0c\u53ef\u4ee5\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// lib/view.ts\nimport { Provide, Config } from '@midwayjs/core';\nimport { IViewEngine } from '@midwayjs/view';\n\n@Provide()\nexport class MyView implements IViewEngine {\n\n  @Config('xxxx')\n  viewConfig;\n\n  async render(name: string, locals?: Record<string, any>, options?: RenderOptions) {\n    return myengine.render(name, locals, options);\n  }\n\n  async renderString(tpl: string,\n    locals?: Record<string, any>,\n    options?: RenderOptions) {\n\n    throw new Error('not implement');\n  }\n};\n")),(0,a.kt)("p",null,"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u63a5\u53d7\u7c7b\u4f3c\u7684\u4e09\u4e2a\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"renderString")," \u7b2c\u4e00\u4e2a\u53c2\u6570\u9700\u8981\u4f20\u5165\u5f85\u89e3\u6790\u7684\u6a21\u677f\u5185\u5bb9\u672c\u8eab\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," \u65b9\u6cd5\u4f1a\u89e3\u6790\u6a21\u677f\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"render(name, locals, viewOptions)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: \u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"root"),"\uff08\u9ed8\u8ba4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"/view")," ) \u76f8\u5bf9\u7684 path"),(0,a.kt)("li",{parentName:"ul"},"locals: \u6a21\u677f\u9700\u8981\u7684\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"viewOptions: \u6bcf\u6b21\u6e32\u67d3\u7684\u6a21\u677f\u53c2\u6570\uff0c\u53ef\u8986\u76d6\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u91cd\u5199\uff0c\u5176\u4e2d\u5305\u542b\u51e0\u4e2a\u53c2\u6570\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"root: \u6a21\u677f\u7684\u7edd\u5bf9\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},"name: \u8c03\u7528 render \u65b9\u6cd5\u7684\u539f\u59cb name \u503c"),(0,a.kt)("li",{parentName:"ul"},"locals: \u8c03\u7528 render \u65b9\u6cd5\u7684\u539f\u59cb locals \u503c")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"renderString(tpl, locals, viewOptions)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tpl: \u6a21\u677f\u540d"),(0,a.kt)("li",{parentName:"ul"},"locals: \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," \u4e00\u6837"),(0,a.kt)("li",{parentName:"ul"},"viewOptions: \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"render")," \u4e00\u6837")),(0,a.kt)("h3",{id:"\u6ce8\u518c\u6a21\u677f\u5f15\u64ce"},"\u6ce8\u518c\u6a21\u677f\u5f15\u64ce"),(0,a.kt)("p",null,"\u5728\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u6a21\u677f\u5f15\u64ce\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u542f\u52a8\u5165\u53e3\u6ce8\u518c\u5b83\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager")," \uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\u6ce8\u518c\u81ea\u5b9a\u4e49\u6a21\u677f\u5f15\u64ce\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, Inject, Provide } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as view from '@midwayjs/view';\nimport { MyView } from './lib/my';\n\n@Configuration({\n  imports: [koa, view],\n  importConfigs: [join(__dirname, 'config')]\n})\nexport class AutoConfiguration {\n\n  @Inject()\n  viewManager: view.ViewManager;\n\n  async onReady(){\n    this.viewManager.use('ejs', MyView);\n  }\n}\n\n")),(0,a.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u5982\u9700\u5728 egg(@midwayjs/web) \u573a\u666f\u4e0b\u4f7f\u7528\uff0c\u8bf7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.ts")," \u4e2d\u5173\u95ed view \u548c\u5176\u76f8\u5173\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { EggPlugin } from 'egg';\nexport default {\n  // ...\n  view: false,\n} as EggPlugin;\n\n")),(0,a.kt)("p",null,"\u5426\u5219\u4f1a\u51fa\u73b0\u4e0b\u9762\u7c7b\u4f3c\u7684\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TypeError: Cannot set property view of #<EggApplication> which has only a getter\n")))}d.isMDXComponent=!0}}]);