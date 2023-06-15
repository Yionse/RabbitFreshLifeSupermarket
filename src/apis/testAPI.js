// 测试刚才封装好的axios

// 导入axios实例
import httpInstance from "@/utils/http";

// 采用分别暴露的形式，暴露一个测试函数
export function getTestData() {
  return httpInstance({
    // 配置本次请求的接口地址
    url: 'home/category/head'
  });
}