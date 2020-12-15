<!-- 记录仪数据列表 -->
<template>
  <div>
    <!-- 表格 -->

    <!-- 表单区域 -->
    <el-table :data="RecordList" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column prop="RecordId" label="记录仪编号" width="160">
      </el-table-column>

      <el-table-column prop="RecordStytle" label="记录仪类型" width="100">
      </el-table-column>

      <el-table-column prop="RecordState" label="记录仪状态" width="110">
      </el-table-column>

      <el-table-column prop="RecordTemperature" label="冷链包温度" width="100">
      </el-table-column>

      <el-table-column prop="AmbientTemperature" label="环境温度" width="100">
      </el-table-column>

      <el-table-column prop="BatteryLevel" label="电池电量" width="100">
      </el-table-column>

      <el-table-column prop="UpdateTime" label="更新时间" width="180">
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column fixed="right" width="220" label="操作区">
        <template slot-scope="scope">
          <!-- 查看按钮 -->
          <el-button
            size="mini"
            @click="showEditDialog(scope.row.id)"
            type="primary"
          >
            查看
          </el-button>
          <!-- 编辑按钮 -->
          <el-button
            size="mini"
            @click="changeEditDialog(scope.row.id)"
            type="warning"
          >
            禁用
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeRecordById(scope.row.id)"
            >删除
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
      total: 0,
      RecordList: [
        {
          RecordId: "",
          RecordStytle: "",
          RecordState: "",
          RecordTemperature: "",
          AmbientTemperature: "",
          BatteryLevel: "",
          UpdateTime: "",
        },
      ],
    };
  },
  created() {
    this.getRecordList();
  },
  methods: {
    // 记录仪数据列表函数获取数据
    async getRecordList() {
      const { data: res } = await this.$http.get("Record", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取记录仪数据列表数据失败");
      this.RecordList = res.data.Records;
      this.total = res.data.total;
      console.log(res);
    },
    // 查看订单
    showEditDialog() {
      this.$router.push("/CheckRecord");
    },
    // 禁用订单
    changeEditDialog() {},
    // 删除订单
    async removeRecordById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该记录仪数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);

      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消了删除，则返回值为字符串 cancel
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }

      const { data: res } = await this.$http.post("Record/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除记录仪数据失败！");
      }

      this.$message.success("删除记录仪数据成功！");
      this.getRecordList();
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