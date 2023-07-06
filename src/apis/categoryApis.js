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

export function getSubCategoryDataList(data) {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  });
}