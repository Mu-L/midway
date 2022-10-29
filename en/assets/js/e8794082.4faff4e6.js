"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96648],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=l,v=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(v,s(s({ref:n},c),{},{components:r})):t.createElement(v,s({ref:n},c))}));function d(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93632:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=r(87462),l=(r(67294),r(3905));const a={title:"\u90e8\u7f72\u73af\u5883"},s=void 0,o={unversionedId:"serverless/serverless_environment",id:"version-2.0.0/serverless/serverless_environment",title:"\u90e8\u7f72\u73af\u5883",description:"\u5728 Serverless \u573a\u666f\uff0c\u7531\u4e8e\u73af\u5883\u548c\u4f20\u7edf\u7684\u5bb9\u5668\u4e0d\u540c\uff08\u5e73\u53f0\u63d0\u4f9b\uff0c\u65e0\u6cd5\u4fee\u6539\uff09\uff0c\u6211\u4eec\u5728\u542f\u52a8\u65f6\uff0c\u4f7f\u7528\u4f20\u7edf\u7684\u547d\u4ee4\u900f\u4f20\u73af\u5883\u53d8\u91cf\uff0c\u51fd\u6570\u662f\u65e0\u6cd5\u6b63\u786e\u7684\u8bfb\u53d6\u5230\u7684\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/serverless_environment.md",sourceDirName:"serverless",slug:"/serverless/serverless_environment",permalink:"/en/docs/2.0.0/serverless/serverless_environment",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/serverless_environment.md",tags:[],version:"2.0.0",frontMatter:{title:"\u90e8\u7f72\u73af\u5883"},sidebar:"Serverless",previous:{title:"f.yml \u5b9a\u4e49",permalink:"/en/docs/2.0.0/serverless/serverless_yml"},next:{title:"\u9ed8\u8ba4\u9519\u8bef\u884c\u4e3a",permalink:"/en/docs/2.0.0/serverless/serverless_error"}},i={},p=[{value:"\u53d1\u5e03\u73af\u5883\u53d8\u91cf",id:"\u53d1\u5e03\u73af\u5883\u53d8\u91cf",level:2},{value:"YML \u53d8\u91cf\u586b\u5145",id:"yml-\u53d8\u91cf\u586b\u5145",level:2},{value:"\u9519\u8bef\u5806\u6808\u8f93\u51fa",id:"\u9519\u8bef\u5806\u6808\u8f93\u51fa",level:2},{value:"\u62f7\u8d1d\u989d\u5916\u8d44\u6e90",id:"\u62f7\u8d1d\u989d\u5916\u8d44\u6e90",level:2}],c={toc:p};function m(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728 Serverless \u573a\u666f\uff0c\u7531\u4e8e\u73af\u5883\u548c\u4f20\u7edf\u7684\u5bb9\u5668\u4e0d\u540c\uff08\u5e73\u53f0\u63d0\u4f9b\uff0c\u65e0\u6cd5\u4fee\u6539\uff09\uff0c\u6211\u4eec\u5728\u542f\u52a8\u65f6\uff0c\u4f7f\u7528\u4f20\u7edf\u7684\u547d\u4ee4\u900f\u4f20\u73af\u5883\u53d8\u91cf\uff0c\u51fd\u6570\u662f\u65e0\u6cd5\u6b63\u786e\u7684\u8bfb\u53d6\u5230\u7684\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u53ea\u80fd\u5bf9\u672c\u5730\u751f\u6548\uff0c\u65e0\u6cd5\u5bf9\u670d\u52a1\u5668\u751f\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV midway-bin deploy            // \u9519\u8bef\u5199\u6cd5\uff0c\u53ea\u5728\u672c\u5730\u751f\u6548\n")),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7279\u6b8a\u7684\u65b9\u5f0f\u6765\u8ba9\u51fd\u6570\u5bb9\u5668\u4e5f\u80fd\u63a5\u6536\u5230\u73af\u5883\u3002"),(0,l.kt)("h2",{id:"\u53d1\u5e03\u73af\u5883\u53d8\u91cf"},"\u53d1\u5e03\u73af\u5883\u53d8\u91cf"),(0,l.kt)("p",null,"\u4e3a\u4e86\u548c\u666e\u901a\u7684\u73af\u5883\u53d8\u91cf\u533a\u5206\uff0c\u90e8\u7f72\u5230\u5e73\u53f0\u7684\u73af\u5883\u53d8\u91cf\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"UDEV_"),"\xa0\uff08User Defined Environment Variable\uff09\u524d\u7f00\uff0c\u5e76\u4e14",(0,l.kt)("strong",{parentName:"p"},"\u4f1a\u5728\u53d1\u5e03\u540e\u5199\u5165\u5230\u53d1\u5e03\u7684 yml \u6587\u4ef6\u5bf9\u5e94\u7684 environment \u5b57\u6bb5\u4e2d\u3002")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ UDEV_NODE_ENV=prod midway-bin deploy\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5728\u5e73\u53f0\u5c06\u4f1a\u63a5\u6536\u5230\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"\xa0\uff0c\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"prod"),"\xa0 \u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("h2",{id:"yml-\u53d8\u91cf\u586b\u5145"},"YML \u53d8\u91cf\u586b\u5145"),(0,l.kt)("p",null,"\u5728 yml \u4e2d\u53ef\u4ee5\u4f7f\u7528\u586b\u5145\u4e00\u4e9b\u53d8\u91cf\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u586b\u5145\u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"env")," \uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u5bf9\u4efb\u610f\u7684 yml \u53d8\u91cf\u8d4b\u503c\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"provider:\n    runtime: ${env.RUNTIME}\n")),(0,l.kt)("p",null,"\u90a3\u4e48\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"midway-bin deploy")," \u65f6\u589e\u52a0\u7684\u73af\u5883\u53d8\u91cf\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME=nodejs10 midway-bin deploy")," \uff0c\u5219\u4f1a\u88ab\u586b\u5145\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"provider:\n    runtime: nodejs10\n")),(0,l.kt)("h2",{id:"\u9519\u8bef\u5806\u6808\u8f93\u51fa"},"\u9519\u8bef\u5806\u6808\u8f93\u51fa"),(0,l.kt)("p",null,"\u5f53\u51fd\u6570\u62a5\u9519\u65f6\uff0cMidway \u4f1a\u81ea\u52a8\u5728\u51fd\u6570\u65e5\u5fd7\u4e2d\u8f93\u51fa\u9519\u8bef\u4fe1\u606f\uff0c\u5305\u62ec\u5806\u6808\u7b49\u3002\u4f46\u662f\u53ea\u4f1a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"development")," \u73af\u5883\u5c06\u62a5\u9519\u5806\u6808\u5728\u54cd\u5e94\uff08Response\uff09\u4e2d\u8f93\u51fa\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u5176\u4ed6\u73af\u5883\u7684\u8fd4\u56de\u503c\u4e2d\u770b\u5230\u9519\u8bef\u5806\u6808\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u4e0b\u9762\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"process.env.SERVERLESS_OUTPUT_ERROR_STACK = 'true';\n")),(0,l.kt)("h2",{id:"\u62f7\u8d1d\u989d\u5916\u8d44\u6e90"},"\u62f7\u8d1d\u989d\u5916\u8d44\u6e90"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u6784\u5efa\u5de5\u5177\u53ea\u4f1a\u62f7\u8d1d package.json\u3001\u6784\u5efa\u540e\u7684\u4ee3\u7801\u548c\u4f9d\u8d56\uff0c\u5982\u679c\u9700\u8981\u62f7\u8d1d\u5176\u4ed6\u76ee\u5f55\uff0c\u6bd4\u5982\u4e00\u4e9b\u9759\u6001\u8d44\u6e90\uff0c\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"f.yml")," \u4e2d\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"package:                                        # \u6253\u5305\u914d\u7f6e\n  include:                                  # \u6253\u5305\u5305\u542b\u6587\u4ef6\u5217\u8868\uff0c\u9ed8\u8ba4\u4e3a package.json\u3001\u6784\u5efa\u540e\u7684\u4ee3\u7801\u548c\u4f9d\u8d56\n    - resource\n    - public\n  exclude:                                  # \u6253\u5305\u5254\u9664\u6587\u4ef6\u5217\u8868\n    - test\n")))}m.isMDXComponent=!0}}]);