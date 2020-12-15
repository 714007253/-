<!-- 查看记录仪详情 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Record' }"
          ><strong>记录仪列表</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>查看记录仪</strong> </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 表头 -->
    <el-card class="box-card2"> </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>
<style lang='less' scoped>
</style>