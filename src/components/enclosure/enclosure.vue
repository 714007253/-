<!-- 电子围栏 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>电子围栏</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getTransportList"
          ><img src="../images/刷新.svg" class="RefreshImg" />
          <span class="RefreshTitle">刷新 </span>
        </el-button>
      </el-breadcrumb>
    </el-card>
    <!-- 搜索框 -->
    <el-card class="box-card1">
      <!-- 标题栏 -->
      <div slot="header" class="clearfix">
        <span><strong>数据筛选</strong> </span>
      </div>
      <div class="text item box-search">
        <el-form :inline="true" :model="queryInfo" class="demo-form-inline">
          <el-form-item label="电子围栏" class="input">
            <el-input
              class="InputSearch"
              v-model="queryInfo.query"
              placeholder="请输入您要搜索的电子围栏名称"
              clearable
              @clear="getEnclosureList"
              @keyup.enter.native="getEnclosureList"
            ></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" @click="getEnclosureList">查询</el-button>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" @click="AddTransportList"
              >新增围栏</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card2"> </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取列表的参数对象
      queryInfo: {
        // 关键字筛选
        query: "",
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
    };
  },

  components: {},
  created() {
    this.getEnclosureList();
  },
  methods: {},
};
</script>
<style lang='less' scoped>
.input {
  width: 330px;
}
.InputSearch {
  width: 260px;
}
.box-card2 {
  position: relative;
  top: 10px;
}
</style>