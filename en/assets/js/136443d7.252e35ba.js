"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Aggregate deployment",l={unversionedId:"serverless/serverless_aggr",id:"serverless/serverless_aggr",title:"Aggregate deployment",description:"Midway provides an aggregate deployment method for HTTP scenarios. Similar to traditional Web applications, Midway deploys multiple routes in the same function container during deployment, which can save cold start time and cost.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_aggr.md",sourceDirName:"serverless",slug:"/serverless/serverless_aggr",permalink:"/en/docs/serverless/serverless_aggr",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_aggr.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Create code",id:"create-code",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Function file",id:"function-file",level:2},{value:"Function definition file",id:"function-definition-file",level:2},{value:"Local development",id:"local-development",level:2},{value:"Local test",id:"local-test",level:2},{value:"The difference with pure functions",id:"the-difference-with-pure-functions",level:2},{value:"Function name rule",id:"function-name-rule",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aggregate-deployment"},"Aggregate deployment"),(0,a.kt)("p",null,"Midway provides an aggregate deployment method for HTTP scenarios. Similar to traditional Web applications, Midway deploys multiple routes in the same function container during deployment, which can save cold start time and cost."),(0,a.kt)("p",null,"Aggregation deployment mode is particularly suitable for traditional mid-background services."),(0,a.kt)("h2",{id:"create-code"},"Create code"),(0,a.kt)("p",null,"Create a code example of an aggregate deployment."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We have not yet prepared the aggregated deployment solution for v3.")),(0,a.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,a.kt)("p",null,"The following is the most concise structure of a function, the core will include a ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," standardized function file, and the project structure of TypeScript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 f.yml           # standardized spec file\n\u251c\u2500\u2500 package.json    # Project Dependency\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 index.ts    # Function entry\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Let's take a brief look at the contents of the document."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"f.yml")," function definition file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," tsc configuration file (no IDE will report an error)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src")," function source directory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src/index.ts")," sample function file")),(0,a.kt)("h2",{id:"function-file"},"Function file"),(0,a.kt)("p",null,"Let's first take a look at the function file. The traditional function is a ",(0,a.kt)("inlineCode",{parentName:"p"},"function"),". In order to be more in line with the midway system and use our dependency injection, here it is turned into a Class."),(0,a.kt)("p",null,"Like traditional applications, we still use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," decorator to develop aggregated HTTP functions."),(0,a.kt)("p",null,"The following code exposes three routes. In aggregate deployment mode, only one HTTP function is deployed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide, Controller, Get, Post } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\n@Controller('/')\nexport class APIService {\n  @Inject()\n  ctx: Context;\n\n  @Get('/')\n  async hello() {\n    return 'Hello Midwayjs';\n  }\n\n  @Get('/get')\n  async get() {\n    return this.ctx.query;\n  }\n\n  @Post('/post')\n  async post() {\n    return this.ctx.method;\n  }\n}\n")),(0,a.kt)("h2",{id:"function-definition-file"},"Function definition file"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," is the definition file of the function. Through this file, files that can be recognized by different platforms are generated during construction. The contents of the files in the example are as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples ## The function group name, which can be understood as the application name\n\nprovider:\n  name: aliyun ## Released platform, here is Alibaba Cloud\n\naggregation: ## Use Aggregate Mode Deployment for HTTP Functions\n  all: ## deployed function name\n    functionsPattern: ## matching function rules\n      - '*'\n")),(0,a.kt)("h2",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"The local development of HTTP functions is the same as that of traditional Web. Enter the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,a.kt)("p",null,"Midway will start the HTTP server, open the browser, access ",(0,a.kt)("inlineCode",{parentName:"p"},"[http://127.0.0.1:7001](http://127.0.0.1:7001)"),", and the browser will print the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello midwayjs")," information."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1615045887650-73a90be7-1d49-4024-82c4-fd6b5192e75e.png#height=384&id=JCH29&margin=%5Bobject%20Object%5D&name=image.png&originHeight=768&originWidth=1268&originalType=binary&ratio=1&size=85174&status=done&style=none&width=634",width:"634"}),(0,a.kt)("h2",{id:"local-test"},"Local test"),(0,a.kt)("p",null,"Use the same test method as the application to test. For HTTP functions, use the supertest encapsulated ",(0,a.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," method to create HTTP clients."),(0,a.kt)("p",null,"The only difference from the application is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," method is used to create a function application (app)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," method is the customization of the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," method in the function scenario (which specifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," framework of the function)."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Instead of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," framework directly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," framework is used because the latter contains a series of steps from gateway simulation to function call.")),(0,a.kt)("p",null,"The HTTP test code is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework } from '@midwayjs/serverless-app';\nimport * as assert from 'assert';\n\ndescribe('test/index.test.ts', () => {\n  it('should get /', async () => {\n    // create app\n    const app = await createFunctionApp<Framework>();\n\n    // make request\n    const result = await createHttpRequest(app).get('/');\n\n    // use expect by jest\n    expect(result.status).toBe(200);\n    expect(result.text).toBe('Hello Midwayjs');\n\n    const result2 = await createHttpRequest(app).get('/get').query({ name: 123 });\n    // or use assert\n    assert.deepStrictEqual(result2.status, 200);\n    assert.deepStrictEqual(result2.body.name, '123');\n\n    // close app\n    await close(app);\n  });\n});\n")),(0,a.kt)("h2",{id:"the-difference-with-pure-functions"},"The difference with pure functions"),(0,a.kt)("p",null,"A normal function registers a single function on a specific route. The traffic requested by the client will be sent to different function instances. The advantage is that the number of function instances corresponding to each interface may be different. If you call more interfaces, there will be more instances and fewer interfaces will be called."),(0,a.kt)("p",null,"The disadvantage is that if the number of calls is small, the cold start probability of the function will be large, and the calling time will be significantly larger. Since each function will have overhead, resources will not be reused, and the final charge will also increase."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618156727582-20f0df7c-9f91-430b-87a6-1796b1ee35e1.png#height=494&id=Rdl50&margin=%5Bobject%20Object%5D&name=image.png&originHeight=988&originWidth=1912&originalType=binary&ratio=1&size=85218&status=done&style=none&width=956",width:"956"}),(0,a.kt)("p",null,"In aggregate deployment, all routes are registered to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/*")," route and distributed by the route code in the framework. All functions share the same container. Any request keeps the container alive, thus greatly reducing the possibility of cold start. At the same time, because the code is multiplexed, the reuse rate of the container is greatly increased, which is more suitable for the scene where the request is balanced in the middle and background and the call amount of the interface is relatively balanced."),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1618156735858-4ddb1d49-357d-4cec-8201-b2e49bde4b5f.png#height=456&id=I9ZeD&margin=%5Bobject%20Object%5D&name=image.png&originHeight=912&originWidth=1770&originalType=binary&ratio=1&size=59657&status=done&style=none&width=885",width:"885"}),(0,a.kt)("h2",{id:"function-name-rule"},"Function name rule"),(0,a.kt)("p",null,"Using functions deployed in aggregate mode, we generally use ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," decorators or integrated methods for development, which is consistent with traditional Web development and testing."),(0,a.kt)("p",null,"When building, we will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"functions")," fields in ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml"),". Generally, users do not need to care about function names, interfaces and other information."),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"@Controller")," decorator, the generated function name rule is ",(0,a.kt)("inlineCode",{parentName:"p"},"providerId_methodName"),", that is, the combination of the key and method name that depend on the injection."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide('userService') // <--- takes this name, if not, the default is the hump form of the class name\n@Controller('/api')\nexport class UserService {\n  @Get('/get/:id')\n  async getUser(@Query() name) {}\n\n  @Post('/create')\n  async createUser(@Query() name) {}\n}\n")),(0,a.kt)("p",null,"When building, ",(0,a.kt)("inlineCode",{parentName:"p"},"userService_getUser")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"userService_createUser")," functions will be automatically generated and internal routing processing will be done."),(0,a.kt)("p",null,"The following is the generated YAML pseudo code (actually due to aggregate deployment, it becomes an internal route, and this code will not be created)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"functions:\n    userService_getUser:\n    events:\n        - http:\n          method: get\n          path: /get/[:id]\n  userService_createUser:\n    events:\n        - http:\n          method: post\n          path: /create\n")))}d.isMDXComponent=!0}}]);