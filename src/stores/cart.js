import { defineStore } from "pinia";
import { computed, ref } from 'vue'; 

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([]);

  // 定义添加到购物车操作
  const addCart = (goods) => {
    const item = cartList.value.find(item => item.skuId === goods.skuId); 
    if (item) {
      // 找到了刚商品，数量加1
      item.count++;
    } else {
      cartList.value.push(goods);
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

  // 计算出商品总量
  const allCount = computed(() => cartList.value.reduce((count, item) => count + item.count , 0));
  // 计算出商品总价
  const allPrice = computed(() => cartList.value.reduce((price, item) => price + item.count * item.price , 0));

  return {
    cartList,
    allCount,
    allPrice,
    singleCheck,
    addCart,
    delCart
  }
}, {
  persist: true
});