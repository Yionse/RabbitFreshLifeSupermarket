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

![one](..\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\two.png)

## 接口详解

![one](..\ProjectDescriptionPicture\RabbitFreshLifeSupermarket\three.png)

# 组件详解

## 