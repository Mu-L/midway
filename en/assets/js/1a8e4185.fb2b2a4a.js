"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),v=i,m=u["".concat(o,".").concat(v)]||u[v]||d[v]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"\u4ee3\u7801\u6d41\u7a0b\u63a7\u5236"},s=void 0,l={unversionedId:"pipeline",id:"version-2.0.0/pipeline",title:"\u4ee3\u7801\u6d41\u7a0b\u63a7\u5236",description:"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u628a\u4e00\u4e2a\u5b8c\u6574\u7684\u4efb\u52a1\u62c6\u5206\u6210\u4e0d\u540c\u7684\u9636\u6bb5\uff0c\u6bcf\u4e2a\u9636\u6bb5\u6267\u884c\u7684\u903b\u8f91\u76f8\u5bf9\u72ec\u7acb\uff0c\u540c\u65f6\u53c8\u53ef\u4ee5\u901a\u8fc7\u5e76\u884c\u6216\u8005\u4e32\u884c\u7684\u65b9\u5f0f\u63d0\u5347\u6574\u4f53\u7684\u6267\u884c\u6548\u7387\u3002\u5728 Midway \u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u4f18\u5316\u7684 Pipeline \u6a21\u5f0f\u3002",source:"@site/versioned_docs/version-2.0.0/pipeline.md",sourceDirName:".",slug:"/pipeline",permalink:"/en/docs/2.0.0/pipeline",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/pipeline.md",tags:[],version:"2.0.0",frontMatter:{title:"\u4ee3\u7801\u6d41\u7a0b\u63a7\u5236"},sidebar:"common",previous:{title:"\u65b9\u6cd5\u62e6\u622a\u5668\uff08\u5207\u9762\uff09",permalink:"/en/docs/2.0.0/aspect"},next:{title:"\u73b0\u6709\u88c5\u9970\u5668\u7d22\u5f15",permalink:"/en/docs/2.0.0/decorator_index"}},o={},p=[{value:"Pipeline",id:"pipeline",level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"IPipelineHandler",id:"ipipelinehandler",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4f7f\u7528\u4e3e\u4f8b",id:"\u4f7f\u7528\u4e3e\u4f8b",level:2},{value:"parallel",id:"parallel",level:3},{value:"concat",id:"concat",level:3},{value:"series",id:"series",level:3},{value:"concatSeries",id:"concatseries",level:3},{value:"waterfall",id:"waterfall",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u628a\u4e00\u4e2a\u5b8c\u6574\u7684\u4efb\u52a1\u62c6\u5206\u6210\u4e0d\u540c\u7684\u9636\u6bb5\uff0c\u6bcf\u4e2a\u9636\u6bb5\u6267\u884c\u7684\u903b\u8f91\u76f8\u5bf9\u72ec\u7acb\uff0c\u540c\u65f6\u53c8\u53ef\u4ee5\u901a\u8fc7\u5e76\u884c\u6216\u8005\u4e32\u884c\u7684\u65b9\u5f0f\u63d0\u5347\u6574\u4f53\u7684\u6267\u884c\u6548\u7387\u3002\u5728 Midway \u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u4f18\u5316\u7684 Pipeline \u6a21\u5f0f\u3002"),(0,i.kt)("h2",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"\u5728 Node.js \u7684 Stream \u5b9e\u73b0\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"a.pipe(b).pipe(c).pipe(d)")," \u8fd9\u6837\uff0c\u628a\u591a\u4e2a Stream \u4e32\u8fde\u8d77\u6765\u3002\u4f46\u662f\u8fd9\u6837\u53ea\u80fd\u987a\u5e8f\u6267\u884c\u7684 pipe \u5b9e\u73b0\u4e0d\u4e00\u5b9a\u80fd\u591f\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u3002"),(0,i.kt)("p",null,"\u5728 Midway \u4e2d\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Pipeline"),"\xa0 \u88c5\u9970\u5668\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7ee7\u627f\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"IPipelineHandler"),"\xa0 \u63a5\u53e3\u7684\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"IValveHandler"),"\xa0 \u5b9e\u4f8b\u4e32\u8054\u8d77\u6765\u6267\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IValveHandler"),"\xa0 \u5c31\u662f\u5177\u4f53\u7684\u4efb\u52a1\u9636\u6bb5\u6267\u884c\u5355\u4f4d\u3002\u6574\u4e2a IPipelineHandler \u6267\u884c\u65b9\u5f0f\u53ef\u4ee5\u662f parallel\u3001series\u3001concat\u3001waterfall (\u5f88\u719f\u6089\u662f\u5427\uff1f\u6211\u4eec\u53c2\u8003\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/caolan/async"},"async")," \u5e93\u63d0\u4f9b\u7684\u65b9\u6cd5\u80fd\u529b\u547d\u540d)\u3002"),(0,i.kt)("p",null,"Pipeline \u6267\u884c\u65f6\u671f\u7684\u4e0a\u4e0b\u6587 IPipelineContext \u53ef\u4ee5\u7528\u6765\u5b58\u50a8 Pipeline \u5165\u53c2\u3001\u4e0a\u4e00\u6b21 IValveHandler \u5b9e\u4f8b\u7684\u6267\u884c\u7ed3\u679c\u3001\u4e0a\u4e00\u6b21\u7684\u4e2d\u95f4\u4ea7\u7269\u7b49\u7b49\uff0c\u63d0\u4f9b\u4e86\u975e\u5e38\u5927\u7684\u7075\u6d3b\u6027\u3002"),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("h3",{id:"ipipelinehandler"},"IPipelineHandler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IPipelineHandler {\n  /**\n   * \u5e76\u884c\u6267\u884c\uff0c\u4f7f\u7528 Promise.all\n   * @param opts \u6267\u884c\u53c2\u6570\n   */\n  parallel<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * \u5e76\u884c\u6267\u884c\uff0c\u6700\u7ec8 result \u4e3a\u6570\u7ec4\n   * @param opts \u6267\u884c\u53c2\u6570\n   */\n  concat<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * \u4e32\u884c\u6267\u884c\uff0c\u4f7f\u7528 foreach await\n   * @param opts \u6267\u884c\u53c2\u6570\n   */\n  series<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * \u4e32\u884c\u6267\u884c\uff0c\u4f7f\u7528 foreach await\uff0c\u6700\u7ec8 result \u4e3a\u6570\u7ec4\n   * @param opts \u6267\u884c\u53c2\u6570\n   */\n  concatSeries<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n  /**\n   * \u4e32\u884c\u6267\u884c\uff0c\u4f46\u662f\u4f1a\u628a\u524d\u8005\u6267\u884c\u7ed3\u679c\u5f53\u6210\u5165\u53c2\uff0c\u4f20\u5165\u5230\u4e0b\u4e00\u4e2a\u6267\u884c\u4e2d\u53bb\uff0c\u6700\u540e\u4e00\u4e2a\u6267\u884c\u7684 valve \u7ed3\u679c\u4f1a\u88ab\u8fd4\u56de\n   * @param opts \u6267\u884c\u53c2\u6570\n   */\n  waterfall<T>(opts: IPipelineOptions): Promise<IPipelineResult<T>>;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u767d\u540d\u5355\u673a\u5236\n\u4f7f\u7528 Pipeline \u88c5\u9970\u5668\u65f6\uff0c\u5982\u679c\u586b\u5199\u4e86\u6570\u7ec4\u53c2\u6570\uff0c\u90a3\u4e48\u65b9\u6cd5\u6267\u884c\u51fd\u6570\u4e2d\u7684 valves \u5165\u53c2\u53ea\u80fd\u662f\u88c5\u9970\u5668\u6570\u7ec4\u53c2\u6570\u4e2d\u7684\u9879\u3002\u5f53\u7136\uff0cvalves \u662f\u53ef\u9009\u9879\uff0c\u4e0d\u586b\u9ed8\u8ba4\u5c31\u4ee5\u88c5\u9970\u5668\u6570\u7ec4\u53c2\u6570\u4e3a\u51c6\u3002\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"@Pipeline(['a', 'b', 'c'])")," \u90a3\u4e48 series \u7b49\u6267\u884c\u51fd\u6570\u4e2d\u53ef\u9009\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"opts.valves")," \u6570\u7ec4\u5fc5\u987b\u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"['a', 'b', 'c']")," \u6216\u8005\u5176\u5b50\u96c6\uff0c\u5982\u679c\u4e0d\u586b\u5219\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"['a', 'b', 'c']")," \xa0 \u903b\u8f91\u987a\u5e8f\u6765\u6267\u884c\u3002")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,i.kt)("p",null,"IPipelineResult \u7684\u7c7b\u578b\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * pipeline \u6267\u884c\u8fd4\u56de\u7ed3\u679c\n */\nexport interface IPipelineResult<T> {\n  /**\n   * \u662f\u5426\u6210\u529f\n   */\n  success: boolean;\n  /**\n   * \u5f02\u5e38\u4fe1\u606f(\u5982\u679c\u6709\u5219\u8fd4\u56de)\n   */\n  error?: {\n    /**\n     * \u5f02\u5e38\u51fa\u5728\u90a3\u4e2a valve \u4e0a\n     */\n    valveName?: string;\n    /**\n     * \u5f02\u5e38\u4fe1\u606f\n     */\n    message?: string;\n    /**\n     * \u539f\u59cb Error\n     */\n    error?: Error;\n  };\n  /**\n   * \u8fd4\u56de\u7ed3\u679c\n   */\n  result: T;\n}\n")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u4e3e\u4f8b"},"\u4f7f\u7528\u4e3e\u4f8b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5047\u8bbe\u6709\u8fd9\u6837\u4e00\u4e2a\u573a\u666f\uff0c\u6211\u4eec\u9700\u8981\u4e00\u6b21\u6027\u83b7\u53d6\u9875\u9762\u4e0a\u7684\u6570\u636e\u4fe1\u606f\u3001\u5f53\u524d\u7528\u6237\u4fe1\u606f\u4ee5\u53ca\u6709\u51e0\u4e2a Tab\u3002\u90a3\u4e48\u6211\u4eec\u5148\u58f0\u660e\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class VideoDto {\n  videoId: string;\n  videoUrl: string;\n  videoTitle: string;\n}\nclass AccountDto {\n  id: string;\n  nick: string;\n  isFollow: boolean;\n}\nclass TabDto {\n  tabId: string;\n  title: string;\n  index: number;\n}\ninterface HomepageDto {\n  videos: VideoDto[];\n  account: AccountDto;\n  tab: TabDto;\n}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4e00\u4e2a TestService \u6765\u5c01\u88c5\u4e00\u4e0b\u8fd4\u56de\u7684\u8fd9\u4e9b\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide('service')\nclass TestService {\n  // \u8fd4\u56de\u5f53\u524d\u767b\u5f55\u7528\u6237\u4fe1\u606f\n  async getAccount(args: any): Promise<AccountDto> {\n    return {\n      id: 'test_account_id',\n      nick: 'test hello',\n      isFollow: true,\n    };\n  }\n  // \u8fd4\u56de\u89c6\u5c4f\u5217\u8868\n  async getVideos(args: any): Promise<VideoDto[]> {\n    return [\n      {\n        videoId: '123',\n        videoUrl: 'https://www.taobao.com/xxx.mp4',\n        videoTitle: 'test 1 video',\n      },\n      {\n        videoId: '234',\n        videoUrl: 'https://www.taobao.com/xxx234.mp4',\n        videoTitle: 'test 2 video',\n      },\n      {\n        videoId: '456',\n        videoUrl: 'https://www.taobao.com/xxx456.mp4',\n        videoTitle: 'test 3 video',\n      },\n    ];\n  }\n  // \u8fd4\u56detab\u9875\u9762\n  async getTab(args: any): Promise<TabDto> {\n    return {\n      title: 'test tab',\n      tabId: 'firstTab',\n      index: 0,\n    };\n  }\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5c06\u51e0\u4e2a\u4efb\u52a1\u5c01\u88c5\u62c6\u5206\u6210\u4e0d\u540c\u7684 IValveHandler \u5b9e\u73b0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u8fd4\u56de\u89c6\u5c4f\u4fe1\u606f\u7684\n@Provide()\nclass VideoFeeds implements IValveHandler {\n  alias = 'videos';\n\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<VideoDto[]> {\n    return this.service.getVideos(ctx.args);\n  }\n}\n// \u8fd4\u56de\u8d26\u6237\u4fe1\u606f\u7684\n@Provide()\nclass AccountMap implements IValveHandler {\n  alias = 'account';\n\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<AccountDto> {\n    // \u83b7\u53d6\u6570\u636e\u6267\u884c\u903b\u8f91\n    return this.service.getAccount(ctx.args);\n  }\n}\n// \u8fd4\u56detab\u4fe1\u606f\u7684\n@Provide()\nclass CrowFeeds implements IValveHandler {\n  alias = 'tab';\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<TabDto> {\n    // \u83b7\u53d6\u6570\u636e\u6267\u884c\u903b\u8f91\n    return this.service.getTab(ctx.args);\n  }\n}\n// \u6355\u6349\u6574\u4e2a\u9519\u8bef\u5f02\u5e38\u7684\n@Provide()\nclass ErrorFeeds implements IValveHandler {\n  alias = 'tab';\n  @Inject()\n  service: TestService;\n\n  async invoke(ctx: IPipelineContext): Promise<TabDto> {\n    // \u83b7\u53d6\u6570\u636e\u6267\u884c\u903b\u8f91\n    throw new Error('this is error feeds');\n  }\n}\n")),(0,i.kt)("h3",{id:"parallel"},"parallel"),(0,i.kt)("p",null,"\u901a\u8fc7\u8be5\u65b9\u6cd5\u6267\u884c\u7684\u7ed3\u679c\uff0c\u6700\u7ec8\u8fd4\u56de\u7684\u662f\u4e00\u4e2a object \u5bf9\u8c61\uff0c\u4e14\u6bcf\u4e2a IValveHandler \u5b9e\u73b0 alias \u4f5c\u4e3a\u5bf9\u8c61\u8fd4\u56de\u503c\u7684 key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // \u8fd9\u91cc\u58f0\u660e\u4e00\u4e2a pipeline\n  @Pipeline(['videoFeeds', 'accountMap', 'crowFeeds'])\n  stages: IPipelineHandler;\n\n  async runParallel(): Promise<any> {\n    // \u8fd9\u91cc\u5e76\u53d1\u6267\u884c videoFeeds\u3001accountMap\u3001crowFeeds\n    return this.stages.parallel<any>({\n      args: { aa: 123 },\n    });\n\n    // \u8fd4\u56de\u7684 result \u7ed3\u6784\n    /*\n    {\n      // \u4ee5 accountMap \u7684 alias account \u4f5c\u4e3a\u8fd4\u56de\u5bf9\u8c61\u7684 key\n      account: {\n        id: 'test_account_id',\n        nick: 'test hello',\n        isFollow: true,\n      },\n      // \u4ee5 videoFeeds \u7684 alias video \u4f5c\u4e3a\u8fd4\u56de\u5bf9\u8c61\u7684 key\n      video: [\n        {\n          videoId: '123',\n          videoUrl: 'https://www.taobao.com/xxx.mp4',\n          videoTitle: 'test 1 video'\n        }, {\n          videoId: '234',\n          videoUrl: 'https://www.taobao.com/xxx234.mp4',\n          videoTitle: 'test 2 video'\n        }, {\n          videoId: '456',\n          videoUrl: 'https://www.taobao.com/xxx456.mp4',\n          videoTitle: 'test 3 video'\n        }\n      ],\n      // \u4ee5 crowFeeds \u7684 alias tab \u4f5c\u4e3a\u8fd4\u56de\u5bf9\u8c61\u7684 key\n      tab: {\n        title: 'test tab',\n        tabId: 'firstTab',\n        index: 0\n      }\n    }\n    */\n  }\n}\n")),(0,i.kt)("h3",{id:"concat"},"concat"),(0,i.kt)("p",null,"\u6267\u884c\u65b9\u5f0f\u540c parallel \u53ea\u4e0d\u8fc7\u6700\u7ec8\u8fd4\u56de\u7ed3\u679c result \u662f\u4e00\u4e2a\u6570\u7ec4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // \u8fd9\u91cc\u58f0\u660e\u4e00\u4e2a pipeline\n  @Pipeline(['videoFeeds', 'accountMap', 'crowFeeds'])\n  stages: IPipelineHandler;\n\n  async runConcat(): Promise<any> {\n    // \u8fd9\u91cc\u5e76\u53d1\u6267\u884c videoFeeds\u3001accountMap\u3001crowFeeds\n    return this.stages.concat<any>({\n      args: { aa: 123 },\n    });\n\n    // \u8fd9\u91cc\u8fd4\u56de\u7684 result \u662f\u4e00\u4e2a\u6570\u7ec4\n    /*\n    [\n        // \u4ee5 videoFeeds \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u8fd4\u56de\u5bf9\u8c61\n      [\n        {\n          videoId: '123',\n          videoUrl: 'https://www.taobao.com/xxx.mp4',\n          videoTitle: 'test 1 video'\n        }, {\n          videoId: '234',\n          videoUrl: 'https://www.taobao.com/xxx234.mp4',\n          videoTitle: 'test 2 video'\n        }, {\n          videoId: '456',\n          videoUrl: 'https://www.taobao.com/xxx456.mp4',\n          videoTitle: 'test 3 video'\n        }\n      ],\n      // \u4ee5 accountMap \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u8fd4\u56de\u5bf9\u8c61\n      {\n        id: 'test_account_id',\n        nick: 'test hello',\n        isFollow: true,\n      },\n      // \u4ee5 crowFeeds \u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u8fd4\u56de\u5bf9\u8c61\n      {\n        title: 'test tab',\n        tabId: 'firstTab',\n        index: 0\n      }\n    ]\n    */\n  }\n}\n")),(0,i.kt)("h3",{id:"series"},"series"),(0,i.kt)("p",null,"\u8fd9\u91cc series \u662f\u4e32\u884c\u6267\u884c\uff0c\u6309\u7167 Pipeline \u88c5\u9970\u5668\u53c2\u6570\u987a\u5e8f\uff0c\u4e00\u4e2a\u4e00\u4e2a\u6267\u884c\u4e0b\u53bb\uff0c\u4e14 IPipelienContext \u4e2d\u7684 prev \u5c31\u662f\u524d\u4e00\u4e2a valve\uff0ccurrent \u662f\u5f53\u524d\uff0cnext \u5373\u4e0b\u4e00\u4e2a\u5373\u5c06\u6267\u884c\u7684 valve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // \u8fd9\u91cc\u58f0\u660e\u4e00\u4e2a pipeline\n  @Pipeline(['videoFeeds', 'accountMap', 'crowFeeds'])\n  stages: IPipelineHandler;\n\n  async runSeries(): Promise<any> {\n    // \u8fd9\u91cc\u4e32\u884c\u6267\u884c videoFeeds\u3001accountMap\u3001crowFeeds\n    return this.stages.series<any>({\n      args: { aa: 123 },\n    });\n\n    // \u8fd9\u91cc\u8fd4\u56de\u7684 result \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7ed3\u679c\u540c parallel \u8fd4\u56de\u7684\u5bf9\u8c61\u62fc\u88c5\u89c4\u5219\n  }\n}\n")),(0,i.kt)("h3",{id:"concatseries"},"concatSeries"),(0,i.kt)("p",null,"\u539f\u7406\u540c series\uff0c\u53ea\u4e0d\u8fc7\u8fd4\u56de\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u7ec4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class StageTest {\n  // \u8fd9\u91cc\u58f0\u660e\u4e00\u4e2a pipeline\n  @Pipeline(['videoFeeds', 'accountMap', 'crowFeeds'])\n  stages: IPipelineHandler;\n\n  async runConcatSeries(): Promise<any> {\n    // \u8fd9\u91cc\u4e32\u884c\u6267\u884c videoFeeds\u3001accountMap\u3001crowFeeds\n    return this.stages.concatSeries<any>({\n      args: { aa: 123 },\n    });\n\n    // \u8fd9\u91cc\u8fd4\u56de\u7684 result \u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u540c concat \u8fd4\u56de\u5bf9\u8c61\u62fc\u88c5\n  }\n}\n")),(0,i.kt)("h3",{id:"waterfall"},"waterfall"),(0,i.kt)("p",null,"\u4e32\u884c\u6267\u884c\uff0c\u6700\u7ec8\u53ea\u8fd4\u56de\u6700\u540e\u4e00\u4e2a valve \u6267\u884c\u7ed3\u679c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nclass StageOne implements IValveHandler {\n  async invoke(ctx: IPipelineContext): Promise<any> {\n    if (ctx.args.aa !== 123) {\n      throw new Error('args aa is undefined');\n    }\n    ctx.set('stageone', 'this is stage one');\n    ctx.set('stageone_date', Date.now());\n    if (ctx.info.current !== 'stageOne') {\n      throw new Error('current stage is not stageOne');\n    }\n    if (ctx.info.next !== 'stageTwo') {\n      throw new Error('next stage is not stageTwo');\n    }\n    if (ctx.info.prev) {\n      throw new Error('stageOne prev stage is not undefined');\n    }\n\n    return 'stageone';\n  }\n}\n\n@Provide()\nclass StageTwo implements IValveHandler {\n  async invoke(ctx: IPipelineContext): Promise<any> {\n    const keys = ctx.keys();\n    if (keys.length !== 2) {\n      throw new Error('keys is not equal');\n    }\n    ctx.set('stagetwo', ctx.get('stageone') + 1);\n    ctx.set('stagetwo_date', Date.now());\n    // \u9a8c\u8bc1\u662f\u5426\u662f\u6267\u884c stageOne \u8fd4\u56de\u7684\u7ed3\u679c\n    if (ctx.info.prevValue !== 'stageone') {\n      throw new Error('stageone result empty');\n    }\n    if (ctx.info.current !== 'stageTwo') {\n      throw new Error('current stage is not stageTwo');\n    }\n    if (ctx.info.next) {\n      throw new Error('stageTwo next stage is not undefined');\n    }\n    if (ctx.info.prev !== 'stageOne') {\n      throw new Error('prev stage is not stageOne');\n    }\n\n    return 'stagetwo';\n  }\n}\n\nclass StageTest {\n  // \u8fd9\u91cc\u58f0\u660e\u4e00\u4e2a pipeline\n  @Pipeline(['stageOne', 'stageTwo'])\n  stages: IPipelineHandler;\n\n  async runStagesWaterfall(): Promise<any> {\n    // \u8fd9\u91cc\u901a\u8fc7\u4e32\u884c\u65b9\u5f0f\u6267\u884c\uff0c\u53ef\u4ee5\u770b\u5230 stageTwo \u4e2d\u505a\u4e86\u6821\u9a8c\uff0cprevValue \u5373 stageOne \u6267\u884c\u7684\u7ed3\u679c\n    return this.stages.waterfall<any>({\n      args: { aa: 123 },\n    });\n  }\n}\n")))}d.isMDXComponent=!0}}]);