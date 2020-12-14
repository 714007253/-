<!-- 创建运输订单-温度记录仪授权 -->
<template>
  <div>
    <div class="AOTRecorder">
      <span class="AOTRecorderTitle">温度记录仪授权</span>
      <el-button
        class="AOTRecordersAdd"
        type="primary"
        @click="AOTRecorderVisible = true"
        >新增</el-button
      >
    </div>
    <el-table :data="AOTRecorderList" stripe>
      <!-- 温度记录仪授权表单 -->
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="AOTRecorderID" label="记录仪编号" width="430">
      </el-table-column>
      <el-table-column prop="AOTRecorderData" label="添加日期" width="420">
      </el-table-column>

      <!-- 操作区 -->
      <el-table-column label="操作" width="170">
        <template slot-scope="scope">
          <!-- 删除按钮 -->
          <el-button
            size="mini"
            type="danger"
            @click="removeAOTRecorderById(scope.row.id)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新增温度记录仪授权数据"
      :visible.sync="AOTRecorderVisible"
      width="50%"
      @close="addAOTRecorderClosed"
      :append-to-body="true"
    >
      <!-- 内容主体 -->
      <el-form
        :model="AOTRecorderForms"
        ref="AOTRecorderFormsRef"
        label-width="100px"
      >
        <el-form-item label="记录仪编号" prop="AOTRecorderID">
          <el-input v-model="AOTRecorderForms.AOTRecorderID"></el-input>
        </el-form-item>
        <el-form-item label="添加日期" prop="AOTRecorderData">
          <el-input v-model="AOTRecorderForms.AOTRecorderData"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="AOTRecorderVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAOTRecorder">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AOTRecorderVisible: false,
      // 温度记录仪授权定义
      AOTRecorderList: [
        {
          id: "",
          AOTRecorderID: "",
          AOTRecorderData: "",
        },
      ],
      //   新增温度记录仪授权定义表单
      AOTRecorderForms: {
        AOTRecorderID: "",
        AOTRecorderData: "",
      },
    };
  },

  created() {
    //  获取温度记录仪授权函数
    this.getAOTRecorderList();
  },

  methods: {
    //  获取温度记录仪授权函数
    async getAOTRecorderList() {
      const { data: res } = await this.$http.get("AOTRecorder");
      if (res.meta.status !== 200)
        return this.$message.error("获取温度记录仪授权数据列表失败");
      this.AOTRecorderList = res.data.AOTRecorder;
      console.log(res);
    },
    // 增加一行温度记录仪授权
    addAOTRecorder() {
      this.$refs.AOTRecorderFormsRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          "AddAOTRecorder",
          this.AOTRecorderForms
        );
        if (res.meta.status !== 201) {
          this.$message.error("添加数据失败！");
        }

        this.$message.success("添加数据成功！");
        this.AOTRecorderVisible = false;
        this.getAOTRecorderList();
      });
    },
    // 监听添加用户对话框的关闭事件
    addAOTRecorderClosed() {
      this.$refs.AOTRecorderFormsRef.resetFields();
    },
    // 根据id删除对应温度记录仪授权数据
    async removeAOTRecorderById(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该温度记录仪授权数据, 是否继续?",
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

      const { data: res } = await this.$http.post("AOTRecorder/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除温度记录仪授权数据失败！");
      }

      this.$message.success("删除温度记录仪授权数据成功！");
      console.log(res);
      this.getAOTRecorderList();
    },
  },
};
</script>
<style lang='scss' scoped>
</style>