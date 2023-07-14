import { defineStore } from "pinia";
import { computed, ref } from 'vue'; 
import { useUserInforStore } from "./user";
import { addCartApi, getNewCartListApi } from '@/apis/cartApis';

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([]);

  // 获取用户信息
  const userStore = useUserInforStore();

  // 是否登录
  const isLogin = userStore.userInfo.token;

  // 定义添加到购物车操作
  const addCart = async (goods) => {
    const { skuId, count } = goods;
    if (isLogin) {
      await addCartApi(skuId, count);
      const res = await getNewCartListApi();
      cartList.value = res.result;
    }else {
      const item = cartList.value.find(item => item.skuId === goods.skuId); 
      if (item) {
        // 找到了刚商品，数量加1
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    }
  }

  // 删除购物车中的数据
  const delCart = (skuId) => {
    // 获取当前元素的下标值，然后删除
    const idx = cartList.value.findIndex(item => skuId === item.skuId);
    cartList.value.splice(idx, 1);
  }

  // 单选功能
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find(item => skuId === item.skuId);
    item.selected = selected;
  }

  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected);
  }

  // 计算出商品总量
  const allCount = computed(() => cartList.value.reduce((count, item) => count + item.count , 0));
  // 计算出商品总价
  const allPrice = computed(() => cartList.value.reduce((price, item) => price + item.count * item.price , 0));
  // 计算当前是否全部选中
  const isAll = computed(() => cartList.value.every(item => item.selected));
  // 计算选中商品的数量
  const checkCount = computed(() => cartList.value.filter(item => item.selected).reduce((count, item) => count + item.count , 0));
  // 计算选中商品的价格
  const checkPrice = computed(() => cartList.value.filter(item => item.selected).reduce((price, item) => price + item.count * item.price , 0));
  return {
    cartList,
    allCount,
    allPrice,
    singleCheck,
    addCart,
    delCart,
    isAll,
    allCheck,
    checkPrice,
    checkCount
  }
}, {
  persist: true
});