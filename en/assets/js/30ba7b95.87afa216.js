"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90538],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),c=o,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},45033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const l={},a="Sequelize",i={unversionedId:"legacy/sequelize",id:"legacy/sequelize",title:"Sequelize",description:"This document is obsolete from v3.4.0.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/legacy/sequelize.md",sourceDirName:"legacy",slug:"/legacy/sequelize",permalink:"/en/docs/legacy/sequelize",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/legacy/sequelize.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Usage:",id:"usage",level:2},{value:"Install database Driver",id:"install-database-driver",level:2},{value:"Introduction module",id:"introduction-module",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Business layer",id:"business-layer",level:2},{value:"Define Entity",id:"define-entity",level:3},{value:"Use Entity:",id:"use-entity",level:3},{value:"Query list",id:"query-list",level:4},{value:"Delete:",id:"delete",level:4},{value:"Find individual:",id:"find-individual",level:4},{value:"Joint enquiries:",id:"joint-enquiries",level:4},{value:"table query",id:"table-query",level:4}],p={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sequelize"},"Sequelize"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This document is obsolete from v3.4.0.")),(0,o.kt)("p",null,"This document describes how to use Sequelize modules in Midway."),(0,o.kt)("p",null,"Related information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h2",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/sequelize@3 sequelize --save\n")),(0,o.kt)("p",null,"Or reinstall the following dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/sequelize": "^3.0.0",\n    "sequelize": "^6.13.0"\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"install-database-driver"},"Install database Driver"),(0,o.kt)("p",null,"The commonly used database drivers are as follows. Select the database type to install the corresponding connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# for MySQL or MariaDB, you can also use mysql2 instead\nnpm install mysql --save\nnpm install mysql2 --save\n\n# for PostgreSQL or CockroachDB\nnpm install pg --save\n\n# for SQLite\nnpm install sqlite3 --save\n\n# for Microsoft SQL Server\nnpm install mssql --save\n\n# for SQL .js\nnpm install SQL .js --save\n\n# for Oracle\nnpm install oracledb --save\n\n# for MongoDB(experimental)\nnpm install mongodb --save\n")),(0,o.kt)("h2",{id:"introduction-module"},"Introduction module"),(0,o.kt)("p",null,"In the configuration.ts file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { App, Configuration, ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/web';\nimport { join } from 'path';\nimport * as sequelize from '@midwayjs/sequelize';\n\n@Configuration({\n  imports: [sequelize]\n  importConfigs: [join(__dirname, './config')]\n})\nexport class ContainerLifeCycle implements ILifeCycle {\n  @App()\n  app: Application;\n\n  async onReady() {}\n}\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configure in config.default.ts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  sequelize: {\n    dataSource: {\n      default: {\n        database: 'test4',\n        username: 'root',\n        password: '123456',\n        Host: '127.0.0.1', // here supports the way key is vipserver above idb, and aliyun's address is also supported.\n        port: 3306\n        encrypt: false\n        dialect: 'mysql',\n        define: { charset: 'utf8'}\n        timezone: '+08:00',\n        logging: console.log\n      },\n    },\n    sync: false, // local, you can directly createTable it through sync: true\n  },\n};\n")),(0,o.kt)("h2",{id:"business-layer"},"Business layer"),(0,o.kt)("h3",{id:"define-entity"},"Define Entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';\nimport { BaseTable } from '@midwayjs/sequelize';\nimport { User } from './User';\n\n@BaseTable\nexport class Photo extends Model {\n  @ForeignKey(() => User)\n  @Column({\n    comment: 'User Id',\n  })\n  userId: number;\n  @BelongsTo(() => User) user: User;\n\n  @Column({\n    comment: 'name',\n  })\n  name: string;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Model, Column, HasMany } from 'sequelize-typescript';\nimport { BaseTable } from '@midwayjs/sequelize';\nimport { Photo } from './Photo';\n\n@BaseTable\nexport class User extends Model {\n  @Column name! : string;\n  @HasMany(() => Photo) Photo: Photo[];\n}\n")),(0,o.kt)("h3",{id:"use-entity"},"Use Entity:"),(0,o.kt)("h4",{id:"query-list"},"Query list"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Config, Controller, Get, Provide } from '@midwayjs/core';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Get('/')\n  async home() {\n    let result = await Photo.findAll();\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"Add data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Post, Provide } from '@midwayjs/core';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/add')\n  async home() {\n    let result = await Photo.create({\n      name: '123',\n    });\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("h4",{id:"delete"},"Delete:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Post, Provide } from '@midwayjs/core';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/delete')\n  async home() {\n    await Photo.destroy({\n      where: {\n        name: '123',\n      },\n    });\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("h4",{id:"find-individual"},"Find individual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Post, Provide } from '@midwayjs/core';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Post('/delete')\n  async home() {\n    let result = await Photo.findOne({\n      where: {\n        name: '123',\n      },\n    });\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("h4",{id:"joint-enquiries"},"Joint enquiries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Provide } from '@midwayjs/core';\nimport { Photo } from '../entity/Photo';\nimport { Op } from 'sequelize';\n\n@Provide()\n@Controller('/')\nexport class HomeController {\n  @Get('/')\n  async home() {\n    // SELECT * FROM photo WHERE name = \"23\" OR name = \"34\";\n    let result = await Photo.findAll({\n      where: {\n        [Op.or]: [{ name: '23' }, { name: '34' }],\n      },\n    });\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("h4",{id:"table-query"},"table query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Provide } from '@midwayjs/core';\nimport { User } from '../entity/User';\nimport { Photo } from '../entity/Photo';\n\n@Provide()\n@Controller('/users')\nexport class HomeController {\n  @Get('/')\n  async home() {\n    let result = await User.findAll({ include: [Photo] });\n    console.log(result);\n    return 'hello world';\n  }\n}\n")),(0,o.kt)("p",null,"More ways to use OP: ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/querying.html"},"https:// sequelize.org/v5/manual/querying.html")),(0,o.kt)("p",null,"Midway + sequelize Complete Use Case ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ddzyan/midway-practice"},"https:// github.com/ddzyan/midway-practice")),(0,o.kt)("p",null,"If you encounter more complicated ones, you can use the raw query method:\n",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/raw-queries.html"},"https://sequelize.org/v5/manual/raw-queries.html")))}d.isMDXComponent=!0}}]);