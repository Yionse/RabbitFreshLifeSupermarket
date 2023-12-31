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
  console.log('apis中的接口');
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  });
}

// 合并购物车
export const mergeCartListApi = (data) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  });
}