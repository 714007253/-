<!-- 创建记录仪数据 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Record' }"
          ><strong>记录仪列表</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>新的记录仪</strong> </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 表头 -->
    <el-card class="box-card1c">
      <span><strong>新增记录仪</strong></span>
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
          <el-col :span="8">
            <el-form-item label="记录仪编号" required prop="RecordId">
              <el-input
                placeholder="请填写记录仪唯一编号"
                v-model="addForm.RecordId"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="记录仪型号" required prop="RecordStytle">
              <el-input
                placeholder="请填写记录仪型号"
                v-model="addForm.RecordStytle"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所属公司" required prop="RecordCompany">
              <el-input
                placeholder="请填写疫苗/药品公司名称"
                v-model="addForm.RecordCompany"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="国家/省份/市区" prop="country">
              <el-cascader
                v-model="addForm.country"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress">
              <el-input
                placeholder="请填写发货方公司详细地址"
                v-model="addForm.CompanyAddress"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系人" prop="contacts" required>
              <el-input
                placeholder="请填写公司联系人"
                v-model="addForm.contacts"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="手机号码" prop="phone" required>
              <el-input
                placeholder="请填写联系人手机号码"
                v-model="addForm.phone"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="微信" prop="wechat">
              <el-input
                placeholder="请填写联系人微信"
                v-model="addForm.wechat"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱" prop="email">
              <el-input
                placeholder="请填写联系人邮箱"
                v-model="addForm.email"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 物流信息 -->
        <div class="BasicInformation">
          <span class="BasicIfTtile">物流信息</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="快递单号" required prop="CourierId">
              <el-input
                placeholder="请填写快递单号"
                v-model="addForm.CourierId"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发货人" required prop="DeliverName">
              <el-input
                placeholder="请填写发货人姓名"
                v-model="addForm.DeliverName"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" required prop="DeliverPhone">
              <el-input
                placeholder="请填写发货人手机号码"
                v-model="addForm.DeliverPhone"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="国家/省份/市区" prop="DeliverCountry" required>
              <el-cascader
                v-model="addForm.DeliverCountry"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="公司详细地址"
              prop="DeliverCompanyAddress"
              required
            >
              <el-input
                placeholder="请填写发货方公司详细地址"
                v-model="addForm.DeliverCompanyAddress"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="物流公司" prop="DeliverLogistics" required>
              <el-input
                placeholder="请填写物流公司名称"
                v-model="addForm.DeliverLogistics"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="揽收员" prop="CollectorName" required>
              <el-input
                placeholder="请填写揽收人姓名"
                v-model="addForm.CollectorName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="揽收时间" prop="CollectorTime" required>
              <el-input
                placeholder="请填写揽收员揽收时间"
                v-model="addForm.CollectorTime"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" prop="Collectorphone">
              <el-input
                placeholder="请填写揽收人手机号码"
                v-model="addForm.Collectorphone"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="收货人" prop="ReceiveName" required>
              <el-input
                placeholder="请填写收货人姓名"
                v-model="addForm.ReceiveName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" prop="ReceivePhone" required>
              <el-input
                placeholder="请填写收货人手机号码"
                v-model="addForm.ReceivePhone"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="国家/省份/市区" prop="ReceiveCountry" required>
              <el-cascader
                v-model="addForm.ReceiveCountry"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第五行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item
              label="收货详细地址"
              prop="ReceiveCompanyAddress"
              required
            >
              <el-input
                placeholder="请填写收货方公司详细地址"
                v-model="addForm.ReceiveCompanyAddress"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 订单信息 -->
        <div class="BasicInformation">
          <span class="BasicIfTtile">订单信息</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="订单编号" required prop="TransportId">
              <el-input
                placeholder="请填写运送的疫苗订单编号"
                v-model="addForm.TransportId"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="发货人" required prop="TransportNumber">
              <el-input
                placeholder="请填写发货人姓名"
                v-model="addForm.TransportNumber"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="签约时间" required prop="SiginingTime">
              <el-date-picker
                type="date"
                placeholder="请选择日期时间"
                v-model="addForm.SiginingTime"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="约定交货时间" required prop="DateDeliveryTime">
              <el-date-picker
                type="date"
                placeholder="请选择日期时间"
                v-model="addForm.DateDeliveryTime"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
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
        <!-- 保存与重置 -->
        <el-button type="primary" class="Add" @click="AddRecord;"
          >保存</el-button
        >
        <el-button class="Recover" @click="Recover">重置</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addForm: {
        // 基础信息
        RecordId: "",
        RecordStytle: "",
        RecordCompany: "",
        country: "",
        CompanyAddress: "",
        contacts: "",
        phone: "",
        wechat: "",
        email: "",
        // 物流信息
        CourierId: "",
        DeliverName: "",
        DeliverPhone: "",
        DeliverCountry: "",
        DeliverCompanyAddress: "",
        DeliverLogistics: "",
        CollectorName: "",
        CollectorTime: "",
        Collectorphone: "",
        ReceiveName: "",
        ReceivePhone: "",
        ReceiveCountry: "",
        ReceiveCompanyAddress: "",
        // 订单信息
        TransportId: "",
        TransportNumber: "",
        SiginingTime: "",
        DateDeliveryTime: "",
        text: "",
      },
      addFormRules: {
        RecordId: [
          { required: true, message: "请填写记录仪唯一编号", trigger: "blur" },
        ],
        RecordStytle: [
          { required: true, message: "请填写记录仪型号", trigger: "blur" },
        ],
        RecordCompany: [
          {
            required: true,
            message: "请填写疫苗/药品公司名称",
            trigger: "blur",
          },
        ],
        contacts: [
          { required: true, message: "请填写公司联系人", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请填写联系人手机号码", trigger: "blur" },
        ],
        CourierId: [
          { required: true, message: "请填写快递单号", trigger: "blur" },
        ],
        DeliverName: [
          { required: true, message: "请填写发货人姓名", trigger: "blur" },
        ],
        DeliverPhone: [
          {
            required: true,
            message: "请填写发货人手机号码",
            trigger: "blur",
          },
        ],
        DeliverCompanyAddress: [
          {
            required: true,
            message: "请填写发货方公司详细地址",
            trigger: "blur",
          },
        ],
        DeliverLogistics: [
          { required: true, message: "请填写物流公司名称", trigger: "blur" },
        ],
        CollectorName: [
          { required: true, message: "请填写揽收人姓名", trigger: "blur" },
        ],
        CollectorTime: [
          {
            required: true,
            message: "请填写揽收员揽收时间",
            trigger: "blur",
          },
        ],
        Collectorphone: [
          { required: true, message: "请填写揽收人手机号码", trigger: "blur" },
        ],
        ReceiveName: [
          { required: true, message: "请填写收货人姓名", trigger: "blur" },
        ],
        ReceivePhone: [
          { required: true, message: "请填写收货人手机号码", trigger: "blur" },
        ],
        ReceiveCompanyAddress: [
          {
            required: true,
            message: "请填写收货详细地址",
            trigger: "blur",
          },
        ],
        TransportId: [
          {
            required: true,
            message: "请填写运送的疫苗订单编号",
            trigger: "blur",
          },
        ],
        SiginingTime: [
          { required: true, message: "请选择签约时间", trigger: "blur" },
        ],
        DateDeliveryTime: [
          { required: true, message: "请选择约定交货时间", trigger: "blur" },
        ],
        DateDeliveryTime: [
          {
            required: true,
            message: "请选择签约日期时间",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    // 添加记录仪
    AddRecord() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$http.post("AddRecord", this.addForm);

        if (res.meta.status !== 201) {
          this.$message.error("添加记录仪失败！");
        }
        this.$message.success("添加记录仪成功！");
      });
      this.$router.push({ path: "/AddRecord" });
    },
    Recover() {
      this.$refs.addFormRef.resetFields();
    },
  },
};
</script>
<style lang='less' scoped>
</style>