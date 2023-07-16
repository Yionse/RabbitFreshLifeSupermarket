import httpInstance from "@/utils/http";

// 获取当前订单信息
export const getCheckoutInfoApi = () => {
  return httpInstance({
    url: '/member/order/pre'
  });
}

// 提交订单获取的Id
export const getOrderIdApi = (data) => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  });
}