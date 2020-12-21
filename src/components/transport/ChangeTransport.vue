<!-- 运输管理-编辑订单 -->
<template>
  <div>
    <!-- 导航 -->
    <el-card class="box-0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Transport' }"
          ><strong>运输管理</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>编辑订单</strong> </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 表头 -->
    <el-card class="box-card2">
      <span><strong>编辑运输单</strong></span>
      <el-form
        label-position="top"
        :model="ChangeForm"
        :rules="ChangeFormRules"
        ref="ChangeFormRef"
        label-width="70px"
      >
        <!-- 基础信息 -->
        <div class="CHBasicInformation">
          <span class="CHBasicIfTtile">基础信息</span>
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
                v-model="ChangeForm.NameOfGoods"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 快递单号 -->
          <el-col :span="8">
            <el-form-item label="快递单号" prop="CourierNumber">
              <el-input
                placeholder="请填写运输单号"
                v-model="ChangeForm.CourierNumber"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 托运人-->
          <el-col :span="8">
            <el-form-item label="托运人" prop="shipper">
              <el-input
                placeholder="请填写托运人姓名"
                v-model="ChangeForm.shipper"
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
                v-model="ChangeForm.IDTransportation"
                placeholder="请输入货件名称"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <!-- 运输方式 -->
          <el-col :span="8">
            <el-form-item label="运输方式" prop="TypeOfShipping">
              <el-select v-model="ChangeForm.TypeOfShipping">
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
              <el-select v-model="ChangeForm.TransportStatus">
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
                v-model="ChangeForm.consignee"
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
              v-model="ChangeForm.text"
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
        <div class="CHShippingInf">
          <span class="CHShippingInfTitle">发货信息</span>
          <el-checkbox class="CHShippingInfCheck" v-model="ChangeForm.inline"
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
                v-model="ChangeForm.CorporateName"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市区" prop="country">
              <el-cascader
                v-model="ChangeForm.country"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress">
              <el-input
                placeholder="请填写发货方公司详细地址"
                v-model="ChangeForm.CompanyAddress"
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
                v-model="ChangeForm.PostalCode"
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
                  v-model="ChangeForm.time"
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
          <el-checkbox class="ShippingInfCheck2" v-model="ChangeForm.inline2"
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
                v-model="ChangeForm.CorporateName2"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市/区" prop="country2">
              <el-cascader
                v-model="ChangeForm.country2"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress2">
              <el-input
                placeholder="请填写收货方公司详细地址"
                v-model="ChangeForm.CompanyAddress2"
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
                v-model="ChangeForm.PostalCode2"
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
                  v-model="ChangeForm.time2"
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
                v-model="ChangeForm.phone"
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
                v-model="ChangeForm.name"
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
      ChangeForm: {
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
      ChangeFormRules: {
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

  components: {
    CargoDetails: CargoDetails,
    AOTRecorder: AOTRecorder,
  },

  methods: {},
};
</script>
<style lang='less' scoped>
.ChangeBox {
  position: relative;
  top: 15px;
  height: 2090px;
}
.CHBasicInformation {
  position: relative;
  top: 15px;
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.CHBasicIfTtile {
  color: black;
}
</style>