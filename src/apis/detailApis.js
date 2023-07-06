import httpInstance from "@/utils/http";

export function getDetailApi(id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  });
}