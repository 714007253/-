<!-- 系统框架 -->
<template>
  <div>
    <!-- 浅色主体栏 -->
    <div :class="{ Header: HeaderBox }">
      <div class="HeaderBox">
        <img class="HeaderImage" src="../images/u963.svg" />
        <span class="HeaderTitle">冷链云平台</span>
        <div class="HeaderFlex">
          <!-- 这里暂时权限系统配置之后如果有需要去参考别人的写法来确定渲染方式 -->
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As1"
              >首页</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As2"
              >运输管理</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As3"
              >记录仪</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As4"
              >电子围栏</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As5"
              >用户管理</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As6"
              >系统</a
            ></span
          >
        </div>
        <el-dropdown class="HeaderAdmin">
          <span class="el-dropdown-link">
            您好,Admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>基本信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="ChangeColor">
          <a href="javascricp:;" @click="Change">
            <img src="../images/水滴.svg" alt="" class="ChangeImg"
          /></a>
        </div>
        <div class="Quit">
          <a href="javascricp:;" @click="logout"
            ><img src="../images/退出.svg" alt="" class="QuitImg"
          /></a>
        </div>
      </div>
    </div>
    <!-- 深色主题栏 -->
    <div :class="{ Header2: HeaderBox2 }">
      <div class="HeaderBox2">
        <img class="HeaderImage" src="../images/u963.svg" />
        <span class="HeaderTitle">冷链云平台</span>
        <div class="HeaderFlex">
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As1"
              >首页</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As2"
              >运输管理</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As3"
              >记录仪</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As4"
              >电子围栏</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As5"
              >用户管理</a
            ></span
          >
          <span class="HeaderA"
            ><a style="color: #ffffff" href="javascricp:;" @click="As6"
              >系统</a
            ></span
          >
        </div>
        <el-dropdown class="HeaderAdmin">
          <span class="el-dropdown-link">
            您好,Admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>基本信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="ChangeColor">
          <a href="javascricp:;" @click="Change2">
            <img src="../images/水滴 (1).svg" alt="" class="ChangeImg"
          /></a>
        </div>
        <div class="Quit">
          <a href="javascricp:;" @click="logout"
            ><img src="../images/退出.svg" alt="" class="QuitImg"
          /></a>
        </div>
      </div>
    </div>
    <!-- 权限系统未渲染状态 -->
    <div class="Boxflex">
      <div class="Aside">
        <div :class="{ Headershow1: HeaderVisible1 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toWelcome"
                ><img
                  class="AsidePicture"
                  src="../images/shouye.svg"
                  alt=""
                />首页</a
              ></span
            >
          </div>
        </div>
        <div :class="{ Headershow2: HeaderVisible2 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toTransport"
                ><img
                  class="AsidePicture"
                  src="../images/xiaohuoche.svg"
                  alt=""
                />
                运输管理</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="
                  color: black;
                  a:hover: {
                    color: blue;
                  }
                "
                href="javascript:void(0);"
                @click="toTransport"
              >
                运输信息</a
              ></span
            >
          </div>
        </div>
        <div :class="{ Headershow3: HeaderVisible3 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toRecord"
                ><img
                  class="AsidePicture"
                  src="../images/zhangdan.svg"
                  alt=""
                />
                记录仪</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toRecord"
              >
                记录仪列表</a
              ></span
            >
          </div>
        </div>
        <div :class="{ Headershow4: HeaderVisible4 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toEnclosure"
                ><img class="AsidePicture" src="../images/baobiao.svg" alt="" />
                电子围栏</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toEnclosure"
              >
                围栏列表</a
              ></span
            >
          </div>
        </div>
        <div :class="{ Headershow5: HeaderVisible5 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toUser"
                ><img class="AsidePicture" src="../images/liebiao.svg" alt="" />
                用户管理</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toUser"
              >
                用户列表</a
              ></span
            >
          </div>
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toJurisdiction"
                ><img
                  class="AsidePicture"
                  src="../images/shoucang.svg"
                  alt=""
                />
                权限管理</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toJurisdiction"
              >
                权限列表</a
              ></span
            >
          </div>
        </div>
        <div :class="{ Headershow6: HeaderVisible6 }">
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toFirmware"
                ><img class="AsidePicture" src="../images/shezhi.svg" alt="" />
                记录仪固件管理</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toFirmware"
              >
                固件列表</a
              ></span
            >
          </div>
          <div class="AsideBox1">
            <span class="AsideBox1_1"
              ><a
                style="color: #999999"
                href="javascript:void(0);"
                @click="toInterface"
                ><img class="AsidePicture" src="../images/tongzhi.svg" />
                短信管理</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toInterface"
              >
                短信接口</a
              ></span
            >
          </div>
          <div class="AsideBox2">
            <span class="AsideBox2_1"
              ><a
                style="color: black"
                href="javascript:void(0);"
                @click="toSend"
              >
                短信群发</a
              ></span
            >
          </div>
        </div>
      </div>

      <div class="Main">
        <router-view></router-view>
        <span class="copyright">© 2020 美橙西西版权所有</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 定义左侧显示参数
      HeaderVisible1: false,
      HeaderVisible2: true,
      HeaderVisible3: true,
      HeaderVisible4: true,
      HeaderVisible5: true,
      HeaderVisible6: true,
      // 定义换肤参数
      HeaderBox: false,
      HeaderBox2: true,
    };
  },

  methods: {
    // 头部方法start
    // 点击切换侧边栏
    As1() {
      this.$router.push("/Welcome");
      this.HeaderVisible1 = false;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As2() {
      this.$router.push("/Transport");
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = false;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As3() {
      this.$router.push("/record");
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = false;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As4() {
      this.$router.push("/enclosure");
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = false;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As5() {
      this.$router.push("/user");
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = false;
      this.HeaderVisible6 = true;
    },
    As6() {
      this.$router.push("/firmware");
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = false;
    },
    // 换肤
    Change() {
      this.HeaderBox = true;
      this.HeaderBox2 = false;
    },
    Change2() {
      this.HeaderBox = false;
      this.HeaderBox2 = true;
    },
    // 退出登录
    logout() {
      this.$confirm("是否退出当前账号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({ type: "success", message: "退出成功!" });
          window.sessionStorage.clear();
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({ type: "info", message: "已取消退出" });
        });
      if ((type = "success")) return;
    },
    // 跳转路由
    toWelcome() {
      this.$router.push("/Welcome");
    },
    toTransport() {
      this.$router.push("/Transport");
    },
    toRecord() {
      this.$router.push("/record");
    },
    toEnclosure() {
      this.$router.push("/enclosure");
    },
    toUser() {
      this.$router.push("/user");
    },
    toFirmware() {
      this.$router.push("/firmware");
    },
    toJurisdiction() {
      this.$router.push("/jurisdiction");
    },
    toJurisdiction() {
      this.$router.push("/jurisdiction");
    },
    toInterface() {
      this.$router.push("/interface");
    },
    toSend() {
      this.$router.push("/send");
    },
  },
};
</script>
<style lang='less' scoped>
// 主体样式start
@import "../css/home/home.css";

// 显示样式end
</style>