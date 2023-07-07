import httpInstance from "@/utils/http";

export function getDetailApi(id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  });
}

export function getHotGoodsApi({id, type, limit = 3}) {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  });
}