<script setup>
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
import { getCategorySubFilterLIst, getSubCategoryDataList } from "@/apis/categoryApis";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const route = useRoute();

const categorySubData = ref({});
const categoryGoods = ref([]);

const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: "publishTime"
});

// 定义是否继续监听无限滚动事件
const disabled = ref(false);

const getCategorySubFilterData = async () => {
  const res = await getCategorySubFilterLIst(route.params.id);
  categorySubData.value = res.result;
};

const getSubCategoryData = async () => {
  const res = await getSubCategoryDataList(reqData);
  categoryGoods.value = res.result.items;
};

onMounted(() => {
  getCategorySubFilterData();
  getSubCategoryData();
});

const tabChange = () => {
  console.log(1, reqData.sortField);
  reqData.value.page = 1;
  getSubCategoryData();
}

const load = async () => {
  reqData.value.page++;
  const res = await getSubCategoryDataList(reqData.value);
  categoryGoods.value = [...categoryGoods.value, ...res.result.items];
  if(res.result.items.length === 0) {
    disabled.value = true;
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categorySubData.parentId}` }">{{categorySubData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categorySubData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change= "tabChange">
        <el-tab-pane
          label="最新商品"
          name="publishTime"
        ></el-tab-pane>
        <el-tab-pane
          label="最高人气"
          name="orderNum"
        ></el-tab-pane>
        <el-tab-pane
          label="评论最多"
          name="evaluateNum"
        ></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in categoryGoods" :good="goods" :key="goods.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>