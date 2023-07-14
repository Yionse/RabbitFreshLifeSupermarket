import { defineStore } from "pinia";
import { ref } from 'vue';
import { loginApi } from '@/apis/userApis';
import { useCartStore } from "./cart";
import { mergeCartListApi } from '@/apis/cartApis';

export const useUserInforStore = defineStore('useUserInforStore', () => {
  const cartStore = useCartStore();
  // 定义数据
  const userInfo = ref({});
  // 定义action
  const getUserInfo = async (account, password) => {
    const res = await loginApi(account, password);
    userInfo.value = res.result;
    await mergeCartListApi(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }));
    cartStore.getNewCartList();
  }
  // 退出登录操作
  const clearUserInfo = () => {
    userInfo.value = {};
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