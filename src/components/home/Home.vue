<!-- 系统框架 -->
<template>
  <div>
    <el-container>
      <!-- 浅色主体栏 -->
      <el-header :class="{ Header: HeaderBox }">
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
      </el-header>
      <!-- 深色主题栏 -->
      <el-header :class="{ Header2: HeaderBox2 }">
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
      </el-header>
      <!-- 权限系统未渲染状态 -->
      <el-container>
        <el-aside class="Aside"
          ><div :class="{ Headershow1: HeaderVisible1 }">
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
                  ><img
                    class="AsidePicture"
                    src="../images/baobiao.svg"
                    alt=""
                  />
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
                  ><img
                    class="AsidePicture"
                    src="../images/liebiao.svg"
                    alt=""
                  />
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
                  ><img
                    class="AsidePicture"
                    src="../images/shezhi.svg"
                    alt=""
                  />
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
        </el-aside>
        <el-container>
          <el-main class="Main"> <router-view></router-view></el-main>

          <div class="copyright">© 2020 美橙西西版权所有</div>
        </el-container>
      </el-container>
    </el-container>
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
      this.HeaderVisible1 = false;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As2() {
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = false;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As3() {
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = false;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As4() {
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = false;
      this.HeaderVisible5 = true;
      this.HeaderVisible6 = true;
    },
    As5() {
      this.HeaderVisible1 = true;
      this.HeaderVisible2 = true;
      this.HeaderVisible3 = true;
      this.HeaderVisible4 = true;
      this.HeaderVisible5 = false;
      this.HeaderVisible6 = true;
    },
    As6() {
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
      this.$router.push("/home");
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

a {
  text-decoration: none;
}
a:hover {
  color: #a2d5f2 !important;
}
.Header {
  display: none;
}
.Header2 {
  display: none;
}
.Aside {
  position: relative;
  top: 10px;
  height: 396px;
  width: 200px !important;
}
.Main {
  position: relative;
  top: 10px;
  background-color: #f5f5f5;
  height: 2230px;
  width: 1223px;
}

.copyright {
  color: #cccccc;
  position: absolute;
  left: 675px;
  top: 2270px;
}
// 主体样式end
// 头部样式start
.el-header {
  padding: 0;
}
.HeaderBox {
  height: 70px;
  width: 1423px;
  background-image: linear-gradient(
    -225deg,
    #22e1ff 0%,
    #1d8fe1 48%,
    #625eb1 100%
  );
}
.HeaderBox2 {
  height: 70px;
  width: 1423px;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
}

.HeaderImage {
  width: 40px;
  height: 40px;
  position: relative;
  top: 15px;
  left: 2px;
}
.HeaderTitle {
  position: relative;
  top: 2px;
  left: 12px;
  font-weight: 700;
  color: #ffffff;
  font-size: 20px;
}
.HeaderFlex {
  color: #ffffff !important;
  display: flex;
}
.HeaderA {
  margin: 20px;
  display: block;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  top: -38px;
  left: 215px;
}
.HeaderAdmin {
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  position: relative;
  top: -76px;
  left: 1181px;
}
.Quit {
  position: relative;
  top: -198px;
  left: 1358px;
  width: 60px;
  height: 70px;
}
.ChangeColor {
  position: relative;
  top: -126px;
  left: 1297px;
  width: 60px;
  height: 70px;
}
.ChangeImg {
  position: relative;
  top: 23px;
  left: 13px;
  width: 30px;
  height: 30px;
}
.QuitImg {
  position: relative;
  top: 27px;
  left: 13px;
  width: 25px;
  height: 25px;
}
// 头部样式end
// 侧边栏样式start
.AsideBox1 {
  border: 1px solid #f2f2f2;
  font-weight: 700;
  background-color: #f2f2f2;
  color: #999999;
  height: 50px;
}
.AsideBox1_1 {
  font-size: 14px;
  position: relative;
  top: 15px;
  left: 20px;
}
.AsideBox2 {
  font-size: 12px;
  border: 1px solid #ffffff;
  font-weight: 700;

  height: 50px;
}
.AsideBox2_1 {
  position: relative;
  top: 15px;
  left: 53px;
}
.AsidePicture {
  position: relative;
  top: 2px;
  left: -5px;
  width: 14px;
  height: 14px;
}

// 侧边栏样式end
// 显示样式start
.Headershow1 {
  display: none;
}
.Headershow2 {
  display: none;
}
.Headershow3 {
  display: none;
}
.Headershow4 {
  display: none;
}
.Headershow5 {
  display: none;
}
.Headershow6 {
  display: none;
}
// 显示样式end
</style>