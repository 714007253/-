<!-- 创建运输订单-货物详情 -->
<template>
  <div>
    <div class="CargoDetails">
      <span class="CargoDetailsTitle">货物详情</span>
      <el-button
        class="CargoDetailsAdd"
        type="primary"
        @click="CargoDetailsVisible = true"
        >新增</el-button
      >
    </div>
    <el-table :data="CargorList" border stripe>
      <!-- 报价单表单 -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="ProductID" label="冷链包ID" width="130">
      </el-table-column>
      <el-table-column prop="ContainerID" label="集装箱ID" width="130">
      </el-table-column>
      <el-table-column prop="number" label="数量(单位)" width="140">
      </el-table-column>
      <el-table-column prop="LWHeight" label="长*宽*高(单位)" width="170">
      </el-table-column>

      <el-table-column prop="weight" label="重量(单位)" width="140">
      </el-table-column>
      <el-table-column prop="ThrowWeight" label="抛重(单位)" width="140">
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button
            size="mini"
            @click="changeCargoDetailsDialog(scope.row.id)"
          >
            编辑
          </el-button>
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeCargoDetailsById(scope.row.id)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增货物详情的对话框 -->
    <el-dialog
      title="新增货物详情"
      :visible.sync="CargoDetailsVisible"
      width="50%"
      @close="CargoDetailsClosed"
      :append-to-body="true"
    >
      <!-- 内容主体 -->
      <el-form
        :model="CargoDetailsForms"
        ref="CargoDetailsFormRef"
        label-width="100px"
      >
        <el-form-item label="产品ID" prop="ProductID">
          <el-input v-model="CargoDetailsForms.ProductID"></el-input>
        </el-form-item>
        <el-form-item label="集装箱ID" prop="ContainerID">
          <el-input v-model="CargoDetailsForms.ContainerID"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="number">
          <el-input v-model="CargoDetailsForms.number"></el-input>
        </el-form-item>
        <el-form-item label="长*宽*高" prop="LWHeight">
          <el-input v-model="CargoDetailsForms.LWHeight"></el-input>
        </el-form-item>
        <el-form-item label="重量" prop="weight">
          <el-input v-model="CargoDetailsForms.weight"></el-input>
        </el-form-item>
        <el-form-item label="抛重" prop="ThrowWeight">
          <el-input v-model="CargoDetailsForms.ThrowWeight"></el-input>
        </el-form-item>
      </el-form>

      <!-- 底部区域 -->
      <span slot="footer">
        <el-button @click="CargoDetailsVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCargoDetails">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CargoDetailsVisible: false,
      ChangeCargoDetailsVisible: false,
      // 货物数据定义
      CargorList: [
        {
          id: "",
          ProductID: "",
          ContainerID: "",
          number: "",
          LWHeight: "",
          weight: "",
          ThrowWeight: "",
        },
      ],
      //   新增货物数据表单
      CargoDetailsForms: {
        ProductID: "",
        ContainerID: "",
        number: "",
        LWHeight: "",
        weight: "",
        ThrowWeight: "",
      },
    };
  },

  created() {
    // 获取货物详情函数
    this.getCargoDetailsList();
  },

  methods: {
    //  获取货物详情函数
    async getCargoDetailsList() {
      const { data: res } = await this.$http.get("CargoDetails");
      if (res.meta.status !== 200)
        return this.$message.error("获取货物列表失败");
      this.CargorList = res.data.CargoDetails;
      console.log(res);
    },
    // 增加一行货物详情
    addCargoDetails() {
      this.$refs.CargoDetailsFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          "AddCargoDetails",
          this.CargoDetailsForms
        );
        if (res.meta.status !== 201) {
          this.$message.error("添加货物失败！");
        }
        this.$message.success("添加货物成功！");
        this.CargoDetailsVisible = false;
        this.getCargoDetailsList();
      });
    },
    // 监听添加用户对话框的关闭事件
    CargoDetailsClosed() {
      this.$refs.CargoDetailsFormRef.resetFields();
    },
    // 根据id删除对应货物
    async removeCargoDetailsById(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该货物数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }

      const { data: res } = await this.$http.post("CargoDetails/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除货物数据失败！");
      }

      this.$message.success("删除货物数据成功！");
      console.log(res);
      this.getCargoDetailsList();
    },
    // 编辑用户通过id传递数据
    async showEditDialog(id) {
      const { data: res } = await this.$http.get("users/" + id);
      if (res.meta.status !== 200) {
        return this.$message.error("查询用户信息失败！");
      }
      this.editForm = res.data;
    },
    async changeUser() {
      // 这里暂时只推送email和mobile两个数据组
      const { data: res } = await this.$http.post("users/" + this.editForm.id, {
        email: this.editForm.email,
        mobile: this.editForm.mobile,
      });
      if (res.meta.status !== 200) {
        return this.$message.error("更新用户信息失败");
      }
      //  返回上级 刷新列表 提示修改成功
      this.getUserList();
      this.$message.success("更新用户信息成功");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>