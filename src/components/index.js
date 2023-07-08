// 对通用组件进行插件化处理
import imgView from '@/components/imgView/index.vue';
import XtxSku from '@/components/XtxSku/index.vue';

export const componentsPlugin = {
  // install方法是必须得，可以接收到一个app参数
  install(app) {
    app.component('ImgView', imgView);
    app.component('XtxSku', XtxSku);
  }
};