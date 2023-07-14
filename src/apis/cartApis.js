import httpInstance from "@/utils/http";

// 添加到购物车
export const addCartApi = (skuId, count) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  });
}

// 获取最新列表
export const getNewCartListApi = () => {
  return httpInstance({
    url: '/member/cart'
  });
}

// 删除购物车中的数据
export const delCartListApi = (ids) => {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  });
}