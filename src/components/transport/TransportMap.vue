<!-- 运输管理-数据地图 -->
<template>
  <div>
    <!-- 具体表单 -->
    <!-- 标题栏 -->
    <div slot="header" class="clearfix">
      <span><strong>地图</strong></span>
      <!-- 地图 -->
      <div class="amap-page-container">
        <TMap></TMap>
      </div>
    </div>
  </div>
</template>

<script>
// 120.363195,30.322186
import TMap from "./TMap.vue";
export default {
  data() {
    return {};
  },

  components: {
    TMap: TMap,
  },
  mounted() {},

  methods: {},
};
</script>
<style  scoped>
.clearfix {
  color: #999999;
  margin-bottom: 40px;
  height: 10px !important;
}
.amap-page-container {
  width: 100%;
  height: 700px;
  margin-top: 20px;
}
</style>
