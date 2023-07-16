import  httpInstance  from '@/utils/http';

export const getOrderInfoApi = (id) => {
  return httpInstance({
    url: `/member/order/${id}`
  });
}