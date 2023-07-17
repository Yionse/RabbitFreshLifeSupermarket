import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 页面标题
import VueWechatTitle from 'vue-wechat-title'; 

import App from './App.vue'
import router from './router'

// 测试配置好的axios
// import { getTestData } from './apis/testAPI'
// getTestData();

// 引入初始化的样式
import "@/styles/common.scss";

// 引入全局指令
import { lazyPlugin } from './directives';
import { componentsPlugin } from './components';

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
app.use(VueWechatTitle)
app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount('#app');