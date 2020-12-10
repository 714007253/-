<!-- 首页 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getWelcomeList"
          ><img src="../images/刷新.svg" class="RefreshImg" />
          <span class="RefreshTitle">刷新 </span>
        </el-button>
      </el-breadcrumb>
    </el-card>
    <!-- 4个可视化计数模块 -->
    <el-card class="Data1"
      ><div class="Data1_1">
        <span class="Data1_4">{{ homelist.Data1_3 }}</span>
        <span class="Data1_5"> / </span>
        <span class="Data1_6">{{ homelist.Data1_4 }}</span>
        <span class="Point1">●</span>
        <span>在线记录仪</span>
      </div></el-card
    >
    <el-card class="Data1"
      ><div class="Data1_1">
        <span class="Data1_4">{{ homelist.Data1_7 }}</span>
        <span class="Data1_5"> / </span>
        <span class="Data1_6">{{ homelist.Data1_8 }}</span>
        <span class="Point2">●</span><span>报警中</span>
      </div></el-card
    >
    <el-card class="Data1"
      ><div class="Data1_1">
        <span class="Data1_4">{{ homelist.Data1_9 }}</span>
        <span class="Data1_5"> / </span>
        <span class="Data1_6">{{ homelist.Data1_10 }}</span>
        <span class="Point3">●</span><span>持续保存时间即将失效</span>
      </div></el-card
    >
    <el-card class="Data1"
      ><div class="Data1_1">
        <span class="Data1_4">{{ homelist.Data1_11 }}</span>
        <span class="Data1_5"> / </span>
        <span class="Data1_6">{{ homelist.Data1_12 }}</span>
        <span class="Point4">●</span><span>已送达</span>
      </div></el-card
    >
    <el-card class="Data2">
      <div class="Data2_1"><span class="Data2_2">记录仪物流状态</span></div>
    </el-card>
    <el-card class="Data2">
      <div class="Data2_1">
        <span class="Data2_2">记录仪报警统计</span>
        <el-form ref="FormChoiceRef" :model="FormChoice">
          <el-form-item prop="chioce">
            <el-select class="select" v-model="chioce">
              <el-option label="全部" value="1"></el-option>
              <el-option label="记录仪编号1" value="2"></el-option>
              <el-option label="记录仪编号2" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <el-card class="Data3">
      <span class="Data2_2">报警记录仪</span>
      <span class="Data3_1"
        ><a href="javascript:;" style="color: #377ccf; text-decoration: none"
          >查看全部</a
        ></span
      >
    </el-card>
    <el-card class="Data4">
      <span class="Data2_2">报警记数据列表</span>
      <span class="Data3_1"
        ><a href="javascript:;" style="color: #377ccf; text-decoration: none"
          >查看全部</a
        ></span
      >
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homelist: {
        Data1_3: "9",
        Data1_4: "10",
        Data1_7: "1",
        Data1_8: "10",
        Data1_9: "1",
        Data1_10: "10",
        Data1_11: "2",
        Data1_12: "10",
      },
      // 原始四个计数板数据
      queryInfo: {},

      chioce: "",
      // 获取首页的参数对象
    };
  },

  components: {},

  created() {
    this.getWelcomeList();
  },

  mounted: {},

  methods: {
    // 首页函数获取数据
    async getWelcomeList() {
      const { data: res } = await this.$http.post("Welcome");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.homelist = res.data.homedatas;
      console.log(res);
    },
  },
};
</script>
<style lang='less' scoped>
.Data1 {
  margin: 14px;
  float: left;
  height: 120px;
  width: 260px;
  color: #999999;
  font-size: 14px;
}
.RefreshBox {
  position: absolute;
  top: 37px;
  left: 1130px;
  width: 50px;
  height: 20px;
}
.RefreshImg {
  position: relative;
  top: -8px;
  left: -15px;
  width: 13px;
  height: 15px;
}
.RefreshTitle {
  position: relative;
  font-size: 10px;
  top: -12px;
  left: -14px;
  width: 15px;
  height: 15px;
}
.Point1 {
  color: #58a3f7;
}
.Point2 {
  color: #fec03d;
}
.Point3 {
  color: #52c1f5;
}
.Point4 {
  color: #4bced0;
}
.Data1_1 {
  position: relative;
  top: 60px;
  left: 28px;
}
.Data2 {
  position: relative;
  float: left;
  margin: 10px;
  width: 555px;
  height: 405px;
}
.Data3 {
  position: relative;
  left: 10px;
  top: 10px;
  width: 1133px;
  height: 804px;
}
.Data4 {
  position: relative;
  left: 10px;
  top: 43px;
  width: 1135px;
  height: 498px;
}
.Data2_1 {
  position: relative;
  left: -21px;
  top: -21px;
  border: 1px solid #f2f2f2;
  width: 555px;
  height: 60px;
}
.Data2_2 {
  position: absolute;
  left: 23px;
  top: 23px;
  font-size: 14px;
  font-weight: 700;
}
.Data3_1 {
  font-size: 13px;
  position: absolute;
  left: 1039px;
  top: 23px;
}
.select {
  position: relative;
  left: 378px;
  top: 11px;
  height: 30px !important;
  width: 161px !important;
}
.Data1_4 {
  position: absolute;
  left: 4px;
  top: -50px;
  font-size: 27px;
  color: black;
}
.Data1_5 {
  position: absolute;
  left: 24px;
  top: -40px;
  font-size: 15px;
  color: black;
}
.Data1_6 {
  position: absolute;
  left: 33px;
  top: -45px;
  font-size: 23px;
  color: black;
}
</style>