<!-- 运输管理-->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>运输管理</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getTransportList"
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
      <div class="text item box-search">
        <div>
          <el-form :inline="true" :model="queryInfo" class="demo-form-inline">
            <el-form-item label="运输单号" class="input">
              <el-input
                v-model="queryInfo.query"
                placeholder="请输入您要搜索的运输单号"
                clearable
                @clear="getTransportList"
                @keyup.enter.native="getTransportList"
              ></el-input>
            </el-form-item>
            <el-form-item label="状态" class="Trselect">
              <el-select v-model="queryInfo.query2">
                <el-option label="全部" value="1"></el-option>
                <el-option label="未开始" value="2"></el-option>
                <el-option label="运送中" value="3"></el-option>
                <el-option label="已送达" value="4"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item class="search">
              <el-button type="primary" @click="getTransportList"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
          <!-- 添加用户按钮 -->
          <el-button class="add" type="primary" @click="toCreateTransport"
            >新增订单</el-button
          >
          <span class="RadioTitle">查看形式:</span>
          <el-radio-group class="radio" v-model="radio1">
            <el-radio-button
              @click.native="ChangeList"
              label="列表"
            ></el-radio-button>
            <el-radio-button
              @click.native="ChangeMap"
              label="地图"
            ></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </el-card>

    <el-card class="box-card2">
      <!-- 列表显示 -->
      <div :class="{ BoxlistShow: BoxlistShowVisable }">
        <TransportList></TransportList>
      </div>
      <!-- 地图显示 -->
      <div :class="{ BoxmapShow: BoxmapShowVisable }">
        <!-- <TransportMap></TransportMap> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import TransportList from "./TransportList.vue";
import TransportMap from "./TransportMap.vue";
export default {
  data() {
    return {
      // 切换地图和列表组件
      BoxlistShowVisable: false,
      BoxmapShowVisable: true,
      // 获取列表的参数对象
      queryInfo: {
        // 关键字筛选
        query: "",
        // 状态筛选
        query2: "",
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
      total: 0,
      // 显示形式单选定义
      radio1: "列表",
    };
  },
  components: {
    TransportList: TransportList,
    TransportMap: TransportMap,
  },
  created() {
    this.getTransportList();
  },
  methods: {
    // 运输管理函数获取数据
    async getTransportList() {
      const { data: res } = await this.$http.get("Transport", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取运输表单数据失败");
      this.transportslist = res.data.transports;
      this.total = res.data.total;
      console.log(res);
    },
    // 新增订单
    toCreateTransport() {
      this.$router.push("/CreateTransport");
    },
    // 改变查看形式
    ChangeList() {
      this.BoxlistShowVisable = false;
      this.BoxmapShowVisable = true;
    },
    ChangeMap() {
      this.BoxlistShowVisable = true;
      this.BoxmapShowVisable = false;
    },
  },
};
</script>
<style lang='less' scoped>
@import "../css/transport/Transport.css";
</style>