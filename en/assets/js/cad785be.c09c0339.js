"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u9ad8\u7ea7\u88c5\u9970\u5668 API"},o=void 0,i={unversionedId:"decorator",id:"version-1.0.0/decorator",title:"\u9ad8\u7ea7\u88c5\u9970\u5668 API",description:"midway \u5185\u90e8\u6709\u4e00\u5957\u6807\u51c6\u7684\u88c5\u9970\u5668\u7ba1\u7406\u5668\uff0c\u7528\u6765\u6240\u6709\u88c5\u9970\u5668\u5bf9\u63a5 IoC \u5bb9\u5668\uff0c\u626b\u63cf\u548c\u6269\u5c55\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a decoratorManager\xa0\u3002",source:"@site/versioned_docs/version-1.0.0/decorator.md",sourceDirName:".",slug:"/decorator",permalink:"/en/docs/1.0.0/decorator",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/decorator.md",tags:[],version:"1.0.0",frontMatter:{title:"\u9ad8\u7ea7\u88c5\u9970\u5668 API"},sidebar:"common",previous:{title:"\u90e8\u7f72",permalink:"/en/docs/1.0.0/deploy"},next:{title:"\u6846\u67b6\u589e\u5f3a",permalink:"/en/docs/1.0.0/framework"}},p={},s=[{value:"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668",id:"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668",level:2},{value:"\u6e05\u7406\u4fe1\u606f",id:"\u6e05\u7406\u4fe1\u606f",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"midway \u5185\u90e8\u6709\u4e00\u5957\u6807\u51c6\u7684\u88c5\u9970\u5668\u7ba1\u7406\u5668\uff0c\u7528\u6765\u6240\u6709\u88c5\u9970\u5668\u5bf9\u63a5 IoC \u5bb9\u5668\uff0c\u626b\u63cf\u548c\u6269\u5c55\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"decoratorManager"),"\xa0\u3002"),(0,r.kt)("p",null,"\u6807\u51c6\u7684\u7684\u4ee3\u7801\u53c2\u8003\u4e3a \xa0",(0,r.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/injection/blob/master/src/base/decoratorManager.ts"},"https://github.com/midwayjs/injection/blob/master/src/base/decoratorManager.ts")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"decoratorManager"),"\xa0\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u88c5\u9970\u5668\uff0c\u5e76\u4e14\u5c06\u5143\u6570\u636e\u9644\u52a0\u5176\u4e2d\uff0c\u5185\u90e8\u7684\u5404\u79cd\u88c5\u9970\u5668\u90fd\u662f\u901a\u8fc7\u8be5\u80fd\u529b\u5b9e\u73b0\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"decoratorManager")," \xa0 \u4e0a\u6709\u975e\u5e38\u591a\u7684 get/set \u65b9\u6cd5\uff0c\u7528\u4e8e\u4e0d\u540c\u573a\u666f\u88c5\u9970\u5668\u7684\u5904\u7406\uff0c\u5e38\u89c1\u7684\u6709:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u88c5\u9970\u5668"),"\n","*","*"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveModule"),"\xa0 \u7528\u4e8e\u4fdd\u5b58\u67d0\u4e2a\u7c7b\u5230\u67d0\u4e2a\u88c5\u9970\u5668"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listModule"),"\xa0 \u83b7\u53d6\u6240\u6709\u7ed1\u5b9a\u5230\u67d0\u7c7b\u578b\u88c5\u9970\u5668\u7684 class")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5143\u4fe1\u606f \uff08\u5bf9\u5e94 "),(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/reflect-metadata"},(0,r.kt)("strong",{parentName:"a"},"reflect-metadata")),(0,r.kt)("strong",{parentName:"p"},")"),"\n","*","*"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveClassMetadata"),"\xa0 \u4fdd\u5b58\u5143\u4fe1\u606f\u5230 class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachClassMetadata"),"\xa0 \u9644\u52a0\u5143\u4fe1\u606f\u5230 class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getClassMetadata"),"\xa0 \u4ece class \u83b7\u53d6\u5143\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savePropertyDataToClass"),"\xa0\xa0 \u4fdd\u5b58\u5c5e\u6027\u7684\u5143\u4fe1\u606f\u5230 class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachPropertyDataToClass"),"\xa0 \u9644\u52a0\u5c5e\u6027\u7684\u5143\u4fe1\u606f\u5230 class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPropertyDataFromClass"),"\xa0 \u4ece class \u83b7\u53d6\u5c5e\u6027\u5143\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listPropertyDataFromClass"),"\xa0 \u5217\u51fa\u8f93\u51fa\u6240\u6709\u7684\u5143\u6570\u636e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savePropertyMetadata"),"\xa0 \u4fdd\u5b58\u5c5e\u6027\u5143\u4fe1\u606f\u5230\u5c5e\u6027\u672c\u8eab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachPropertyMetadata"),"\xa0 \u9644\u52a0\u5c5e\u6027\u5143\u4fe1\u606f\u5230\u5c5e\u6027\u672c\u8eab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPropertyMetadata"),"\xa0\xa0 \u4ece\u5c5e\u6027\u4e0a\u83b7\u53d6\u4fdd\u5b58\u7684\u5143\u4fe1\u606f")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5feb\u6377\u64cd\u4f5c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getProviderId"),"\xa0 \u83b7\u53d6 class \u4e0a provide \u51fa\u6765\u7684 id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getObjectDefinition"),"\xa0 \u83b7\u53d6\u5bf9\u8c61\u5b9a\u4e49\uff08ObjectDefiniton)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getParamNames"),"\xa0 \u83b7\u53d6\u4e00\u4e2a\u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearAllModule"),"\xa0 \u6e05\u7406\u88c5\u9970\u5668\u5bf9\u5e94\u7684 class map\uff08\u5bf9\u5e94 saveModule\uff09")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668"},"\u81ea\u5b9a\u4e49\u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u6211\u4eec\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u88c5\u9970\u5668 @Model \uff0c\u88ab\u4fee\u9970\u7684 class \u5219\u8868\u660e\u662f\u4e00\u4e2a Model class\uff0c\u7136\u540e\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u88c5\u9970\u5668\u6587\u4ef6\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/decorator/model"),"\xa0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { scope, ScopeEnum, saveClassMetadata, saveModule } from 'midawy';\n\nconst MODEL_KEY = 'decorator:model';\n\nexport function Model(): ClassDecorator {\n  return (target: any) => {\n    // \u5c06\u88c5\u9970\u7684\u7c7b\uff0c\u7ed1\u5b9a\u5230\u8be5\u88c5\u9970\u5668\uff0c\u7528\u4e8e\u540e\u7eed\u80fd\u83b7\u53d6\u5230 class\n    saveModule(MODEL_KEY, target);\n    // \u4fdd\u5b58\u4e00\u4e9b\u5143\u6570\u636e\u4fe1\u606f\uff0c\u4efb\u610f\u4f60\u5e0c\u671b\u5b58\u7684\u4e1c\u897f\n    saveClassMetadata(\n      MODEL_KEY,\n      {\n        test: 'abc',\n      },\n      target\n    );\n    // \u6307\u5b9a IoC \u5bb9\u5668\u521b\u5efa\u5b9e\u4f8b\u7684\u4f5c\u7528\u57df\uff0c\u8fd9\u91cc\u6ce8\u518c\u4e3a\u8bf7\u6c42\u4f5c\u7528\u57df\uff0c\u8fd9\u6837\u80fd\u53d6\u5230 ctx\n    Scope(ScopeEnum.Request)(target);\n  };\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u53ea\u662f\u5b9a\u4e86\u4e86\u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u6211\u4eec\u8fd8\u8981\u5b9e\u73b0\u76f8\u5e94\u7684\u529f\u80fd\uff0c\u8fd9\u4e2a\u529f\u80fd\u6587\u4ef6\u5fc5\u987b\u5728\u4e00\u5f00\u59cb\u5c31\u52a0\u8f7d\uff0cmidway2 \u5f00\u59cb\u6709\u751f\u547d\u5468\u671f\u7684\u6982\u5ff5\uff0c\u53ef\u4ee5\u5728\u751f\u547d\u5468\u671f\u4e2d\u6267\u884c\u3002midway1 \u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts"),"\xa0 \u4e2d\u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5b9e\u73b0 Model \u88c5\u9970\u5668\u529f\u80fd\nimport { listModule } from 'midway';\n\nconst MODEL_KEY = 'decorator:model';\n// \u53ef\u4ee5\u83b7\u53d6\u5230\u6240\u6709\u88c5\u9970\u4e86 @Model \u88c5\u9970\u5668\u7684 class\nconst modules = listModule(MODEL_KEY);\nfor (let mod of modules) {\n  // \u5b9e\u73b0\u81ea\u5b9a\u4e49\u80fd\u529b\n  // \u4ece mod \u4e0a\u62ff\u5143\u6570\u636e\uff0c\u505a\u4e0d\u540c\u7684\u5904\u7406\n  // \u63d0\u524d\u521d\u59cb\u5316\u7b49 app.applicationContext.getAsync(getProvideId(mod));\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u8981\u4f7f\u7528\u8fd9\u4e2a\u88c5\u9970\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Model } from '../decorator/model';\n\n// Provide \u7684\u4f5c\u7528\u662f\u66b4\u9732\u51fa\u4e00\u4e2a IoC id\uff0c\u80fd\u88ab IoC \u626b\u63cf\u5230\n@provide()\n// Model \u7684\u4f5c\u7528\u662f\u6211\u4eec\u81ea\u5df1\u7684\u903b\u8f91\u80fd\u88ab\u6267\u884c\uff08\u4fdd\u5b58\u7684\u5143\u6570\u636e\uff09\n@Model()\nexport class UserModel {}\n")),(0,r.kt)("h2",{id:"\u6e05\u7406\u4fe1\u606f"},"\u6e05\u7406\u4fe1\u606f"),(0,r.kt)("p",null,"\u7531\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"decoratorManager"),"\xa0 \u5168\u5c40\u552f\u4e00\uff0c\u65b9\u6cd5\u90fd\u4e3a\u9759\u6001\u65b9\u6cd5\uff0c\u6240\u4ee5\u5728\u5355\u6d4b\u6216\u8005\u591a IoC \u5bb9\u5668\u7684\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u6e05\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { clearAllModule } from 'midway';\n\n// \u6267\u884c\u5373\u53ef\nclearAllModule();\n")))}d.isMDXComponent=!0}}]);