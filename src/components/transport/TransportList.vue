<!-- 运输管理-数据列表 -->
<template>
  <div>
    <!-- 具体表单 -->
    <!-- 标题栏 -->
    <div slot="header" class="clearfix">
      <span><strong>数据列表</strong> </span>
      <!-- 表格 -->
    </div>
    <!-- 表单区域 -->
    <el-table :data="transportslist" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column prop="TransportOrder" label="运输单号" width="160">
      </el-table-column>

      <el-table-column prop="ShippingAddress" label="发货地址" width="100">
      </el-table-column>

      <el-table-column prop="CollectionTime" label="揽收时间" width="110">
      </el-table-column>

      <el-table-column prop="Destination" label="送达目的地" width="100">
      </el-table-column>

      <el-table-column
        prop="AgreedDeliveryTime"
        label="约定送达时间"
        width="110"
      >
      </el-table-column>

      <el-table-column prop="State" label="状态" width="110"> </el-table-column>

      <el-table-column
        prop="ActualDeliveryTime"
        label="实际送达时间"
        width="110"
      >
      </el-table-column>

      <el-table-column
        prop="SavedTime"
        label="已保存时间/保存有效期(小时)"
        width="220"
      >
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column fixed="right" width="210" label="操作区">
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
          <el-button size="mini" @click="changeEditDialog(scope.row.id)">
            编辑
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeUserById(scope.row.id)"
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
      // 运输管理表单
      transportslist: [
        {
          TransportOrder: "",
          ShippingAddress: "",
          CollectionTime: "",
          Destination: "",
          AgreedDeliveryTime: "",
          State: "",
          ActualDeliveryTime: "",
          SavedTime: "",
        },
      ],
    };
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
    // 查看订单
    showEditDialog() {
      this.$router.push("/CheckTransport");
    },
    // 编辑订单
    changeEditDialog() {
      this.$router.push("/ChangeTransport");
    },
    // 删除订单
    async removeUserById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该订单, 是否继续?",
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

      const { data: res } = await this.$http.post("Transport/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除订单失败！");
      }

      this.$message.success("删除订单成功！");
      this.getTransportList();
    },

    // 翻页函数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getTransportList();
    },
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getTransportList();
    },
  },
};
</script>
<style scoped>
.clearfix {
  color: #999999;
  margin-bottom: 40px;
  height: 10px !important;
}
</style>