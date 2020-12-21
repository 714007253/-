<!-- 首页 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="Webox-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-button class="WeRefreshBox" @click="refresh"
          ><img src="../images/刷新.svg" class="RefreshImg" />
          <span class="RefreshTitle">刷新 </span>
        </el-button>
      </el-breadcrumb>
    </el-card>
    <!-- 4个可视化计数模块 -->
    <!-- 在线记录仪 -->
    <el-card class="DataBox"
      ><div class="DataBox_1">
        <span class="DataBox_2">{{ homelist.Data1_1 }}</span>
        <span class="DataBox_3"> / </span>
        <span class="DataBox_4">{{ homelist.Data1_2 }}</span>
        <span class="Point1">●</span>
        <span class="Datatitle">在线记录仪</span>
      </div></el-card
    >
    <!-- 报警中 -->
    <el-card class="DataBox"
      ><div class="DataBox_1">
        <span class="DataBox_2">{{ homelist.Data2_1 }}</span>
        <span class="DataBox_3"> / </span>
        <span class="DataBox_4">{{ homelist.Data2_2 }}</span>
        <span class="Point2">●</span><span class="Datatitle">报警中</span>
      </div></el-card
    >
    <!-- 持续保存时间即将失效 -->
    <el-card class="DataBox"
      ><div class="DataBox_1">
        <span class="DataBox_2">{{ homelist.Data3_1 }}</span>
        <span class="DataBox_3"> / </span>
        <span class="DataBox_4">{{ homelist.Data3_2 }}</span>
        <span class="Point3">●</span
        ><span class="Datatitle">持续保存时间即将失效</span>
      </div></el-card
    >
    <!-- 已送达 -->
    <el-card class="DataBox"
      ><div class="DataBox_1">
        <span class="DataBox_2">{{ homelist.Data4_1 }}</span>
        <span class="DataBox_3"> / </span>
        <span class="DataBox_4">{{ homelist.Data4_2 }}</span>
        <span class="Point4">●</span><span class="Datatitle">已送达</span>
      </div></el-card
    >

    <!-- 记录仪物流状态 -->
    <el-card class="DataBox2">
      <div class="DataBox2_1">
        <span class="Data2Title">记录仪物流状态</span>
      </div>
      <div id="RecorderData">
        <RecorderData></RecorderData>
      </div>
    </el-card>

    <!-- 记录仪报警统计 -->
    <el-card class="DataBox2">
      <RecorderDangerData></RecorderDangerData>
    </el-card>

    <el-card class="DataBox3">
      <div class="DataBox4">
        <span class="DataBox3Title">报警记录仪</span>
        <span class="DataBox3Title2"
          ><a href="javascript:;" style="color: #377ccf; text-decoration: none"
            >查看全部</a
          ></span
        >
      </div>
      <RecorderDataDetail></RecorderDataDetail>
    </el-card>
    <el-card class="DataBox3">
      <div class="DataBox4">
        <span class="DataBox3Title">报警数据列表</span>
        <span class="DataBox3Title3"
          ><a href="javascript:;" style="color: #377ccf; text-decoration: none"
            >查看全部</a
          ></span
        >
      </div>
      <RecorderDataList></RecorderDataList>
    </el-card>
  </div>
</template>

<script>
// 这里导入数据可视化组件
import RecorderDangerData from "../Welcome/RecorderDangerData.vue";
import RecorderData from "../Welcome/RecorderData.vue";
import RecorderDataDetail from "../Welcome/RecorderDataDetail.vue";
import RecorderDataList from "../Welcome/RecorderDataList.vue";
export default {
  data() {
    return {
      homelist: {
        // 八个数据显示参数
        Data1_1: "",
        Data1_2: "",
        Data2_1: "",
        Data2_2: "",
        Data3_1: "",
        Data3_2: "",
        Data4_1: "",
        Data4_2: "",
      },
      // 原始四个计数板数据
      queryInfo: {},
      FormChoice: {},
      groups: "",
    };
  },

  created() {
    this.getWelcomeList();
  },

  methods: {
    // 刷新页面按钮普及
    refresh() {
      this.$router.go(0);
    },

    // 首页四个数组获取数据
    async getWelcomeList() {
      const { data: res } = await this.$http.get("Welcome");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.homelist = res.homedatas;
      this.option = res.option;
    },
  },
  components: {
    RecorderDangerData: RecorderDangerData,
    RecorderData: RecorderData,
    RecorderDataDetail: RecorderDataDetail,
    RecorderDataList: RecorderDataList,
  },
};
</script>

<style lang="less" scoped>
@import "../css/Welcome/welcome.css";
</style>
