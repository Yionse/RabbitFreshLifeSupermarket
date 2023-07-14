import { defineStore } from "pinia";
import { ref } from 'vue'; 

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

  return {
    cartList,
    addCart
  }
}, {
  persist: true
});