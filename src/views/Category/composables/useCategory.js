// category相关
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { getCategoryList } from '@/apis/categoryApis';

export function useCategory() {
  let categoryData = ref({});

  const route = useRoute();

  const getCategoryListData = async (id = route.params.id) => {
    const res = await getCategoryList(id);
    categoryData.value = res.result;
  }

  onMounted(() => {
    getCategoryListData();
  })

  // 当切换路由时，重新获取数据
  onBeforeRouteUpdate((to) => {
    getCategoryListData(to.params.id);
  });

  return {
    categoryData
  }
}