<!-- 电子围栏 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>电子围栏</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getEnclosureList"
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
            <el-button type="primary" @click="AddEnclosureList"
              >新增围栏</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- 数据列表 -->
    <el-card class="box-card2"> <EnclosureList></EnclosureList> </el-card>
  </div>
</template>

<script>
import EnclosureList from "./EnclosureList.vue";
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

  components: {
    EnclosureList: EnclosureList,
  },
  created() {
    this.getEnclosureList();
  },
  methods: {
    async getEnclosureList() {
      const { data: res } = await this.$http.get("Enclosure", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取电子围栏表单失败");
      this.Enclosurelist = res.data.Enclosure;
      this.total = res.data.total;
    },
    AddEnclosureList() {
      this.$router.push("/CreateEnclosure");
    },
  },
};
</script>
<style lang='less' scoped>
.input {
  width: 330px;
}
.InputSearch {
  width: 260px !important;
}
</style>