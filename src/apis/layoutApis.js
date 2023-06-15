// 引入axios实例，发起请求
import httpInstance from "@/utils/http";

// 定义获取首页的nav导航栏的函数，并且以分别暴露的形式暴露出去
export function getNavListData() {
  return httpInstance({
    url: '/home/category/head'
  });
}