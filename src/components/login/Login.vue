<!-- 登录页面 -->
<template>
  <div>
    <el-container>
      <el-header class="header"><div class="title">美橙西西</div></el-header>
      <el-main class="main">
        <img src="../images/温度.png" alt="" class="picture" />
        <div class="word1">温度记录仪云平台</div>
        <div class="word2">冷链实时监控</div>
        <el-card class="card1">
          <!-- 登录输入表单start -->
          <div :class="{ Passwordshow: PasswordVisible }">
            <!-- 标题栏 -->
            <div>
              <div class="LoginTitle">密码登录</div>
              <img src="../images/u3.svg" class="LoginImage" />
              <div class="LoginTitle2">扫码登录</div>
              <!-- 扫码登录跳转页面 -->
              <router-link to="">
                <img src="../images/扫一扫 (1).svg" class="LoginClick" />
              </router-link>
            </div>
            <!-- 账号输入框 -->
            <el-form
              class="PasswordForm"
              :model="loginForm"
              :rules="loginRules"
              ref="loginFormRef"
            >
              <el-form-item prop="username">
                <el-input
                  prefix-icon="iconfont icon-denglu"
                  v-model="loginForm.username"
                  placeholder="请输入登录名"
                ></el-input>
              </el-form-item>
              <!-- 密码输入框 -->
              <el-form-item prop="password">
                <el-input
                  type="password"
                  prefix-icon="iconfont icon-mima"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                  @keyup.enter.native="login"
                ></el-input>
              </el-form-item>
              <!-- 登录按钮 -->
              <el-form-item>
                <el-button class="PasswordButton" type="primary" @click="login"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
            <!-- 跳转选项 -->
            <div class="ToRegister">
              <a @click="ToRegister" href="javascript:;">注册</a>
            </div>
            <div class="ToForget">
              <a @click="ToForget" href="javascript:;">忘记密码</a>
            </div>
          </div>
          <!-- 密码输入表单end-->
          <!-- 注册输入表单start -->
          <div :class="{ Registershow: RegisterVisible }">
            <!-- 标题栏 -->
            <div>
              <div class="RegisterTitle">注册</div>
            </div>
            <!-- 账号输入框 -->
            <el-form
              class="RegisterForm"
              :model="RegisterForm"
              :rules="RegisterRules"
              ref="RegisterForm"
            >
              <el-form-item prop="Reusername">
                <el-input
                  v-model="RegisterForm.Reusername"
                  placeholder="请输入新的登录名"
                ></el-input>
              </el-form-item>
              <!-- 密码输入框 -->
              <el-form-item prop="pass">
                <el-input
                  type="password"
                  v-model="RegisterForm.pass"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                  type="password"
                  v-model="RegisterForm.checkPass"
                  placeholder="请再次确认密码"
                ></el-input>
              </el-form-item>
              <!-- 注册按钮 -->

              <el-button
                class="RegisterButton"
                type="primary"
                @click="Register('RegisterForm')"
                >注册</el-button
              >
            </el-form>
            <!-- 跳转选项 -->
            <div class="ToPassword">
              <a @click="ToPassword" href="javascript:;">返回登录</a>
            </div>
          </div>
          <!-- 注册输入表单end-->
          <!-- 忘记密码表单start -->
          <div :class="{ Forgetshow: ForgetVisible }">
            <!-- 标题栏 -->
            <div>
              <div class="ForgetTitle">忘记密码</div>
            </div>
            <!-- 账号输入框 -->
            <el-form
              class="ForgetForm"
              :model="ForgetForm"
              :rules="ForgetRules"
              ref="ForgetForm"
            >
              <el-form-item prop="phone">
                <el-input
                  class="FoInput"
                  v-model="ForgetForm.phone"
                  placeholder="请输入注册时的手机号"
                ></el-input>
                <el-button
                  class="SendMsg"
                  @click="sendMsg"
                  :disabled="isDisabled"
                  type="primary"
                  >{{ buttonName }}</el-button
                >
              </el-form-item>
              <!-- 验证码输入框 -->
              <el-form-item prop="Verification">
                <el-input
                  v-model="ForgetForm.Verification"
                  placeholder="请输入验证码"
                ></el-input>
              </el-form-item>
              <!-- 注册按钮 -->
              <el-form-item>
                <el-button class="ForgetButton" type="primary" @click="Forget"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
            <!-- 跳转选项 -->
            <div class="ToPassword">
              <a @click="ToPassword2" href="javascript:;">返回登录</a>
            </div>
          </div>
          <!-- 忘记密码输入表单end-->
        </el-card>
      </el-main>
      <el-footer class="footer">
        <div class="copyright">© 2020 美橙西西版权所有</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.RegisterForm.checkPass !== "") {
          this.$refs.RegisterForm.validateField("checkPass");
        }
        callback();
      }
    };
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.RegisterForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    //   指定手机的校验规则
    var checkMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

      if (regMobile.test(value)) {
        return cb();
      }

      cb(new Error("请输入合法的手机号"));
    };

    return {
      // 验证手机号
      buttonName: "发送短信",
      isDisabled: false,
      time: 60,

      // 定义显示参数
      PasswordVisible: false,
      RegisterVisible: true,
      ForgetVisible: true,

      //登录数组
      loginForm: {
        uesrname: "",
        password: "",
      },

      //注册数组
      RegisterForm: {
        Reusername: "",
        pass: "",
        checkPass: "",
      },

      //忘记密码数组
      ForgetForm: {
        Fophone: "",
        Verification: "",
      },

      // 登录名和密码是否合法
      loginRules: {
        username: [
          { required: true, message: "登录名称不能为空", trigger: "blur" },
          {
            min: 1,
            max: 32,
            message: "用户名长度在32个字符之内",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 1,
            max: 32,
            message: "密码长度在16个字符之内",
            trigger: "blur",
          },
        ],
      },

      // 注册名合法验证
      RegisterRules: {
        Reusername: [
          { required: true, message: "登录名称不能为空", trigger: "blur" },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },

      // 忘记密码邮箱是否合法
      ForgetRules: {
        phone: [
          { required: true, message: "请输入电话号码", trigger: "blur" },
          { validator: checkMobile, trigger: "change" },
        ],
        Verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    //验证登录的时候账号密码是否存在且匹配
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        // 从页面请求数据
        const { data: res } = await this.$http.post("login", this.loginForm);
        console.log(res);
        if (res.meta.status !== 200)
          return this.$message.error("密码或用户名错误");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token", res.data.token);
        //页面完成跳转
        this.$router.push("/home");
      });
    },

    // 注册新用户
    Register(RegisterForm) {
      this.$refs.RegisterForm.validate(async (valid) => {
        if (!valid) return;
        // 从页面请求数据
        const { data: res } = await this.$http.post(
          "registeradmin",
          this.RegisterForm
        );
        console.log(res);
        if (res.meta.status !== 201) return this.$message.error("注册用户失败");
        this.$message.success("注册用户成功");

        //页面完成跳转
        this.PasswordVisible = false;
        this.RegisterVisible = true;
      });
    },

    // 忘记密码-登录
    Forget() {
      this.$refs.ForgetForm.validate(async (valid) => {
        if (!valid) return;
        // 从页面请求数据
        const { data: res } = await this.$http.post(
          "loginphone",
          this.ForgetForm
        );
        console.log(res);
        if (res.meta.status !== 200) return this.$message.error("验证码错误");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token", res.data.token);
        //页面完成跳转
        this.$router.push("/home");
      });
    },

    // 短信验证功能
    sendMsg() {
      let me = this;
      me.isDisabled = true;
      let interval = window.setInterval(function () {
        me.buttonName = "（" + me.time + "秒）后重新发送";
        --me.time;
        if (me.time < 0) {
          me.buttonName = "重新发送";
          me.time = 60;
          me.isDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);
      this.$message.success("验证码发送成功成功");
    },

    // 跳转按钮
    ToRegister() {
      this.PasswordVisible = true;
      this.RegisterVisible = false;
    },
    ToForget() {
      this.PasswordVisible = true;
      this.ForgetVisible = false;
    },
    ToPassword() {
      this.PasswordVisible = false;
      this.RegisterVisible = true;
    },
    ToPassword2() {
      this.PasswordVisible = false;
      this.ForgetVisible = true;
    },
  },
};
</script>
<style lang='less' scoped>
// 主体样式start
a {
  font-size: 12px;
  color: #00c1de;
  text-decoration: none;
}
.header {
  background-color: #f5f5ff;
  font-size: 18px;
  color: #787887;
  width: 100%;
  height: 50px;
}
.title {
  position: relative;
  top: 25px;
}
.main {
  background-image: linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%);
  width: 100%;
  height: 700px;
}
.picture {
  position: absolute;
  top: 270px;
  left: 200px;
}
.word1 {
  color: #ffffff;
  position: absolute;
  font-size: 28px;
  font-weight: 700;
  left: 350px;
  top: 300px;
}
.word2 {
  color: #ffffff;
  position: absolute;
  font-size: 20px;
  font-weight: 400;
  left: 350px;
  top: 350px;
}
.card1 {
  position: absolute;
  width: 410px;
  height: 355px;
  left: 850px;
  top: 190px;
}
.footer {
  background-color: #f5f5ff;
  font-size: 14px;

  width: 100%;
  height: 100px;
}
.copyright {
  color: #cccccc;
  position: relative;
  left: 600px;
  top: 30px;
}
// 主体样式end
// 密码登录样式start
.LoginTitle {
  color: #787887;
  position: absolute;
  left: 40px;
  top: 48px;
  font-size: 17px;
}
.LoginImage {
  position: absolute;
  left: 270px;
  top: 50px;
}
.LoginTitle2 {
  color: #0079fe;
  position: absolute;
  left: 280px;
  top: 52px;
  font-size: 12px;
}
.LoginClick {
  position: absolute;
  left: 345px;
  top: 43px;
  height: 35px;
  width: 35px;
}
.PasswordForm {
  position: relative;
  left: 15px;
  width: 345px;
  top: 85px;
}

.PasswordButton {
  position: relative;
  width: 345px;
  background-color: #00c1de;
}
.ToRegister {
  position: absolute;
  left: 35px;
  top: 280px;
}
.ToForget {
  position: absolute;
  left: 330px;
  top: 281px;
}
// 密码登录样式end
// 注册样式start
.RegisterTitle {
  color: #787887;
  position: absolute;
  left: 40px;
  top: 30px;
  font-size: 17px;
}
.RegisterForm {
  position: relative;
  left: 15px;
  width: 345px;
  top: 48px;
}
.RegisterButton {
  position: relative;
  width: 345px;
  background-color: #00c1de;
}
.ToPassword {
  position: absolute;
  left: 35px;
  top: 310px;
}
// 注册样式end
// 忘记密码样式start
.ForgetTitle {
  color: #787887;
  position: absolute;
  left: 40px;
  top: 50px;
  font-size: 17px;
}
.ForgetForm {
  position: relative;
  left: 15px;
  width: 345px;
  top: 88px;
}
.ForgetButton {
  position: relative;
  width: 345px;
  background-color: #00c1de;
}
.ToPassword {
  position: absolute;
  left: 35px;
  top: 310px;
}
.FoInput {
  width: 185px;
}
.SendMsg {
  width: 160px;
}
// 忘记密码样式end
// 三个显示样式
.Passwordshow {
  display: none;
}
.Registershow {
  display: none;
}
.Forgetshow {
  display: none;
}
</style>