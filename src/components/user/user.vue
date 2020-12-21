<!-- 用户列表 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>用户信息</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getUserList"
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
            <el-form-item label="用户名:" class="input">
              <el-input
                v-model="queryInfo.query"
                placeholder="请输入您要搜索的用户名"
                clearable
                @clear="getUserList"
                @keyup.enter.native="getUserList"
              ></el-input>
            </el-form-item>
            <!-- 选择权限管理中加的职位 -->
            <!-- 未绑定搜索功能 -->
            <el-form :model="options" class="UsSearch">
              <el-form-item label="角色名称:">
                <el-select v-model="options.value">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>

            <el-form-item class="Ussearch2">
              <el-button type="primary" @click="getUserList">查询</el-button>
            </el-form-item>
          </el-form>
          <!-- 添加用户按钮 -->
          <el-button class="adduser" type="primary" @click="toCreateUser"
            >新增用户</el-button
          >
        </div>
      </div>
    </el-card>
    <el-card class="box-card2"> <UserList></UserList> </el-card>
  </div>
</template>

<script>
import UserList from "./UserList.vue";
export default {
  data() {
    return {
      // 获取列表的参数对象
      queryInfo: {
        // 关键字筛选
        query: "",
        // 角色名称筛选
        query2: "",
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 10,
      },
      total: 0,
      options: {
        value: "",
        label: "",
      },
    };
  },

  components: {
    UserList: UserList,
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
      this.Userlist = res.data.User;
      this.total = res.data.total;
    },
    // 创建新用户
    toCreateUser() {
      this.$router.push("/CreateUser");
    },
  },
};
</script>
<style lang='less' scoped>
@import "../css/user/user.css";
</style>