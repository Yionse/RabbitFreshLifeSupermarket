import httpInstance from "@/utils/http";

export function getCategoryList(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  });
}

export function getCategorySubFilterLIst(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  });
}