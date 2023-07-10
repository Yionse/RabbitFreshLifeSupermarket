import { defineStore } from "pinia";
import { ref } from 'vue';
import { loginApi } from '@/apis/userApis';

export const useUserInforStore = defineStore('useUserInforStore', () => {
  // 定义数据
  const userInfo = ref({});
  // 定义action
  const getUserInfo = async (account, password) => {
    const res = await loginApi(account, password);
    userInfo.value = res.result;
  }
  // 返回
  return {
    userInfo,
    getUserInfo
  }
}, {  //  配置Pinia中的数据持久化存储
  persist: true
});