<!-- 新增订单 -->
<template>
  <div>
    <el-card>
      <!-- 导航 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Transport' }"
          ><strong>运输管理</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>创建订单</strong> </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 表头 -->
    <el-card class="box-card">
      <span><strong>新增运输单</strong></span>
    </el-card>
    <el-card class="box-card2">
      <!-- 表单一 -->
      <el-form
        label-position="top"
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="70px"
      >
        <!-- 基础信息 -->
        <div class="BasicInformation">
          <span class="BasicIfTtile">基础信息</span>
          <span class="BasicIfpoint">*</span>
          <span class="BasicIfTtile2">为必填项</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 货物名称 -->
          <el-col :span="8">
            <el-form-item label="货物名称" prop="NameOfGoods">
              <el-input
                placeholder="请输入货件名称"
                v-model="addForm.NameOfGoods"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 快递单号 -->
          <el-col :span="8">
            <el-form-item label="快递单号" prop="CourierNumber">
              <el-input
                placeholder="请填写运输单号"
                v-model="addForm.CourierNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 托运人-->
          <el-col :span="8">
            <el-form-item label="托运人" prop="shipper">
              <el-input
                placeholder="请填写托运人姓名"
                v-model="addForm.shipper"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 运输ID -->
          <el-col :span="8">
            <el-form-item label="运输ID" prop="IDTransportation">
              <el-input
                v-model="addForm.IDTransportation"
                placeholder="请输入货件名称"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <!-- 运输方式 -->
          <el-col :span="8">
            <el-form-item label="运输方式" prop="TypeOfShipping">
              <el-select v-model="addForm.TypeOfShipping">
                <el-option label="航空" value="1"></el-option>
                <el-option label="铁路" value="2"></el-option>
                <el-option label="水路" value="3"></el-option>
                <el-option label="公路" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <!-- 运输状态-->
          <el-col :span="8">
            <el-form-item label="运输状态" prop="TransportStatus">
              <el-select v-model="addForm.TransportStatus">
                <el-option label="未开始" value="1"></el-option>
                <el-option label="运送中" value="2"></el-option>
                <el-option label="已完成" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <!-- 收货人 -->
        <el-row>
          <el-col :span="8">
            <el-form-item label="收货人" prop="consignee">
              <el-input
                v-model="addForm.consignee"
                placeholder="请填写收货人姓名"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <!-- 备注 -->
        <el-row>
          <el-form-item label="发货备注">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="addForm.text"
              maxlength="200"
              show-word-limit
              rows="7"
            >
            </el-input>
          </el-form-item>
        </el-row>
        <!-- 货物详情 -->
        <CargoDetails></CargoDetails>

        <!-- 温度记录仪授权 -->
        <AOTRecorder></AOTRecorder>

        <!-- 表单二 -->
        <!-- 发货信息 -->
        <div class="ShippingInf">
          <img src="../images/qibiao.svg" alt="" />
          <span class="ShippingInfTime">{{ createtime }}</span>
          <span class="ShippingInfTitle">发货信息</span>
          <el-checkbox class="ShippingInfCheck" v-model="addForm.inline"
            >数据联网</el-checkbox
          >
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName">
              <el-input
                placeholder="请填写疫苗/药品公司详细地址"
                v-model="addForm.CorporateName"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市区" prop="country">
              <el-cascader
                v-model="addForm.country"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress">
              <el-input
                placeholder="请填写发货方公司详细地址"
                v-model="addForm.CompanyAddress"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode">
              <el-input
                placeholder="请填写发货地邮政编码"
                v-model="addForm.PostalCode"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 规定发货时间 -->
          <el-col :span="8">
            <el-form-item label="规定发货时间" required>
              <el-form-item prop="time">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期时间"
                  v-model="addForm.time"
                  style="width: 100%"
                >
                </el-date-picker>
              </el-form-item>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 表单三 -->
        <!-- 收货信息 -->
        <div class="ShippingInf2">
          <span class="ShippingInfTitle2">收货信息</span>
          <el-checkbox class="ShippingInfCheck2" v-model="addForm.inline2"
            >数据联网</el-checkbox
          >
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName2">
              <el-input
                placeholder="请填写疫苗/药品公司详细地址"
                v-model="addForm.CorporateName2"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市/区" prop="country2">
              <el-cascader
                v-model="addForm.country2"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress2">
              <el-input
                placeholder="请填写收货方公司详细地址"
                v-model="addForm.CompanyAddress2"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode2">
              <el-input
                placeholder="请填写收货地邮政编码"
                v-model="addForm.PostalCode2"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 规定收货时间 -->
          <el-col :span="8">
            <el-form-item label="规定收货时间" required>
              <el-form-item prop="time2">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期时间"
                  v-model="addForm.time2"
                  style="width: 100%"
                >
                </el-date-picker>
              </el-form-item>
            </el-form-item>
          </el-col>
          <!-- 手机号码 -->
          <el-col :span="8">
            <el-form-item label="手机号码" prop="phone">
              <el-input
                placeholder="请填写收货人手机号码"
                v-model="addForm.phone"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <!-- 收货人姓名 -->
          <el-col :span="8">
            <el-form-item label="收货人姓名" prop="name">
              <el-input
                placeholder="请填写收货人姓名"
                v-model="addForm.name"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 保存与重置 -->
        <el-button type="primary" class="Add" @click="ADDtransport"
          >保存</el-button
        >
        <el-button class="Recover" @click="Recover">重置</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import CargoDetails from "../componentview/CargoDetails.vue";
import AOTRecorder from "../componentview/AOTRecorder.vue";
export default {
  data() {
    return {
      // 表单一数据定义
      addForm: {
        // 表一
        NameOfGoods: "",
        CourierNumber: "",
        shipper: "",
        IDTransportation: "",
        TypeOfShipping: "",
        TypeOfShipping: "",
        consignee: "",
        text: "",
        inline: "",
        inline2: "", //确定是否数据联网
        // 表二
        CorporateName: "",
        CompanyAddress: "",
        country: "",
        PostalCode: "",
        time: "",
        // 表三
        CorporateName2: "",
        CompanyAddress2: "",
        country2: "",
        PostalCode2: "",
        time2: "",
        phone: "",
        name: "",
      },
      //   获取创建时间
      createtime: "",
      //   下拉菜单一
      value: [],
      options: [],
      // 表单一验证规则
      addFormRules: {
        CourierNumber: [
          { required: true, message: "请输入快递单号", trigger: "blur" },
        ],
        NameOfGoods: [
          { required: true, message: "请输入货件名称", trigger: "blur" },
        ],
        shipper: [
          { required: true, message: "请填写托运人姓名", trigger: "blur" },
        ],
        TransportStatus: [
          { required: true, message: "请填写运输状态", trigger: "blur" },
        ],
        IDTransportation: [
          { required: true, message: "请输入货件名称", trigger: "blur" },
        ],
        TypeOfShipping: [
          { required: true, message: "请选择运输方式", trigger: "blur" },
        ],
        consignee: [
          { required: true, message: "请填写收货人姓名", trigger: "blur" },
        ],
        CorporateName: [
          {
            required: true,
            message: "请填写疫苗/药品公司详细地址",
            trigger: "blur",
          },
        ],
        country: [
          { required: true, message: "请输入发货地址", trigger: "blur" },
        ],
        CompanyAddress: [
          { required: true, message: "请输入发货地址", trigger: "blur" },
        ],
        PostalCode: [
          { required: true, message: "请填写发货地邮政编码", trigger: "blur" },
        ],
        time: [
          { required: true, message: "请填写规定发货时间", trigger: "blur" },
        ],
        CorporateName2: [
          {
            required: true,
            message: "请填写疫苗/药品公司详细地址",
            trigger: "blur",
          },
        ],
        country2: [
          { required: true, message: "请输入收货地址", trigger: "blur" },
        ],
        CompanyAddress2: [
          { required: true, message: "请输入收货地址", trigger: "blur" },
        ],
        time2: [{ required: true, message: "请选择日期时间", trigger: "blur" }],
        phone: [
          { required: true, message: "请填写收货人手机号码", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请填写收货人姓名", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    //   获取创建时间及两个下拉菜单的参数
    this.getnormalData();
  },
  components: {
    CargoDetails: CargoDetails,
    AOTRecorder: AOTRecorder,
  },
  methods: {
    //   获取创建时间及两个下拉菜单的参数
    async getnormalData() {
      const { data: res } = await this.$http.get("normalData");
      if (res.meta.status !== 200)
        return this.$message.error("获取基本数据失败");
      this.createtime = res.data.createtime;
      this.options = res.data.options;
      console.log(res);
    },

    // 添加订单
    ADDtransport() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post(
          "Addtransport",
          this.addForm
        );

        if (res.meta.status !== 201) {
          this.$message.error("添加订单失败！");
        }
        this.$message.success("添加订单成功！");
      });
      this.$router.push({ path: "/Transport" });
    },
    Recover() {
      this.$refs.addFormRef.resetFields();
    },
  },
};
</script>
<style lang='less' scoped>
@import "../css/CreateTransport.css";
</style>