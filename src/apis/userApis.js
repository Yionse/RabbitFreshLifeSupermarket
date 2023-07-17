import httpInstance from '@/utils/http';

export function loginApi( account, password ) {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  });
} 

export const getLikeListAPI = (limit = 4) => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      // 获取数据的条数，我这里直接写成4了，也可以选择自己传
      limit
    }
  });
}