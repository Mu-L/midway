"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2476],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||p;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={},l="pm2",o={unversionedId:"extensions/pm2",id:"extensions/pm2",title:"pm2",description:"PM2 \u662f\u5e26\u6709\u5185\u7f6e\u8d1f\u8f7d\u5e73\u8861\u5668\u7684 Node.js \u5e94\u7528\u7a0b\u5e8f\u7684\u751f\u4ea7\u8fc7\u7a0b\u7ba1\u7406\u5668\u3002\u53ef\u4ee5\u5229\u7528\u5b83\u6765\u7b80\u5316\u5f88\u591a Node \u5e94\u7528\u7ba1\u7406\u7684\u7e41\u7410\u4efb\u52a1\uff0c\u5982\u6027\u80fd\u76d1\u63a7\u3001\u81ea\u52a8\u91cd\u542f\u3001\u8d1f\u8f7d\u5747\u8861\u7b49\u3002",source:"@site/docs/extensions/pm2.md",sourceDirName:"extensions",slug:"/extensions/pm2",permalink:"/docs/extensions/pm2",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/pm2.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u94fe\u8def\u8ffd\u8e2a",permalink:"/docs/extensions/otel"},next:{title:"cfork",permalink:"/docs/extensions/cfork"}},s={},i=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u542f\u52a8\u5e94\u7528",id:"\u542f\u52a8\u5e94\u7528",level:2},{value:"Docker \u5bb9\u5668\u542f\u52a8",id:"docker-\u5bb9\u5668\u542f\u52a8",level:2}],m={toc:i};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pm2"},"pm2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"PM2")," \u662f\u5e26\u6709\u5185\u7f6e\u8d1f\u8f7d\u5e73\u8861\u5668\u7684 Node.js \u5e94\u7528\u7a0b\u5e8f\u7684\u751f\u4ea7\u8fc7\u7a0b\u7ba1\u7406\u5668\u3002\u53ef\u4ee5\u5229\u7528\u5b83\u6765\u7b80\u5316\u5f88\u591a Node \u5e94\u7528\u7ba1\u7406\u7684\u7e41\u7410\u4efb\u52a1\uff0c\u5982\u6027\u80fd\u76d1\u63a7\u3001\u81ea\u52a8\u91cd\u542f\u3001\u8d1f\u8f7d\u5747\u8861\u7b49\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u4f1a\u628a pm2 \u5b89\u88c5\u5230\u5168\u5c40\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install pm2 -g    # \u547d\u4ee4\u884c\u5b89\u88c5 pm2\n")),(0,a.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 start     # \u542f\u52a8\u4e00\u4e2a\u670d\u52a1\n$ pm2 list      # \u5217\u51fa\u5f53\u524d\u7684\u670d\u52a1\n$ pm2 stop          # \u505c\u6b62\u67d0\u4e2a\u670d\u52a1\n$ pm2 restart       # \u91cd\u542f\u67d0\u4e2a\u670d\u52a1\n$ pm2 delete        # \u5220\u9664\u67d0\u4e2a\u670d\u52a1\n$ pm2 logs          # \u67e5\u770b\u670d\u52a1\u7684\u8f93\u51fa\u65e5\u5fd7\n")),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2 list"),"\uff0c\u5c31\u4f1a\u4ee5\u8868\u683c\u663e\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1616560437389-b193a0d0-b463-49f1-a347-8dec20e7504d.png",alt:null})),(0,a.kt)("p",null,"pm2 \u7684\u670d\u52a1\u90fd\u6709\u4e00\u4e2a\u6570\u7ec4 id\uff0c\u4f60\u53ef\u4ee5\u7528 id \u5feb\u901f\u64cd\u4f5c\u5b83\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 stop 1            # \u505c\u6b62\u7f16\u53f7\u4e3a 1 \u7684\u670d\u52a1\n$ pm2 delete 1      # \u5220\u9664\u7f16\u53f7\u4e3a 1 \u7684\u670d\u52a1\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--name")," \u53c2\u6570\u6dfb\u52a0\u4e00\u4e2a\u5e94\u7528\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 start ./bootstrap.js --name test_app\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u8fd9\u4e2a\u5e94\u7528\u540d\u6765\u64cd\u4f5c\u542f\u505c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ pm2 stop test_app\n$ pm2 restart test_app\n")),(0,a.kt)("h2",{id:"\u542f\u52a8\u5e94\u7528"},"\u542f\u52a8\u5e94\u7528"),(0,a.kt)("p",null,"Midway \u5e94\u7528\u4e00\u822c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," \u505a\u7ebf\u4e0a\u90e8\u7f72\u3002\u5176\u5bf9\u5e94\u7684\u547d\u4ee4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV=production node bootstrap.js"),"\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u524d\u9700\u8981\u6267\u884c\u7f16\u8bd1 npm run build")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684 pm2 \u547d\u4ee4\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV=production pm2 start ./bootstrap.js --name midway_app -i 4\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"--name \u7528\u4e8e\u6307\u5b9a\u5e94\u7528\u540d"),(0,a.kt)("li",{parentName:"ul"},"-i \u7528\u4e8e\u6307\u5b9a\u542f\u52a8\u7684\u5b9e\u4f8b\u6570\uff08\u8fdb\u7a0b\uff09\uff0c\u4f1a\u4f7f\u7528 cluster \u6a21\u5f0f\u542f\u52a8")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1616562075255-088155ee-7c4f-4eae-b5c5-db826f78b519.png",alt:null})),(0,a.kt)("h2",{id:"docker-\u5bb9\u5668\u542f\u52a8"},"Docker \u5bb9\u5668\u542f\u52a8"),(0,a.kt)("p",null,"\u5728 Docker \u5bb9\u5668\u4e2d\uff0c\u540e\u53f0\u542f\u52a8\u7684\u4ee3\u7801\u90fd\u4f1a\u88ab\u9000\u51fa\uff0c\u8fbe\u4e0d\u5230\u9884\u671f\u6548\u679c\u3002pm2 \u4f7f\u7528\u53e6\u4e00\u4e2a\u547d\u4ee4\u6765\u652f\u6301\u5bb9\u5668\u542f\u52a8\u3002"),(0,a.kt)("p",null,"\u8bf7\u5c06\u547d\u4ee4\u4fee\u6539\u4e3a pm2-runtime start \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV=production pm2-runtime start ./bootstrap.js --name midway_app -i 4\n")),(0,a.kt)("p",null,"\u5177\u4f53\u7684 pm2 \u884c\u4e3a\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pm2#container-support"},"pm2 \u5bb9\u5668\u90e8\u7f72\u8bf4\u660e"),"\u3002"))}c.isMDXComponent=!0}}]);