<!-- 固件列表 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>固件更新</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="Refresh"
          ><img src="../images/刷新.svg" class="RefreshImg" />
          <span class="RefreshTitle">刷新 </span>
        </el-button>
      </el-breadcrumb>
    </el-card>
    <!-- 数据筛选 -->
    <el-card class="box-card1">
      <!-- 标题栏 -->
      <div slot="header" class="clearfix">
        <span><strong>数据筛选</strong> </span>
      </div>
      <!-- 搜索框 -->
      <el-form
        :inline="true"
        :model="queryInfo"
        class="demo-form-inline"
        ref="queryInfo"
      >
        <el-form-item label="固件名称" class="Reinput" prop="query">
          <el-input
            class="InputSearch"
            v-model="queryInfo.query"
            placeholder="请输入您要搜索的固件名称"
            clearable
            @clear="getFirmwareList"
            @keyup.enter.native="getFirmwareList"
          ></el-input>
        </el-form-item>
        <div class="block">
          <el-form-item label="时间区间" prop="query2">
            <el-date-picker
              v-model="queryInfo.query2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button class="Fisearch" type="primary" @click="getFirmwareList"
            >查询</el-button
          >
          <el-button class="Fireset" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 主体部分 -->
    <el-card class="box-card2">
      <div slot="header" class="clearfix">
        <span><strong>数据列表</strong> </span>
         </div>
      <FirmwareList></FirmwareList>
    </el-card>
  </div>
</template>

<script>
import FirmwareList from "./FirmwareList.vue";
export default {
  name: "",
  data() {
    return {
      // 时间函数
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      queryInfo: {
        // 关键字筛选
        query: "",
        // 关键字筛选
        query2: "",
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
    };
  },

  components: {
    FirmwareList:FirmwareList
  },

  created() {},

  methods: {
    // 刷新页面
    Refresh() {
      this.$router.go(0);
    },
    resetForm() {
      this.$refs.queryInfo.resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
.block {
  width: 500px;
  position: relative;
  top: -65px;
  left: 365px;
}
.Fisearch {
  position: relative;
  top: -127px;
  left: 905px;
}
.Fireset {
  position: relative;
  top: -127px;
  left: 905px;
}
</style>
