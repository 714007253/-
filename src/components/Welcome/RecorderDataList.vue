<!-- 报警数据列表 -->
<template>
  <div>
    <!-- 表单区域 -->
    <el-table :data="RecordList" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="index" width="55"> </el-table-column>

      <el-table-column prop="RecordId" label="设备编号" width="180">
      </el-table-column>

      <el-table-column prop="DangerStyle" label="报警类型" width="180">
      </el-table-column>

      <el-table-column prop="RecordAdress" label="定位" width="180">
      </el-table-column>

      <el-table-column prop="Recordlong" label="持续时间" width="180">
      </el-table-column>

      <el-table-column prop="RecordTime" label="时间" width="180">
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column fixed="right" width="200" label="操作">
        <template slot-scope="scope">
          <!-- 查看按钮 -->
          <el-button
            size="mini"
            @click="showEditDialog(scope.row.id)"
            type="primary"
          >
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取列表的参数对象
      queryInfo: {
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
      total:0,
      // 运输管理表单
      RecordList: [
        {
          RecordId: "",
          DangerStyle: "",
          RecordAdress: "",
          Recordlong: "",
          RecordTime: "",
        },
      ],
    };
  },
  created() {
    this.getRecordList2();
  },
  methods: {
    // 记录仪数据列表函数获取数据
    async getRecordList2() {
      const { data: res } = await this.$http.get("Record2", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取记录仪数据列表数据失败");
      this.RecordList = res.data;
      this.total = res.data.total;
    },
    // 查看订单
    showEditDialog() {
      this.$router.push("/CheckRecord");
    },
    // 翻页函数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getRecordList();
    },
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getRecordList();
    },
  },
};
</script>
<style lang='less' scoped>
</style>