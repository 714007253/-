<!-- 用户表单 -->
<template>
  <div>
    <!-- 标题栏 -->
    <div slot="header" class="Urclearfix">
      <span><strong>用户列表</strong> </span>
      <!-- 表格 -->
    </div>
    <!-- 表单区域 -->
    <el-table :data="Userlist" stripe style="width: 100%" border>
      <!-- 数据表单 -->
      <el-table-column type="index" width="55"> </el-table-column>

      <el-table-column prop="Name" label="姓名" width="160"> </el-table-column>
      <el-table-column prop="UserName" label="用户名" width="160">
      </el-table-column>

      <el-table-column prop="UserPhone" label="手机号" width="140">
      </el-table-column>

      <el-table-column prop="UserRole" label="用户角色" width="110">
      </el-table-column>

      <!-- 状态更改账号状态 -->
      <el-table-column prop="mg_state" label="账号状态" width="100">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            @change="UserStateChanged(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="UserCreateDate" label="创建时间" width="200">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      Userlist: [
        {
          Name: "",
          UserName: "",
          UserPhone: "",
          UserRole: "",
          mg_state: "",
          UserCreateDate: "",
        },
      ],
    };
  },

  created() {
    this.getUserList();
  },
  methods: {
    // 获取用户列表
    async getUserList() {
      const { data: res } = await this.$http.get("User", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取用户列表失败");
      this.Userlist = res.data.user;
      this.total = res.data.total;
    },
    //  更改账号状态
    UserStateChanged() {},
    // 查看按钮
    showEditDialog() {},
    // 编辑按钮
    changeEditDialog() {},
    // 删除按钮
    async removeUserById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
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

      const { data: res } = await this.$http.post("User/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除用户失败！");
      }

      this.$message.success("删除用户成功！");
      this.getEnclosureList();
    },
  },
};
</script>
<style lang='less' scoped>
</style>