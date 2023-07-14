import httpInstance from "@/utils/http";

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

export const getNewCartListApi = () => {
  return httpInstance({
    url: '/member/cart'
  });
}