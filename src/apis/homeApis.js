import httpInstance from "@/utils/http";

export function getBannerList(parmas = {}) {
  const { distributionSite = '1' } = parmas;
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  });
}

export function getNewList() {
  return httpInstance({
    url: '/home/new'
  });
}

export function getHotList() {
  return httpInstance({
    url: '/home/hot'
  });
}

export function getProductList() {
  return httpInstance({
    url: '/home/goods'
  });
}