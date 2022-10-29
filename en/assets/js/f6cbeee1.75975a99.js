"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12535],{74641:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"release/3.7.0","metadata":{"permalink":"/en/blog/release/3.7.0","source":"@site/blog/2022-10-29-release-3-7.md","title":"Release 3.7.0","description":"Features","date":"2022-10-29T00:00:00.000Z","formattedDate":"October 29, 2022","tags":[{"label":"release","permalink":"/en/blog/tags/release"}],"readingTime":2.07,"hasTruncateMarker":false,"authors":[{"name":"Harry Chen","title":"Maintainer of Midway","url":"https://github.com/czy88840616","imageURL":"https://avatars.githubusercontent.com/u/418820","key":"harry"}],"frontMatter":{"slug":"release/3.7.0","title":"Release 3.7.0","authors":["harry"],"tags":["release"]},"nextItem":{"title":"Jest v29 \u66f4\u65b0","permalink":"/en/blog/jest_update"}},"content":"## Features\\n\\n### 1\u3001\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u7684 web \u53c2\u6570\u88c5\u9970\u5668\\n\\n\u5728 Web \u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u6709 `@Query`\uff0c`@Body` \u7b49\u53c2\u6570\u88c5\u9970\u5668\uff0c\u4f46\u662f\u7528\u4e8e\u4f9d\u65e7\u6709\u81ea\u5b9a\u4e49\u7684\u9700\u6c42\uff0c\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u901a\u8fc7\u73b0\u6709\u7684\u53c2\u6570\u88c5\u9970\u5668\u53bb\u5b9a\u4e49\u4f1a\u8f83\u4e3a\u7e41\u7410\u3002\\n\\n\u65b0\u7248\u672c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5feb\u901f\u5b9a\u4e49\u88c5\u9970\u5668\u7684\u80fd\u529b\uff0c\u4ece\u800c\u53ef\u4ee5\u5feb\u901f\u83b7\u53d6 ctx \u5c5e\u6027\u3002\\n\\n```typescript\\nimport { createRequestParamDecorator } from \'@midwayjs/core\';\\n\\n// \u5b9e\u73b0\u88c5\u9970\u5668\\nexport const Token = createRequestParamDecorator(ctx => {\\n  return ctx.headers.token;\\n});\\n\\n// \u4f7f\u7528\u88c5\u9970\u5668\\nexport class UserController {\\n  async invoke(@Token() token: string) {\\n    console.log(token);\\n  }\\n}\\n```\\n\\n### 2\u3001koa \u7ec4\u4ef6\u65b0\u589e `serverTimeout` \u914d\u7f6e\\n\\n\u901a\u8fc7\u914d\u7f6e `serverTimeout` \u7684\u503c\uff0c\u53ef\u4ee5\u5b9a\u4e49\u670d\u52a1\u7aef\u8d85\u65f6\u65f6\u95f4\u3002\\n\\n\u6bd4\u5982 1s \u8d85\u65f6\u3002\\n\\n```typescript\\nexport const koa = {\\n  serverTimeout: 1000,\\n}\\n```\\n\\n### 3\u3001\u591a\u6570\u636e\u6e90\u65f6\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u6e90\u7684\u9009\u9879\\n\\n\u539f\u6709 typeorm \u7b49\u6570\u636e\u5e93\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u4f1a\u9ed8\u8ba4\u4ee5\u6700\u540e\u4e00\u4e2a\u914d\u7f6e\u7684\u6570\u636e\u6e90\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\u3002\\n\\n\u9ed8\u8ba4\u6570\u636e\u6e90\u5728 `InjectEntityModel` \u65f6\u53ef\u4ee5\u4e0d\u6307\u5b9a\u540d\u5b57\u3002\\n\\n\u65b0\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u663e\u5f0f\u7684\u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u4f7f\u5f97\u8fd9\u4e2a\u884c\u4e3a\u66f4\u53ef\u63a7\u3002\\n\\n\u6bd4\u5982\uff1a\\n\\n```typescript\\n// config.default.ts\\nexport const typeorm = {\\n  dataSource: {\\n    abc: {},\\n    bcd: {}\\n  },\\n  defaultDataSourceName: \'bcd\',\\n}\\n```\\n\\n\u8fd9\u6837\u5728\u4f7f\u7528\u65f6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a `InjectEntityModel` \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5219\u4f1a\u5728 `bcd` \u8fd9\u4e2a dataSource \u4e2d\u67e5\u8be2 Entity\u3002\\n\\n\\n\\n### 3\u3001\u65b0\u589e\u4e86\u9a8c\u8bc1\u7801\u7ec4\u4ef6\\n\\n\\n\u901a\u8fc7\u65b0\u589e\u7684\u9a8c\u8bc1\u7801\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u751f\u6210\u5728\u767b\u5f55\u4e2d\u5e38\u89c1\u7684\u56fe\u7247\uff0c\u8ba1\u7b97\u8868\u8fbe\u5f0f\u7b49\u7c7b\u578b\u7684\u9a8c\u8bc1\u7801\u3002\\n\\n\u6548\u679c\u5982\u4e0b\uff1a\\n\\n![](https://gw.alicdn.com/imgextra/i4/O1CN014cEzLH23vEniOgoyp_!!6000000007317-2-tps-120-40.png)\\n\\n\\n## \u5176\u4ed6\u7684\u66f4\u65b0\\n\\n- **prometheus** \u652f\u6301\u7528\u6237\u5b9a\u4e49 Histogram\\n- **faas** \u8c03\u6574\u4e86 `triggerFunction` \u65b9\u6cd5\u7684\u53c2\u6570\\n- \u5e38\u6001\u5316\u4f9d\u8d56\u5347\u7ea7"},{"id":"jest_update","metadata":{"permalink":"/en/blog/jest_update","source":"@site/blog/2022-10-29-update-jest.md","title":"Jest v29 \u66f4\u65b0","description":"\u6700\u8fd1\u7531\u4e8e axios \u7ec4\u4ef6\u7684\u5347\u7ea7\uff0c\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u62a5\u9519\u3002","date":"2022-10-29T00:00:00.000Z","formattedDate":"October 29, 2022","tags":[{"label":"\u66f4\u65b0","permalink":"/en/blog/tags/\u66f4\u65b0"},{"label":"jest","permalink":"/en/blog/tags/jest"}],"readingTime":0.5,"hasTruncateMarker":false,"authors":[{"name":"Harry Chen","title":"Maintainer of Midway","url":"https://github.com/czy88840616","imageURL":"https://avatars.githubusercontent.com/u/418820","key":"harry"}],"frontMatter":{"slug":"jest_update","title":"Jest v29 \u66f4\u65b0","authors":["harry"],"tags":["\u66f4\u65b0","jest"]},"prevItem":{"title":"Release 3.7.0","permalink":"/en/blog/release/3.7.0"},"nextItem":{"title":"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd","permalink":"/en/blog/core-decorator-merge"}},"content":"\u6700\u8fd1\u7531\u4e8e axios \u7ec4\u4ef6\u7684\u5347\u7ea7\uff0c\u4f1a\u51fa\u73b0\u4e0b\u9762\u7684\u62a5\u9519\u3002\\n\\n![](https://img.alicdn.com/imgextra/i2/O1CN01G4Ze0F1qVxwcNwYeF_!!6000000005502-2-tps-2080-1158.png)\\n\\n\u539f\u56e0\u4e3a\u811a\u624b\u67b6\u81ea\u5e26\u7684 jest v26 \u4e0d\u652f\u6301 package.json \u4e2d\u7684 `exports` \u903b\u8f91\u3002\\n\\n\u89e3\u51b3\u65b9\u6cd5\uff1a\\n\\n- 1\u3001\u5c06 `package.json` \u4e2d\u7684 jest \u7248\u672c\u4ece v26 \u66f4\u65b0\u4e3a v29\\n- 2\u3001\u5c06 `@midwayjs/cli` \u7684\u7248\u672c\u5347\u7ea7\u4e3a `1.3.16` \u7248\u672c\u4ee5\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u5347\u7ea7\u5230 `2.0`\\n\\n\u793a\u4f8b\u5982\u4e0b\uff1a\\n\\n```json\\n{\\n  \\"devDependencies\\": {\\n    \\"@midwayjs/cli\\": \\"^2.0.1\\",\\n    \\"@types/jest\\": \\"^29.2.0\\",\\n    \\"jest\\": \\"^29.2.2\\",\\n    \\"ts-jest\\": \\"^29.0.3\\",\\n    // ...\\n  }\\n}\\n```"},{"id":"core-decorator-merge","metadata":{"permalink":"/en/blog/core-decorator-merge","source":"@site/blog/2022-10-26-core-decorator-merge.md","title":"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd","description":"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u5728\u4ee3\u7801\u5c42\u9762\u5c06 @midwayjs/decorator \u4e2d\u7684\u4ee3\u7801\u8fc1\u79fb\u5230\u4e86 @midwayjs/core \u4e2d\uff0c\u672a\u6765 @midwayjs/decorator \u5305\u5c06\u9010\u6b65\u51cf\u5c11\u4f7f\u7528\u3002","date":"2022-10-26T00:00:00.000Z","formattedDate":"October 26, 2022","tags":[{"label":"decorator","permalink":"/en/blog/tags/decorator"},{"label":"core","permalink":"/en/blog/tags/core"}],"readingTime":0.625,"hasTruncateMarker":false,"authors":[{"name":"Harry Chen","title":"Maintainer of Midway","url":"https://github.com/czy88840616","imageURL":"https://avatars.githubusercontent.com/u/418820","key":"harry"}],"frontMatter":{"slug":"core-decorator-merge","title":"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd","authors":["harry"],"tags":["decorator","core"]},"prevItem":{"title":"Jest v29 \u66f4\u65b0","permalink":"/en/blog/jest_update"},"nextItem":{"title":"Release 3.6.0","permalink":"/en/blog/release/3.6.0"}},"content":"\u4ece v3.6.0 \u5f00\u59cb\uff0cMidway \u5728\u4ee3\u7801\u5c42\u9762\u5c06 `@midwayjs/decorator` \u4e2d\u7684\u4ee3\u7801\u8fc1\u79fb\u5230\u4e86 `@midwayjs/core` \u4e2d\uff0c\u672a\u6765 `@midwayjs/decorator` \u5305\u5c06\u9010\u6b65\u51cf\u5c11\u4f7f\u7528\u3002\\n\\n`@midwayjs/decorator` \u4e2d\u7684\u4ee3\u7801\u5168\u90e8\u4ece `@midwayjs/core` \u4e2d\u4ee3\u7406\u51fa\u6765\uff0c\u4ee3\u7801\u5c42\u9762\u4fdd\u6301\u5411\u4e0b\u517c\u5bb9\u3002\\n\\n\u6700\u8fd1\u53d1\u73b0\u6709\u4e9b\u7528\u6237\u4f1a\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u7684\u62a5\u9519\uff1a\\n\\n![](https://img.alicdn.com/imgextra/i3/O1CN01ZUf1P31oSBRQlBEhv_!!6000000005223-0-tps-3148-554.jpg)\\n\\n\u539f\u56e0\u4e3a v2 \u7684\u7248\u672c\u4f7f\u7528\u4e86 v3 \u7684\u7ec4\u4ef6\uff0cv2 \u548c v3 \u7684\u7ec4\u4ef6\u4e0d\u4fdd\u8bc1\u80fd\u5b8c\u5168\u517c\u5bb9\uff0c\u8bf7\u5728\u5b89\u88c5\u65f6\u505a\u597d\u533a\u5206\u3002\\n\\n\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528 v2 \u7248\u672c\u7684\u7ec4\u4ef6\u3002"},{"id":"release/3.6.0","metadata":{"permalink":"/en/blog/release/3.6.0","source":"@site/blog/2022-10-12-release-3-6.md","title":"Release 3.6.0","description":"v.3.6.0 \u5305\u542b\u4e00\u4e2a\u91cd\u5927\u7684 \u91cd\u6784\uff0c\u6211\u4eec\u5c06 @midwayjs/decorator \u5305\u548c @midwayjs/core \u5305\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u672a\u6765\u6240\u6709\u7684 decorator \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u90fd\u4f1a\u7531 @midwayjs/core \u5bfc\u51fa\uff0c@midwayjs/decorator \u5305\u4ec5\u505a\u4ee3\u7406\uff0c\u4fdd\u6301\u529f\u80fd\u517c\u5bb9\u3002","date":"2022-10-12T00:00:00.000Z","formattedDate":"October 12, 2022","tags":[{"label":"release","permalink":"/en/blog/tags/release"}],"readingTime":2.19,"hasTruncateMarker":false,"authors":[{"name":"Harry Chen","title":"Maintainer of Midway","url":"https://github.com/czy88840616","imageURL":"https://avatars.githubusercontent.com/u/418820","key":"harry"}],"frontMatter":{"slug":"release/3.6.0","title":"Release 3.6.0","authors":["harry"],"tags":["release"]},"prevItem":{"title":"core \u548c decorator \u5305\u5408\u5e76\u7684\u5f71\u54cd","permalink":"/en/blog/core-decorator-merge"}},"content":"v.3.6.0 \u5305\u542b\u4e00\u4e2a\u91cd\u5927\u7684 [\u91cd\u6784](https://github.com/midwayjs/midway/issues/2258)\uff0c\u6211\u4eec\u5c06 @midwayjs/decorator \u5305\u548c @midwayjs/core \u5305\u7684\u5185\u5bb9\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u672a\u6765\u6240\u6709\u7684 decorator \u76f8\u5173\u7684\u5185\u5bb9\uff0c\u90fd\u4f1a\u7531 @midwayjs/core \u5bfc\u51fa\uff0c@midwayjs/decorator \u5305\u4ec5\u505a\u4ee3\u7406\uff0c\u4fdd\u6301\u529f\u80fd\u517c\u5bb9\u3002\\n\u540e\u7eed\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u6587\u6863\u4e0a\u8fdb\u884c decorator \u5305\u7684\u79fb\u9664\u64cd\u4f5c\uff0c\u5728\u8fd9\u6bb5\u65f6\u95f4\u4e2d\uff0c\u5927\u5bb6\u8fd8\u662f\u4f1a\u770b\u5230 decorator \u548c core \u5e76\u5b58\u7684\u60c5\u51b5\u3002\\n\\n## Features\\n\\n### 1\u3001\u5b88\u536b\\n\\n\u4ece v3.6.0 \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5b88\u536b\u80fd\u529b\uff0c\u548c middleare\uff0cfilter \u7c7b\u4f3c\uff0c\u4e5f\u662f\u4e00\u4e2a\u5168\u6846\u67b6\u590d\u7528\u7684\u80fd\u529b\uff08koa/egg/grpc/rabbitmq/bull \u7b49\uff09\\n\\n```typescript\\nimport { IMiddleware, Guard, IGuard } from \'@midwayjs/core\';\\nimport { Context } from \'@midwayjs/koa\';\\n\\n@Guard()\\nexport class AuthGuard implements IGuard<Context> {\\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\\n    // ...\\n  }\\n}\\n```\\n\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b [\u6587\u6863](https://midwayjs.org/docs/guard)\u3002\\n\\n\\n### 2\u3001\u9274\u6743\\n\\n\u57fa\u4e8e\u5b88\u536b\u529f\u80fd\u7684\u5b8c\u6210\uff0c\u6211\u4eec\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49 @Role \u88c5\u9970\u5668\u6765\u5b8c\u6210\u7b80\u5355\u7684\u89d2\u8272\u9274\u6743\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u5c01\u88c5\u4e86 casbin \u8fd9\u4e00\u5728\u793e\u533a\u8f83\u4e3a\u901a\u7528\u7684\u9274\u6743\u7ec4\u4ef6\uff0c\u65b9\u4fbf\u5927\u5bb6\u4f7f\u7528\u3002\\n\\n\u6bd4\u5982\uff0c\u901a\u8fc7\u88c5\u9970\u5668\u9274\u6743\u3002\\n\\n\\n```typescript\\nimport { Controller, Get, UseGuard } from \'@midwayjs/decorator\';\\nimport { AuthActionVerb, AuthGuard, AuthPossession, UsePermission } from \'@midwayjs/casbin\';\\nimport { Resource } from \'./resouce\';\\n\\n@Controller(\'/\')\\nexport class HomeController {\\n\\n  @UseGuard(AuthGuard)\\n  @UsePermission({\\n    action: AuthActionVerb.READ,\\n    resource: Resource.USER_ROLES,\\n    possession: AuthPossession.ANY\\n  })\\n  @Get(\'/users\')\\n  async findAllUsers() {\\n    // ...\\n  }\\n}\\n```\\n\\ncasbin \u7ec4\u4ef6\u76ee\u524d\u5b9e\u73b0\u4e86 redis \u548c typeorm \u4e24\u4e2a\u53ef\u4ee5\u590d\u7528\u7684\u9002\u914d\u5668\u4f9b\u5927\u5bb6\u9009\u62e9\uff0c\u5982\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u989d\u5916\u8fdb\u884c\u9002\u914d\u3002\\n\\n\u66f4\u591a\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b [\u6587\u6863](https://midwayjs.org/docs/extensions/casbin)\u3002\\n\\n### 3\u3001bull \u7ec4\u4ef6\\n\\n\u6211\u4eec\u65b0\u589e\u4e86 bull \u7ec4\u4ef6\u7528\u4e8e\u66ff\u4ee3\u539f\u6709\u7684 task \u7ec4\u4ef6\u3002\\n\\n```typescript\\n// invoke\\nconst testQueue = this.bullFramework.getQueue(\'test\');\\n// \u7acb\u5373\u6267\u884c\u8fd9\u4e2a\u4efb\u52a1\\nawait testQueue?.runJob({\\n  aaa: 1,\\n  bbb: 2,\\n});\\n```\\n\\n\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a bull-board \u7ec4\u4ef6\u7528\u4e8e\u7ba1\u7406\u3002\\n\\n![](https://cdn.nlark.com/yuque/0/2022/png/501408/1665641044268-8ebfc3bb-777b-43f8-a8d9-bfb77f95e47c.png)\\n\\n\u66f4\u591a\u7ec6\u8282\uff0c\u53ef\u4ee5\u67e5\u770b \u6587\u6863\u3002\\n\\n\u66f4\u591a\u4ecb\u7ecd\u53ef\u4ee5\u67e5\u770b\u6211\u4eec\u7684 [b \u7ad9\u89c6\u9891](https://www.bilibili.com/video/BV1ZB4y1j7H3/)"}]}')}}]);