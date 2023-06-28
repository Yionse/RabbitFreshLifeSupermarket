// banner相关
import { ref, onMounted } from 'vue';
import { getBannerList } from '@/apis/homeApis';

export function useBanner() {
  // banner
  let bannerList = ref([]);

  const getBannerListData = async () => {
    const res = await getBannerList({distributionSite: '2'});
    bannerList.value = res.result;
  }

  onMounted(() => getBannerListData())

  return {
    bannerList
  }
}