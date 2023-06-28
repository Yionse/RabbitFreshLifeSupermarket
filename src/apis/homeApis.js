import httpInstance from "@/utils/http";

export function getBannerList() {
  return httpInstance({
    url: '/home/banner'
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