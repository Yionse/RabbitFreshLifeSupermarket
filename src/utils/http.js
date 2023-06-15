// 导入axios
import axios from "axios";

// 获取一个实例
const httpInstance = axios.create({
  // 配置整个项目的请求基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 配置请求的超时时间
  timeout: 5000
});

// 配置拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config;
}, e => Promise.reject(e));

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e);
});

// 采用默认暴露的方式，供其他组件使用
export default httpInstance;