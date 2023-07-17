// 这里区别于Vue2中的router写法，由于vue-router3版本用于Vue2版本，而vue-router4版本适用于vue3
// 注意的是，不需要特别配置，当使用vite创建项目时，只需要将router选项，设置为yes，则会自动配置

// createRouter用于获得一个router实例
// createWebHistory用来创建History模式的路由，路由模式分为hash和History，
import { createRouter, createWebHistory } from 'vue-router';

// 创建router实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 配置路由规则 
    {
      path: '/',
      // 这里采用了动态组件的方法，提高性能
      component: () => import("@/views/Layout/index.vue"),
      // 配置二级路由
      children: [
        {
          // 如果路径为空的话，则访问根路径时，也将该组件展示
          path: '',
          component: () => import('@/views/Home/index.vue')
        }, {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue'),
        }, {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue')
        }, {
          path: 'detail/:id',
          component: () => import("@/views/Detail/index.vue")
        }, {
          path: 'cartList',
          component: () => import("@/views/CartList/index.vue")
        }, {
          path: 'checkout',
          component: () => import("@/views/Checkout/index.vue")
        }, {
          path: 'pay',
          component: () => import("@/views/Pay/index.vue")
        }, {
          path: 'member',
          component: () => import("@/views/Member/index.vue"),
          // 配置三级路由
          children: [
            {
              path: 'user',
              component: () => import("@/views/Member/components/UserInfo.vue")
            }, {
              path: 'order',
              component: () => import("@/views/Member/components/UserOrder.vue")
            }
          ]
        }
      ]
    },{
      path: '/login',
      component: () => import("@/views/Login/index.vue")
    }
  ],
  // 路由滚动行为的优化，每次路由跳转时，到顶端的距离都是0
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

// 默认暴露
export default router