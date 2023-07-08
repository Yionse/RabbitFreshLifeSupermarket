import { createApp } from 'vue'
import { createPinia } from 'pinia'

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

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount('#app');