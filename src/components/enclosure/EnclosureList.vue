<!-- 电子围栏列表 -->
<template>
  <div>
    <div slot="header" class="clearfix">
      <span><strong>数据列表</strong> </span>
      <!-- 表格 -->
    </div>
    <!-- 表单区域 -->
    <el-table :data="Enclosurelist" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="selection" width="55"> </el-table-column>

      <el-table-column prop="EnclosureName" label="电子围栏名称" width="200">
      </el-table-column>

      <el-table-column prop="EnclosureStartTime" label="创建时间" width="240">
      </el-table-column>

      <el-table-column prop="EnclosureAdmin" label="创建人" width="160">
      </el-table-column>

      <el-table-column prop="EnclosureUpdate" label="更新时间" width="240">
      </el-table-column>

      <!-- 账户状态更改围栏是否能上线 -->
      <el-table-column prop="mg_state" label="围栏状态" width="110">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="EnclosureStateChanged(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column fixed="right" width="160" label="操作区">
        <template slot-scope="scope">
          <!-- 查看按钮 -->
          <el-button
            size="mini"
            @click="showEditDialog(scope.row.id)"
            type="primary"
          >
            查看
          </el-button>

          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeEnclosureById(scope.row.id)"
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
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
      total: 0,
      // 电子围栏表单
      Enclosurelist: [
        {
          EnclosureName: "",
          EnclosureStartTime: "",
          EnclosureAdmin: "",
          EnclosureUpdate: "",
          mg_state: "",
        },
      ],
    };
  },
  created() {
    this.getEnclosureList();
  },
  methods: {
    // 获取电子围栏列表
    async getEnclosureList() {
      const { data: res } = await this.$http.get("Enclosure", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取电子围栏表单失败");
      this.Enclosurelist = res.data.Enclosure;
      this.total = res.data.total;
      console.log(res);
    },

    //   查看
    showEditDialog() {
      this.$router.push("/CheckEnclosure");
    },

    // 删除
    async removeEnclosureById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该围栏, 是否继续?",
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

      const { data: res } = await this.$http.post("Enclosure/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除围栏失败！");
      }

      this.$message.success("删除围栏成功！");
      this.getEnclosureList();
    },
    // 账户状态更改
    EnclosureStateChanged() {},
    // 翻页函数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getEnclosureList();
    },
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getEnclosureList();
    },
  },
};
</script>
<style lang='less' scoped>
.clearfix {
  color: #999999;
  margin-bottom: 40px;
  height: 10px !important;
}
</style>