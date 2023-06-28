import httpInstance from "@/utils/http";

export function getCategoryList(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  });
}