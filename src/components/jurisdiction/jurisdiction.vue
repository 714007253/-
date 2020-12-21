<!-- 权限列表 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>权限管理</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="refresh"
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
            <el-form-item label="角色名称" class="input">
              <el-input
                v-model="queryInfo.query"
                placeholder="请输入您要搜索的角色名称"
                clearable
                @clear="getJurisdictionList"
                @keyup.enter.native="getJurisdictionList"
              ></el-input>
            </el-form-item>
            <el-form-item class="search">
              <el-button type="primary" @click="getJurisdictionList"
                >查询</el-button
              >
            </el-form-item>
            <!-- 添加用户按钮 -->

            <el-button
              class="Juadd"
              type="primary"
              @click="addDialogVisible = true"
              >添加角色</el-button
            >
          </el-form>
        </div>
      </div>
    </el-card>
    <!-- 权限列表详情 -->
    <el-card class="box-card2">
      <el-table :data="rolelist" stripe style="width: 100%" border>
        <!-- 索引列 -->
        <el-table-column
          label="编号"
          type="index"
          width="189"
        ></el-table-column>

        <el-table-column
          prop="roleName"
          label="角色名称"
          width="280"
        ></el-table-column>

        <el-table-column prop="roledata" label="创建日期" width="280">
        </el-table-column>

        <!-- 操作区 -->
        <el-table-column width="430"  fixed="right" label="操作区" >
          <template slot-scope="scope" >
            <!-- 编辑按钮 -->
            <!-- 通过对应的id值指定对应的信息获取 -->
            <el-button size="mini" @click="edshowEditDialog(scope.row.id)">
              编辑
            </el-button>
            <!-- 删除按钮 -->
            <el-button
              size="mini"
              type="danger"
              @click="removeroleById(scope.row.id)"
              >删除
            </el-button>
            <!-- 分配权限按按钮 -->
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-setting"
              @click="showSetRightDialog(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 修改用户的对话框 -->
    <el-dialog
      title="修改角色"
      :visible.sync="editDialogVisible"
      width="50%"
      @close="editDialogClosed"
      :append-to-body="true"
    >
      <el-form :model="editForm" ref="editFormRef" label-width="70px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editroleInfo">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配权限的对话框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="setRightDialogVisible"
      width="50%"
      @close="setRightDialogClosed"
      :append-to-body="true"
    >
      <!-- 树形控件 -->
      <el-tree
        :data="rightslist"
        :props="treeProps"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="defKeys"
        ref="treeRef"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="allotRights">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加用户的对话框 -->
    <el-dialog
      title="添加角色"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
      :append-to-body="true"
    >
      <!-- 内容主体区域 -->
      <el-form :model="addForm" ref="addFormRef" label-width="70px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // 新增角色参数
      addDialogVisible: false,
      // 编辑角色窗口
      editDialogVisible: false,
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false,
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
      // 所有权限的数据
      rolelist: [
        {
          roleName: "",
          roledata: "",
        },
      ],
      // 当前即将分配权限的角色id
      roleId: "",
      editForm: {},
      addForm: {
        roleName: "",
        roleDesc: "",
      },
      // 树形控件的属性绑定对象
      treeProps: {
        label: "authName",
        children: "children",
      },
      rightslist: [],
       // 默认选中的节点Id值数组
      defKeys: [],
    };
  },

  components: {},

  created() {
    this.getroleList();
  },

  methods: {
    // 刷新页面
    refresh() {
      this.$router.go(0);
    },
    // 获取权限列表
    async getroleList() {
      const { data: res } = await this.$http.get("roles", {
        params: this.queryInfo,
      });

      if (res.meta.status !== 200) {
        return this.$message.error("获取角色列表失败！");
      }

      this.rolelist = res.data;
    },
    // 添加新用户
    addUser() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("roles", this.addForm);
        if (res.meta.status !== 201) {
          this.$message.error("添加角色失败！");
        }
        this.$message.success("添加角色成功！");
        this.addDialogVisible = false;
        this.getroleList();
      });
    },
     // 监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    // 监听
    // 编辑用户通过id传递数据
    async edshowEditDialog(id) {
      const { data: res } = await this.$http.get("roles/" + id);
      if (res.meta.status !== 200) {
        return this.$message.error("查询角色信息失败！");
      }
      this.editForm = res.data;
      this.editDialogVisible = true;
    },
    // 监听修改用户对话框的关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields();
    },
     // 修改用户信息并提交
    editroleInfo() {
       this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        // 发起修改用户信息的数据请求
        // 注意每个data值和对应的区别
        const { data: res } = await this.$http.post(
          "Croles/" + this.editForm.roleId,
          {
            roleName: this.editForm.roleName,
            roleDesc: this.editForm.roleDesc,
          }
        );

        if (res.meta.status !== 200) {
          return this.$message.error("更新角色信息失败！");
        }

        // 关闭对话框
        this.editDialogVisible = false;
        // 刷新数据列表
        this.getroleList();
        // 提示修改成功
        this.$message.success("更新角色信息成功！");
      });
    },
    // 根据id删除对应用户列表
    async removeroleById(id) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该角色, 是否继续?",
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
      const { data: res } = await this.$http.post("droles/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除用户失败！");
      }

      this.$message.success("删除用户成功！");
      this.getroleList();
    },
    
    // 分配权限对话框的关闭事件
    setRightDialogClosed() {
      this.defKeys = [];
    },
     // 展示分配权限的对话框
    async showSetRightDialog(role) {
    this.roleId = role.id;
      // 获取所有权限的数据
      const { data: res } = await this.$http.get("rights/tree");

      if (res.meta.status !== 200) {
        return this.$message.error("获取权限数据失败！");
      }

      // 把获取到的权限数据保存到 data 中
      this.rightslist = res.data;

      // 递归获取三级节点的Id
      this.getLeafKeys(role, this.defKeys);

      this.setRightDialogVisible = true;

    },
    // 通过递归的形式，获取角色下所有三级权限的id，并保存到 defKeys 数组中
    getLeafKeys(node, arr) {
      // 如果当前 node 节点不包含 children 属性，则是三级节点
      if (!node.children) {
        return arr.push(node.id);
      }

      node.children.forEach((item) => this.getLeafKeys(item, arr));
    },
    // 点击为角色分配权限
    async allotRights() {
       const keys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys(),
      ];
      const idStr = keys.join(",");

      const { data: res } = await this.$http.post(
        `roles/${this.roleId}/rights`,
        { rids: idStr }
      );

      if (res.meta.status !== 200) {
        return this.$message.error("分配权限失败！");
      }

      this.$message.success("分配权限成功！");
      this.getroleList();
      //   对话框开关
      this.setRightDialogVisible = false;
    },
   
   
  },
};
</script>
<style lang="less" scoped>
@import "../css/jurisdiction/jurisdiction.css";
</style>
