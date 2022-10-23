"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},l="midwayjs/cli",r={unversionedId:"tool/cli",id:"tool/cli",title:"midwayjs/cli",description:"@midwayjs/cli is a new version of Midway system tool chain, which is integrated with Serverless and the original application tool chain.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/cli.md",sourceDirName:"tool",slug:"/tool/cli",permalink:"/en/docs/tool/cli",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"other",next:{title:"Lint tools, rules and formatting",permalink:"/en/docs/tool/mwts"}},s={},c=[{value:"Foundation entrance",id:"foundation-entrance",level:2},{value:"dev command",id:"dev-command",level:2},{value:"<strong>Standard Start</strong>",id:"standard-start",level:3},{value:"<strong>Modify the startup port</strong>",id:"modify-the-startup-port",level:3},{value:"<strong>Modify the startup path</strong>",id:"modify-the-startup-path",level:3},{value:"<strong>Modify the source code path of ts</strong>",id:"modify-the-source-code-path-of-ts",level:3},{value:"<strong>Faster startup method</strong>",id:"faster-startup-method",level:3},{value:"Monitoring file changes",id:"monitoring-file-changes",level:3},{value:"Local single-step Debug debugging",id:"local-single-step-debug-debugging",level:3},{value:"test command",id:"test-command",level:2},{value:"Cov command",id:"cov-command",level:2},{value:"Check command",id:"check-command",level:2},{value:"build command",id:"build-command",level:2},{value:"deploy command",id:"deploy-command",level:2},{value:"Domain name configuration when the function is published",id:"domain-name-configuration-when-the-function-is-published",level:4},{value:"Each route is deployed as a function",id:"each-route-is-deployed-as-a-function",level:4},{value:"aliyun releases AK error issue",id:"aliyun-releases-ak-error-issue",level:4},{value:"package command",id:"package-command",level:2},{value:"Detailed parameter explanation",id:"detailed-parameter-explanation",level:4},{value:"File copy logic when function builds packaging",id:"file-copy-logic-when-function-builds-packaging",level:4},{value:"Experimental function",id:"experimental-function",level:2},{value:"1. ignoreTsError",id:"1-ignoretserror",level:3},{value:"2. removeUselessFiles",id:"2-removeuselessfiles",level:3},{value:"3. fastInstallNodeModules",id:"3-fastinstallnodemodules",level:3},{value:"CLI extension",id:"cli-extension",level:2},{value:"1. Life cycle expansion",id:"1-life-cycle-expansion",level:3},{value:"2. Extend through plug-ins",id:"2-extend-through-plug-ins",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"midwayjscli"},"midwayjs/cli"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," is a new version of Midway system tool chain, which is integrated with Serverless and the original application tool chain."),(0,i.kt)("h2",{id:"foundation-entrance"},"Foundation entrance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," provides two entry commands. ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-bin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mw")," commands."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/CLI")," is installed in the global system, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mw")," command is used, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"mw Dev"),". When installing the cli tool in a project, we usually use the ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-bin")," command, but remember that the two commands are the same."),(0,i.kt)("h2",{id:"dev-command"},"dev command"),(0,i.kt)("p",null,"Start the local development command with the current directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ mw dev\n  -- baseDir the application directory, usually the folder where package.json is located, and the default is process.cwd()\n  -sourceDir ts code directory, automatically analyzed by default\n  -p, -- port dev listens on the port, default to 7001\n  -- ts TS mode running code\n  -- fast speed mode\n  -framework the specified framework, it will be analyzed automatically by default\n  -f, -entryFile specifies to use the entry file to start the bootstrap.js\n  -watchFile more files or folders to modify listening\n  -Does not restart automatically when notWatch code changes\n")),(0,i.kt)("h3",{id:"standard-start"},(0,i.kt)("strong",{parentName:"h3"},"Standard Start")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin dev --ts\n")),(0,i.kt)("h3",{id:"modify-the-startup-port"},(0,i.kt)("strong",{parentName:"h3"},"Modify the startup port")),(0,i.kt)("p",null,"For HTTP scenarios, ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-- port")," can temporarily modify the port."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin dev --ts --port=7002\n")),(0,i.kt)("h3",{id:"modify-the-startup-path"},(0,i.kt)("strong",{parentName:"h3"},"Modify the startup path")),(0,i.kt)("p",null,"Specify the root directory of the application, usually the folder where the package.json is located, and the default is process.cwd()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ midway-bin dev --ts --baseDir=./app\n")),(0,i.kt)("h3",{id:"modify-the-source-code-path-of-ts"},(0,i.kt)("strong",{parentName:"h3"},"Modify the source code path of ts")),(0,i.kt)("p",null,"specifies the ts code directory, which is automatically analyzed by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ midway-bin dev --ts --sourceDir=./app/src\n")),(0,i.kt)("h3",{id:"faster-startup-method"},(0,i.kt)("strong",{parentName:"h3"},"Faster startup method")),(0,i.kt)("p",null,"The default startup method is ts-node, which will be slower when the number of files is particularly large. You can switch to a new compilation method such as swc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Use ts-node fast dev mode\n$ midway-bin dev --ts --fast\n\n// Use swc fast dev mode\n$ midway-bin dev --ts --fast=swc\n")),(0,i.kt)("h3",{id:"monitoring-file-changes"},"Monitoring file changes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-watchFile")," is used to specify more files or folders to modify listening, default listening to files ending in ",(0,i.kt)("inlineCode",{parentName:"p"},".ts"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".yml"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sourceDir")," directory (you can specify more extensions through the -- watchExt parameter), and ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseDir")," directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Specify multiple files, separated by commas\n$ midway-bin dev --ts --watchFile=./a.txt,./b.txt\n\n// Specify multiple folders and files separated by commas\n$ midway-bin dev --ts --watchFile=./test,./b.txt\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-- watchExt"),": Specify more listener file extensions. Default value: ",(0,i.kt)("inlineCode",{parentName:"li"},".ts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".yml"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},".json"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Specify multiple file extensions separated by commas\n$ midway-bin dev --ts --watchExt=.js,.html\n")),(0,i.kt)("h3",{id:"local-single-step-debug-debugging"},"Local single-step Debug debugging"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-- debug")," parameter starts the debug mode. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome devtools")," to perform single-step code debugging:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635994136312-f1eda8ba-165d-4322-82b8-b21d3b9c6beb.png#clientId=u32db4720-b7d0-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=177&id=z4u1f&margin=%5Bobject%20Object%5D&name=69456694-513D-4388-B52F-001562D4A520.png&originHeight=666&originWidth=1538&originalType=binary&ratio=1&rotation=0&showTitle=false&size=276022&status=done&style=none&taskId=ud161d835-1e96-4246-8061-c795e9a0ff1&title=&width=409",alt:"69456694-513D-4388-B52F-001562D4A520.png"}),"\nYou can use ",(0,i.kt)("inlineCode",{parentName:"p"},"chrome:// inspect/")," to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodejs devtools")," for breakpoint debugging:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635995391144-a9ec0d4a-c6fb-4638-a292-615a3588d33d.png#clientId=u069cda7c-313b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=236&id=u4986bfa4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=942&originWidth=1948&originalType=binary&ratio=1&rotation=0&showTitle=false&size=572568&status=done&style=none&taskId=u07555349-8e09-42b2-bd94-f93160b0431&title=&width=488",alt:"image.png"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635995418427-282d256a-de65-4eba-9a83-b474d3d74f9f.png#clientId=u069cda7c-313b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=445&id=u83271ad1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1280&originWidth=2280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=710504&status=done&style=none&taskId=uc2614db9-dea9-48d7-b87d-8cb608c8770&title=&width=792",alt:"image.png"}),"\nYou can also directly open the link of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DevTools")," protocol output from the command line through the Chrome browser, add a breakpoint to the corresponding code and debug it:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1635994137067-f663409a-483d-41f5-bc86-4798182edb38.png#clientId=u32db4720-b7d0-4&crop=0&crop=0&crop=1&crop=1&from=ui&height=135&id=GooAh&margin=%5Bobject%20Object%5D&name=10016148-385E-46A4-8B3A-0A0110BECD18.png&originHeight=950&originWidth=2878&originalType=binary&ratio=1&rotation=0&showTitle=false&size=744085&status=done&style=none&taskId=u892d9925-9206-4946-a1ed-cb6043c557d&title=&width=409",alt:"10016148-385E-46A4-8B3A-0A0110BECD18.png"})),(0,i.kt)("p",null,"If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"vscode"),", you can use the js debug terminal of vscode to execute the dev command (without adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"-- debug")," parameter) to start breakpoint debugging. ",(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/128621/1625237917317-8e7bf448-fded-4bc7-b743-6aade0ebcba2.png#clientId=u7c8a3183-c32b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=650&id=u75e3aec7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1300&originWidth=2868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1140427&status=done&style=none&taskId=ubcffa6c8-02eb-4256-ba7e-7ab3128c1ee&title=&width=1434",alt:"image.png"})),(0,i.kt)("h2",{id:"test-command"},"test command"),(0,i.kt)("p",null,"Start the test with the current directory. By default, the jest tool is used. You can use the -- mocha parameter to specify mocha."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin test --ts\n  -c, -- cov gets code test coverage\n  -f, -- file specifies a test file, such as./test/index.test.ts\n  -- ts TS mode running single test\n  --forceExit jest forceExit\n  --runInBand jest runInBand\n  -w, -- watch watch mode\n  -- mocha single test using mocha\n")),(0,i.kt)("p",null,"When you use mocha for a single test, you must manually install the ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@types/mocha")," dependencies in the ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"npm I mocha @types/mocha -D"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the TypeScript path alias is used in the project, please refer to: ","[Test]","(../testing# Configuration-alias-paths)")),(0,i.kt)("h2",{id:"cov-command"},"Cov command"),(0,i.kt)("p",null,"Start the test with the current directory and output the coverage information. By default, the jest tool is used. You can use the -- mocha parameter to specify mocha."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin cov --ts\n")),(0,i.kt)("p",null,"When using mocha for single-test coverage, you need to install the following additional dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i mocha @types/mocha nyc --save-dev\n")),(0,i.kt)("h2",{id:"check-command"},"Check command"),(0,i.kt)("p",null,"Automatically analyze the problems in the code and give repair suggestions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin check\n")),(0,i.kt)("p",null,"Verification of ",(0,i.kt)("inlineCode",{parentName:"p"},"32")," issues has been provided."),(0,i.kt)("h2",{id:"build-command"},"build command"),(0,i.kt)("p",null,"Use mwcc(tsc) to compile ts code, which is suitable for standard projects. Please use package for Serverless projects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin build -c\n\n  -c, -- clean Cleanup Build Results Directory\n  -- srcDir source code directory, default src\n  -- outDir builds the output directory, which defaults to outDir or dist in the tsconfig.\n  -tsConfig tsConfig json string or file location\n  -buildCache Preserve Build Cache\n")),(0,i.kt)("h2",{id:"deploy-command"},"deploy command"),(0,i.kt)("p",null,"Applicable to runtime when Serverless projects are released to Aliyun FC, Tencent SCF, Aws Lambda, etc."),(0,i.kt)("p",null,"Executing the deploy command automatically executes the package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin deploy\n\n  -Y, -- yes The confirmation released is yes\n  -- resetConfig reset release configuration, AK/AK/Region, etc.\n  -- serverlessDev Serverless Dev is used to publish aliyun fc functions. the default value is funcraft\n  ... all parameters compatible with package commands\n")),(0,i.kt)("h4",{id:"domain-name-configuration-when-the-function-is-published"},"Domain name configuration when the function is published"),(0,i.kt)("p",null,"If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"custom.customDomain")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml"),", a temporary automatic domain name is configured when you publish it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n     customDomain: auto\n")),(0,i.kt)("p",null,"If you want to cancel the automatic domain name, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"customDomain")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n    customDomain: false\n")),(0,i.kt)("p",null,"If there is a custom domain name, configure it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"customDomain"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"custom:\n    customDomain:\n    domainName: test.example.com\n")),(0,i.kt)("p",null,"If you need to use https for a custom domain name, you need to set the customDomain to false after configuring the https certificate in the cloud console to avoid resetting to http the next release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"custom:\n    customDomain: false\n")),(0,i.kt)("h4",{id:"each-route-is-deployed-as-a-function"},"Each route is deployed as a function"),(0,i.kt)("p",null,"You can use a high-density scheme and merge it into one function, f.yml plus the following configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"aggregation:\n  main:\n    functionsPattern:\n      -'*'\n")),(0,i.kt)("h4",{id:""}),(0,i.kt)("h4",{id:"aliyun-releases-ak-error-issue"},"aliyun releases AK error issue"),(0,i.kt)("p",null,"ak can be reset when aliyun is released for the first time or when the ",(0,i.kt)("inlineCode",{parentName:"p"},"-resetConfig")," parameter is used."),(0,i.kt)("p",null,"However, it should be noted that a new ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," group is created by default every time an ak is created. The group name is automatically generated when you modify the configuration. If you want to overwrite the previous AK, you need to manually enter it, as shown in the figure:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/128621/1645609990378-8a7f92c0-bda4-46e0-93a6-4d6feb6ec66d.png#clientId=u9f50c864-5385-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=122&id=u8a756167&margin=%5Bobject%20Object%5D&name=image.png&originHeight=122&originWidth=693&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17245&status=done&style=none&taskId=u3b825703-abe6-4a2b-ae5f-86a88027cf8&title=&width=693",alt:"image.png"})),(0,i.kt)("p",null,"The default group used when publishing is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". If you use ",(0,i.kt)("inlineCode",{parentName:"p"},"default-2")," as shown in the above figure when modifying the configuration, you need to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"default-2")," by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-- access")," parameter when publishing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"midway-bin deploy --access=default-2\n")),(0,i.kt)("h2",{id:"package-command"},"package command"),(0,i.kt)("p",null,"Applicable to Serverless project construction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ midway-bin package\n  -- npm npm client, the default is to automatically identify and add registry\n  -sourceDir the directory where the source code is located, which will be automatically analyzed by default.\n  -buildDir build result target directory\n  -- sharedTargetDir the target directory of shared files. The default is static. Refer to -- sharedDir parameters\n  -This directory will be copied to the $sharedTargetDir directory in the result directory when the sharedDir is built.\n  -skipZip skip zip packaging\n  -skipBuild skip ts code construction\n  -tsConfig tsConfig json string or file location\n  -function specify which functions to package, multiple in English, separated\n")),(0,i.kt)("h4",{id:"detailed-parameter-explanation"},"Detailed parameter explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-- function"),": Specify which functions to package. Multiple functions are separated in English.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"// Pack\nmidway-bin package --function=a, B ,c\n\n// Publish\nmidway-bin deploy --function=a, B ,c\n")),(0,i.kt)("h4",{id:"file-copy-logic-when-function-builds-packaging"},"File copy logic when function builds packaging"),(0,i.kt)("p",null,"The content copied by default contains all files that are not suffixed with ",(0,i.kt)("inlineCode",{parentName:"p"},".ts")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"backend code folder")," (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"src/apis")," for both front and back ends of faas), and all files with ",(0,i.kt)("inlineCode",{parentName:"p"},".js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".json"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".yml")," extensions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"project root directory"),", and all files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," folders."),(0,i.kt)("p",null,"If you want to copy additional files, you can specify it by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"include")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package")," field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," file, you can configure the file name, or you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fast-glob")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mrmlnc/fast-glob#pattern-syntax"},"syntax.\u2197"),"The following example shows how to use the match:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#... The display of other attributes has been omitted\n\npackage:\n  include: # Specify additional package file configuration by include attributes\n    -static# static folder under the root directory of the project\n    -a.json# a.json file under the root directory of the project\n    -a/B/c.js# c.js file under directory a under directory B under the root directory of the project\n    -a/B/c.json# c.js file under directory a under directory B under the root directory of the project\n    -xxx/**/*.js# All js files in xxx directory under the root directory of the project\n")),(0,i.kt)("h2",{id:"experimental-function"},"Experimental function"),(0,i.kt)("p",null,"Turn on the experimental function by ",(0,i.kt)("inlineCode",{parentName:"p"},"experimentalFeatures")," configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")),(0,i.kt)("h3",{id:"1-ignoretserror"},"1. ignoreTsError"),(0,i.kt)("p",null,"Ignoring ts error during build without interrupting the build process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"experimentalFeatures:\n    ignoreTsError: true\n")),(0,i.kt)("h3",{id:"2-removeuselessfiles"},"2. removeUselessFiles"),(0,i.kt)("p",null,"Removing a large number of invalid files, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*.ts.map"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"**/test/")," files, can effectively reduce the size of the build package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"experimentalFeatures:\n    removeUselessFiles: true\n")),(0,i.kt)("h3",{id:"3-fastinstallnodemodules"},"3. fastInstallNodeModules"),(0,i.kt)("p",null,"Selecting production dependencies from the current devDependencies for publishing at build time may significantly improve the publishing speed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"experimentalFeatures:\n    fastInstallNodeModules: true\n")),(0,i.kt)("h2",{id:"cli-extension"},"CLI extension"),(0,i.kt)("h3",{id:"1-life-cycle-expansion"},"1. Life cycle expansion"),(0,i.kt)("p",null,"Users can add ",(0,i.kt)("inlineCode",{parentName:"p"},"midway-integration")," fields to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to extend cli's behavior according to the life cycle of each command."),(0,i.kt)("p",null,"For example, add custom logic after the package command ",(0,i.kt)("inlineCode",{parentName:"p"},"installDevDep"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "midway-integration": {\n    "lifecycle": {\n        "after:package:installDevDep": "npm run build"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"The format of the ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycle")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"${ 'before' | 'after' | ''}:${ command }:${ command life cycle}"),"."),(0,i.kt)("p",null,"List of declaration cycles for package commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," 'cleanup', // Clean up the build directory\n 'installDevDep', // installation and development period dependency\n CopyFile', // copy file: package.include and shared content\n 'compile', //\n 'emit', // compile function' package:after:tscompile'\n 'analysisCode', // analysis code\n 'copyStaticFile', // Copy static files in src to the dist directory, such as html, etc.\n 'checkAggregation', // Detect high-density deployments\n 'generateSpec', // Generate the description file of the corresponding platform, such as serverless.yml, etc.\n 'generateEntry', // Generate the portal file for the corresponding platform\n 'installLayer', // Install layer\n 'installDep', // installation dependency\n 'package', // function packaging\n 'finalize', // complete\n")),(0,i.kt)("h3",{id:"2-extend-through-plug-ins"},"2. Extend through plug-ins"),(0,i.kt)("p",null,"Users can write cli plug-ins themselves to implement more complex cli behaviors through plug-ins, or add custom commands.\nCurrently, two plug-ins are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Npm plug-in, plug-in is an npm package"),(0,i.kt)("li",{parentName:"ul"},"Local plug-in, the plug-in is located locally."),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("p",null,"Cli loads the plug-in by configuring the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," field in the f.yml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  -npm::test-plugin-model\n  -local::./test/plugin\n")),(0,i.kt)("p",null,"The plugin configuration format is ",(0,i.kt)("inlineCode",{parentName:"p"},"${ 'npm' | 'local' }:${ provider | | ''}:${ pluginName | | path }")),(0,i.kt)("p",null,"Code reference for plug-ins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/index.ts\n\nimport { BasePlugin } from '@midwayjs/command-core';\n\nexport class TestLalalaPlugin extends BasePlugin {\n  commands = {\n    lalala: {\n      Usage: 'custom command',\n      lifecycleEvents: [\n        'a', // Custom Lifecycle\n        'b',\n      ],\n      // Not yet\n      options: {\n        name: {\n          usage: 'parameter name, for example: mw lalala -- name = 123',\n          shortcut: 'n', // parameter abbreviation\n        },\n      },\n    },\n  };\n\n  hooks = {\n        // Add the command lifecycle extension in the current plugin\n    // the life cycle of the lalala command\n    'lalala:a': async () => {\n\n      // Output\n        this.core.cli.log('lalala command hook');\n\n      // Get the parameters entered by the user.\n      this.core.cli.log(this.core.options);\n\n      // f.yml content\n      this.core.cli.log(this.core.service);\n\n      // Only the output under the-V parameter\n      this.core.debug('lalala');\n    },\n\n    // Add command lifecycle extensions in other plug-ins\n    // Execute \"before\" the copyFile life cycle of the package command\n    'before:package:copyFile': async () => {\n        console.log('package command hook');\n    },\n\n  };\n}\n")))}p.isMDXComponent=!0}}]);