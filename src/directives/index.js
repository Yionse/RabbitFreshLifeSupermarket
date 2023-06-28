import { useIntersectionObserver} from '@vueuse/core';

export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el为添加了自定以指令的那个对象，binding为绑定后面的值，是一个对象，value属性最常用
        const { stop } = useIntersectionObserver(
          // 返回一个函数，该函数的作用可以在调用后，停止监视，从而达到性能提升
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              el.src = binding.value;
              stop();
            }
          },
        );
      },
    });
  }
};