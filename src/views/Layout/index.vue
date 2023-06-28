<script setup>
// 引入组件
import LayoutNav from '@/views/Layout/Components/LayoutNav.vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader2.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter1.vue';
import LayoutFixed from '@/views/Layout/Components/LayoutFixed.vue';
// 引入pinia，执行方法
import {useCategoryStore} from '@/stores/category';
import {onMounted} from 'vue';
const categoryStore = useCategoryStore();
// 调用store中的方法，获取数据
onMounted(() => categoryStore.getNavList());

</script>

<template>
  <LayoutNav />
  <LayoutFixed />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>