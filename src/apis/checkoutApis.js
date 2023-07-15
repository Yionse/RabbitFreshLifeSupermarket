import httpInstance from "@/utils/http";

export const getCheckoutInfoApi = () => {
  return httpInstance({
    url: '/member/order/pre'
  });
}