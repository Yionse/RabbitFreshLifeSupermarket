// 定义nav列表内容的pinia
import { defineStore } from 'pinia';
// 导入获取数据的方法
import { getNavListData } from '@/apis/layoutApis';
import { ref } from 'vue';

export const useCategoryStore = defineStore('category', () => {
  const navList = ref([]);
  const getNavList = async () => {
    const res = await getNavListData();
    // console.log(res.result);
    // 将获取到的数据，赋值给定义好的响应式数据
    navList.value = res.result;
  }
  // 组合式API写法，将数据和方法暴露出去
  return {
    navList,
    getNavList
  }
});