import { defineStore } from "pinia";
import { ref } from 'vue';
import { loginApi } from '@/apis/userApis';
import { useCartStore } from "./cart";

export const useUserInforStore = defineStore('useUserInforStore', () => {
  // 定义数据
  const userInfo = ref({});
  // 定义action
  const getUserInfo = async (account, password) => {
    const res = await loginApi(account, password);
    userInfo.value = res.result;
  }
  // 退出登录操作
  const clearUserInfo = () => {
    userInfo.value = {};
    const cartStore = useCartStore();
    cartStore.clearCart();
  }
  // 返回
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {  //  配置Pinia中的数据持久化存储
  persist: true
});