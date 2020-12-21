<!-- 记录仪 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>记录仪列表</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getRecordList"
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
        <a
          style="color: #409eff; font-weight: 600; font-size: 15px"
          href="javascricp:;"
          @click="HightClearfix = true"
          class="HightClear"
          >高级搜索</a
        >
      </div>
      <!-- 搜索框 -->
      <div class="box-search">
        <el-form :inline="true" :model="queryInfo" class="demo-form-inline">
          <el-form-item label="记录仪编号" class="Reinput">
            <el-input
              class="InputSearch"
              v-model="queryInfo.query"
              placeholder="请输入您要搜索的记录仪编号"
              clearable
              @clear="getRecordList"
              @keyup.enter.native="getRecordList"
            ></el-input>
          </el-form-item>
          <el-form-item label="记录仪状态" class="Reselect">
            <el-select v-model="queryInfo.query2">
              <el-option label="全部" value="1"></el-option>
              <el-option label="在线" value="2"></el-option>
              <el-option label="离线" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="Reselect" label="报警状态">
            <el-select v-model="queryInfo.query5">
              <el-option label="全部" value="1"></el-option>
              <el-option label="正常" value="2"></el-option>
              <el-option label="已报警" value="3"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="Research">
            <el-button type="primary" @click="getRecordList">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!--  -->
    <el-card class="box-card2">
      <!-- 标题栏 -->
      <div slot="header" class="clearfix">
        <span><strong>数据列表</strong> </span>
        <el-button class="AddButton" type="primary" @click="AddRecord"
          >添加</el-button
        >
        <el-button class="AddButton" type="success">导出</el-button>
      </div>
      <RecordList></RecordList>
    </el-card>
    <!-- 高级搜索弹窗 -->
    <el-dialog
      title="高级搜索"
      :visible.sync="HightClearfix"
      width="50%"
      @close="HightClearfixClosed"
      :append-to-body="true"
    >
      <!-- 内容主体 -->
      <el-form :model="queryInfo" ref="queryInfo" label-width="100px">
        <el-row :gutter="60">
          <el-col :span="12">
            <el-form-item label="记录仪编号">
              <el-input
                v-model="queryInfo.query"
                placeholder="记录仪编号"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="记录仪状态">
              <el-select v-model="queryInfo.query2">
                <el-option label="全部" value="1"></el-option>
                <el-option label="在线" value="2"></el-option>
                <el-option label="离线" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="60">
          <el-col :span="12">
            <el-form-item label="记录仪类型">
              <el-input
                v-model="queryInfo.query3"
                placeholder="记录仪型号"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="订单编号">
              <el-input
                v-model="queryInfo.query4"
                placeholder="运送订单编号"
                clearable
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="60">
          <el-col :span="12">
            <el-form-item label="报警状态">
              <el-select v-model="queryInfo.query5">
                <el-option label="全部" value="1"></el-option>
                <el-option label="正常" value="2"></el-option>
                <el-option label="已报警" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="60">
          <el-col :span="12">
            <el-form-item label="更新时间区间">
              <el-time-picker
                is-range
                v-model="queryInfo.query6"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围"
              >
              </el-time-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="HightClearfix = false">取 消</el-button>
        <el-button type="primary" @click="getRecordList">查询</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import RecordList from "./RecordList.vue";
export default {
  data() {
    return {
      // 记录仪列表
      RecordList: {
        RecordId: "",
        RecordStytle: "",
        RecordState: "",
        RecordTemperature: "",
        AmbientTemperature: "",
        BatteryLevel: "",
        UpdateTime: "",
      },
      queryInfo: {
        // 关键字筛选
        query: "",
        // 状态筛选
        query2: "",
        // 记录仪类型
        query3: "",
        // 订单编号
        query4: "",
        // 报警状态
        query5: "",
        // 更新时间区间
        query6: "",
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
      total: 0,
      HightClearfix: false,
    };
  },

  components: {
    RecordList: RecordList,
  },

  created() {
    this.getRecordList();
  },

  methods: {
    // 记录仪管理函数获取数据
    async getRecordList() {
      const { data: res } = await this.$http.get("Record", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取记录仪数据列表数据失败");
      this.RecordList = res.data.Records;
      this.total = res.data.total;
      console.log(res);
      this.HightClearfix = false;
    },
    // 监听添加用户对话框的关闭事件
    HightClearfixClosed() {
      this.$refs.AOTRecorderFormsRef.resetFields();
    },
    // 添加新的记录仪列表
    AddRecord() {
      this.$router.push("/CreateRecord");
    },
  },
};
</script>
<style lang='less' scoped>
@import "../css/record/record.css";
</style>