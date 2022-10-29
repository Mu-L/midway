"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,f=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const l={},r="\u6587\u4ef6\u4e0a\u4f20",p={unversionedId:"extensions/upload",id:"extensions/upload",title:"\u6587\u4ef6\u4e0a\u4f20",description:"\u9002\u7528\u4e8e @midwayjs/faas \u3001@midwayjs/web \u3001@midwayjs/koa \u548c @midwayjs/express \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 file (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6)\u3001stream \uff08\u6d41\uff09\u591a\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/extensions/upload.md",sourceDirName:"extensions",slug:"/extensions/upload",permalink:"/docs/extensions/upload",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/upload.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/docs/extensions/render"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/extensions/passport"}},o={},m=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:2},{value:"\u4e0a\u4f20\u6a21\u5f0f - file",id:"\u4e0a\u4f20\u6a21\u5f0f---file",level:2},{value:"\u4e0a\u4f20\u6a21\u5f0f - stream",id:"\u4e0a\u4f20\u6a21\u5f0f---stream",level:2},{value:"\u914d\u7f6e\u4e0a\u4f20\u767d\u540d\u5355",id:"\u914d\u7f6e\u4e0a\u4f20\u767d\u540d\u5355",level:2},{value:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406",level:2},{value:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b",id:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b",level:2},{value:"1. html form \u7684\u5f62\u5f0f",id:"1-html-form-\u7684\u5f62\u5f0f",level:3},{value:"2. fetch FormData \u65b9\u5f0f",id:"2-fetch-formdata-\u65b9\u5f0f",level:3},{value:"Postman \u6d4b\u8bd5\u793a\u4f8b",id:"postman-\u6d4b\u8bd5\u793a\u4f8b",level:2}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,i.kt)("p",null,"\u9002\u7528\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u4e0a\u4f20\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," (\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6)\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \uff08\u6d41\uff09\u591a\u79cd\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"web \u652f\u6301\u60c5\u51b5"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/koa"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/faas"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/web"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"@midwayjs/express"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("p",null,"1\u3001\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/upload@3 --save\n")),(0,i.kt)("p",null,"\u6216\u8005\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/upload": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,i.kt)("p",null,"2\u3001\u5728 configuration \u6587\u4ef6\u4e2d\u5f15\u5165\u7ec4\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as upload from '@midwayjs/upload';\n\n@Configuration({\n  imports: [\n    // ...other components\n    upload\n  ],\n  // ...\n})\nexport class MainConfiguration {}\n")),(0,i.kt)("p",null,"3\u3001\u5728\u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Inject, Post, Files, Fields } from '@midwayjs/decorator';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx;\n\n  @Post('/upload')\n  async upload(@Files() files, @Fields() fields) {\n    /*\n    files = [\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: '/var/tmp/xxx.pdf',    // mode \u4e3a file \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test1',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      {\n        filename: 'test.pdf',        // \u6587\u4ef6\u539f\u540d\n        data: ReadStream,    // mode \u4e3a stream \u65f6\u4e3a\u670d\u52a1\u5668\u4e34\u65f6\u6587\u4ef6\u5730\u5740\n        fieldname: 'test2',          // \u8868\u5355 field \u540d\n        mimeType: 'application/pdf', // mime\n      },\n      // ...file \u4e0b\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\n    ]\n\n    */\n    return {\n      files,\n      fields\n    }\n  }\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u540c\u65f6\u5f00\u542f\u4e86 swagger \u7ec4\u4ef6\uff0c\u8bf7\u52a1\u5fc5\u6dfb\u52a0\u4e0a\u4f20\u53c2\u6570\u7684\u7c7b\u578b\uff08\u88c5\u9970\u5668\u5bf9\u5e94\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca @ApiBody \u4e2d\u7684 type\uff09\uff0c\u5426\u5219\u4f1a\u62a5\u9519\uff0c\u66f4\u591a\u8bf7\u53c2\u8003 swagger \u7684\u6587\u4ef6\u4e0a\u4f20\u7ae0\u8282\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nimport { uploadWhiteList } from '@midwayjs/upload';\nimport { tmpdir } from 'os';\nimport { join } from 'path';\n\nexport default {\n  // ...\n  upload: {\n    // mode: UploadMode, \u9ed8\u8ba4\u4e3afile\uff0c\u5373\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e34\u65f6\u76ee\u5f55\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e3a stream\n    mode: 'file',\n    // fileSize: string, \u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a 10mb\n    fileSize: '10mb',\n    // whitelist: string[]\uff0c\u6587\u4ef6\u6269\u5c55\u540d\u767d\u540d\u5355\n    whitelist: uploadWhiteList.filter(ext => ext !== '.pdf'),\n    // tmpdir: string\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u4e34\u65f6\u5b58\u50a8\u8def\u5f84\n    tmpdir: join(tmpdir(), 'midway-upload-files'),\n    // cleanTimeout: number\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u4e34\u65f6\u76ee\u5f55\u4e2d\u591a\u4e45\u4e4b\u540e\u81ea\u52a8\u5220\u9664\uff0c\u9ed8\u8ba4\u4e3a 5 \u5206\u949f\n    cleanTimeout: 5 * 60 * 1000,\n    // base64: boolean\uff0c\u8bbe\u7f6e\u539f\u59cbbody\u662f\u5426\u662fbase64\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3afalse\uff0c\u4e00\u822c\u7528\u4e8e\u817e\u8baf\u4e91\u7684\u517c\u5bb9\n    base64: false,\n  },\n}\n\n")),(0,i.kt)("h2",{id:"\u4e0a\u4f20\u6a21\u5f0f---file"},"\u4e0a\u4f20\u6a21\u5f0f - file"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u4e3a\u9ed8\u8ba4\u503c\uff0c\u4e5f\u662f\u6846\u67b6\u7684\u63a8\u8350\u503c\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadMode.File")," \u6765\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a\u4e0a\u4f20\u7684\u6587\u4ef6\u5728\u670d\u52a1\u5668\u7684\u4e34\u65f6\u6587\u4ef6\u5730\u5740\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.createReadStream")," \u7b49\u65b9\u5f0f\u6765\u83b7\u53d6\u5230\u6b64\u6587\u4ef6\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 file \u6a21\u5f0f\u65f6\uff0c\u652f\u6301\u540c\u65f6\u4e0a\u4f20\u591a\u4e2a\u6587\u4ef6\uff0c\u591a\u4e2a\u6587\u4ef6\u4f1a\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5b58\u653e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u3002"),(0,i.kt)("h2",{id:"\u4e0a\u4f20\u6a21\u5f0f---stream"},"\u4e0a\u4f20\u6a21\u5f0f - stream"),(0,i.kt)("p",null,"\u914d\u7f6e upload \u7684 mode \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"stream")," \u5b57\u7b26\u4e32\uff0c\u6216\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UploadMode.Stream")," \u6765\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u4e2d\u83b7\u53d6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadStream"),"\uff0c\u540e\u7eed\u53ef\u4ee5\u518d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"pipe")," \u7b49\u65b9\u5f0f\u7ee7\u7eed\u5c06\u6570\u636e\u6d41\u8f6c\u81f3\u5176\u4ed6 ",(0,i.kt)("inlineCode",{parentName:"p"},"WriteStream")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformStream"),"\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 stream \u6a21\u5f0f\u65f6\uff0c\u4ec5\u540c\u65f6\u4e0a\u4f20\u4e00\u4e2a\u6587\u4ef6\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},"this.ctx.files")," \u6570\u7ec4\u4e2d\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u6570\u636e\u5bf9\u8c61\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u4e0a\u4f20\u767d\u540d\u5355"},"\u914d\u7f6e\u4e0a\u4f20\u767d\u540d\u5355"),(0,i.kt)("p",null,"\u914d\u7f6e\u5141\u8bb8\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u540d\uff0c\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u5219\u4e0d\u6821\u9a8c\u540e\u7f00\u540d\uff0c\u5982\u679c\u4e0a\u4f20\u7684\u6587\u4ef6\u540e\u7f00\u4e0d\u5339\u914d\uff0c\u4f1a\u54cd\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"400")," error\uff0c\u9ed8\u8ba4\u503c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"'.jpg',\n'.jpeg',\n'.png',\n'.gif',\n'.bmp',\n'.wbmp',\n'.webp',\n'.tif',\n'.psd',\n'.svg',\n'.js',\n'.jsx',\n'.json',\n'.css',\n'.less',\n'.html',\n'.htm',\n'.xml',\n'.pdf',\n'.zip',\n'.gz',\n'.tgz',\n'.gzip',\n'.mp3',\n'.mp4',\n'.avi',\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/upload")," \u5305\u4e2d\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadWhiteList")," \u83b7\u53d6\u5230\u9ed8\u8ba4\u7684\u540e\u7f00\u540d\u767d\u540d\u5355\u3002"),(0,i.kt)("h2",{id:"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"},"\u4e34\u65f6\u6587\u4ef6\u4e0e\u6e05\u7406"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," \u6a21\u5f0f\u6765\u83b7\u53d6\u4e0a\u4f20\u7684\u6587\u4ef6\uff0c\u90a3\u4e48\u4e0a\u4f20\u7684\u6587\u4ef6\u4f1a\u5b58\u653e\u5728\u60a8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," \u7ec4\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"tmpdir")," \u9009\u9879\u6307\u5411\u7684\u6587\u4ef6\u5939\u5185\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanTimeout")," \u6765\u63a7\u5236\u81ea\u52a8\u7684\u4e34\u65f6\u6587\u4ef6\u6e05\u7406\u65f6\u95f4\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"5 * 60 * 1000"),"\uff0c\u5373\u4e0a\u4f20\u7684\u6587\u4ef6\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"5 \u5206\u949f")," \u540e\u81ea\u52a8\u6e05\u7406\uff0c\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u5219\u89c6\u4e3a\u4e0d\u5f00\u542f\u81ea\u52a8\u6e05\u7406\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"await ctx.cleanupRequestFiles()")," \u6765\u4e3b\u52a8\u6e05\u7406\u5f53\u524d\u8bf7\u6c42\u4e0a\u4f20\u7684\u4e34\u65f6\u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b"},"\u524d\u7aef\u6587\u4ef6\u4e0a\u4f20\u793a\u4f8b"),(0,i.kt)("h3",{id:"1-html-form-\u7684\u5f62\u5f0f"},"1. html form \u7684\u5f62\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/api/upload" method="post" enctype="multipart/form-data">\n  Name: <input type="text" name="name" /><br />\n  File: <input type="file" name="testFile" /><br />\n  <input type="submit" value="Submit" />\n</form>\n')),(0,i.kt)("h3",{id:"2-fetch-formdata-\u65b9\u5f0f"},"2. fetch FormData \u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fileInput = document.querySelector('#your-file-input') ;\nconst formData = new FormData();\nformData.append('file', fileInput.files[0]);\n\nfetch('/api/upload', {\n  method: 'POST',\n  body: formData,\n});\n")),(0,i.kt)("h2",{id:"postman-\u6d4b\u8bd5\u793a\u4f8b"},"Postman \u6d4b\u8bd5\u793a\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01iv9ESW1uIShNiRjBF_!!6000000006014-2-tps-2086-1746.png",alt:null})))}s.isMDXComponent=!0}}]);