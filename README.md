# vue3-rabbitSupermarket

- 一个使用Vue3+Vite+ElementPlus开发的商城项目，项目来源：B站

## 项目运行

### 先将代码克隆至本地仓库

```sh
npm clone https://github.com/Yionse/RabbitFreshLifeSupermarket.git
```

### 安装所需依赖包

- 这里需要注意一点，可能安装项目时，由于本地Node版本不一样，可能会导致警告等。另外也会由于各种插件，包跟本地版本不一样，导致各种各样的警告，自己自行百度即可

```sh
npm i
```

### 运行

```sh
npm run dev
```

## 目录结构

--	.vscode	不需要管

--	public		公共文件

--	src			  项目源文件

​	----	apis		所有封装好的请求文件夹

​	----	assets		公共资源

​	----	components		所使用到的公共组件

​	----	composables		自定义封装的功能插件

​	----	directives		自己封装的自定义指令

​	----	router		路由信息

​	----	stores		Pinia管理

​	----	styles		公共样式

​	----	utils		工具，其中主要包含了http请求所需的httpInstances

​	----	views		路由组件

--	.gitignore	git忽略文件

--	README.md	说明文档

--	index.html	项目根页面

--	jsconfig.json	配置统一的根目录，这里用的@ 符

--	package-lock.json	项目包的说明

--	package.json	项目依赖及包版本

--	vite.config.json	vite的配置文件

## 所使用到的技术栈

![one](..\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\one.png)

## 路由详解

![Image](https://github.com/Yionse/ProjectDescriptionPicture/blob/main/RabbitFreshLifeSupermarket/four.png)

## 接口详解

![one](..\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\three.png)

# 组件详解

## LayoutNav

- ![one](..\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\four.png)
- 有两种状态，登录与未登录
- ![image-20230717175058248](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175058248.png)
- ![image-20230717175213328](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175213328.png)

## LayoutHeader

- ![image-20230717175245698](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175245698.png)
- 这里还有另外一个组件，是当夜间 滑动时固定在上面部分的，类似于该组件，且 接口也是同一个，区别是这里有一个购物车按钮
- ![image-20230717175343450](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175343450.png)
- ![image-20230717175434415](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175434415.png)

## LayoutFooter

- 底部组件，没有什么交互
- ![image-20230717175522024](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175522024.png)

## HeaderCart

- nav中的小购物车图标
- <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175630248.png" alt="image-20230717175630248" style="zoom:67%;" />
- <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175842492.png" alt="image-20230717175842492" style="zoom:50%;" />

## Login

- 登录页
- 账号密码
  - 账号heima282，好像可以一直到heima290
  - 密码都是hm#qd@23!
- ![image-20230717175951114](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717175951114.png)
- 配置自定义的校验规则
  - ![image-20230717180027987](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717180027987.png)
- 进行登录验证
  - ![image-20230717180103766](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717180103766.png)

## Detail

- 详情页
  - ![image-20230717182648646](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182648646.png)
- 面包屑导航
  - ![image-20230717182728962](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182728962.png)
  - ![image-20230717182735011](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182735011.png)
- SKU组件
  - ![image-20230717182753049](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182753049.png)
- 热榜
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182808104.png" alt="image-20230717182808104" style="zoom:67%;" />
- 加入购物车调用接口
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182828986.png" alt="image-20230717182828986" style="zoom:50%;" />

## CartList

- 购物车页面
  - ![image-20230717182935042](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182935042.png)
- 采用封装好的Store进行状态管理
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717182948179.png" alt="image-20230717182948179" style="zoom:50%;" />
- 利用Computed计算出属性，进行展示
  - ![image-20230717183050345](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183050345.png)

## Checkout

- 提交订单界面
  - ![image-20230717183116173](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183116173.png)
- 可以进行地址切换
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183129599.png" alt="image-20230717183129599" style="zoom: 50%;" />

## Pay

- 支付页
  - ![image-20230717183208473](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183208473.png)
  - 只有支付宝可以使用
- 使用的是虚拟支付，但现在已经无法支付了，所以只能到这一步

# Store详解

- cart.js
  - ![image-20230717183358009](D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183358009.png)
  - 与购物车相关的，添加，删除，全选，单选等
- category.js
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183455024.png" alt="image-20230717183455024" style="zoom:50%;" />
  - nav相关的，这里是为了不重复发两次请求，所以使用了Pinia
- user.js
  - <img src="D:\OneDrive\桌面\GitHub\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\image-20230717183547078.png" alt="image-20230717183547078" style="zoom:50%;" />
  - 用户相关的，存储了用户的信息，最下面的persist做了持久化存储，与笨比的LocalStorage同步

