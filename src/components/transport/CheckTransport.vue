<!-- 查看运输单具体详情 -->
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
        <el-breadcrumb-item><strong>查看订单</strong> </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <!-- 查看订单内容主体 -->
    <el-card class="box-card2">
      <span><strong>运输单详情</strong></span>
      <el-form
        label-position="top"
        :model="CheckForm"
        ref="CheckFormRef"
        label-width="70px"
      >
        <div class="CBBasicInformation">
          <span class="CBBasicIfTtile">基础信息</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 货物名称 -->
          <el-col :span="8">
            <el-form-item label="货物名称" prop="NameOfGoods">
              <el-input disabled v-model="CheckForm.NameOfGoods"></el-input>
            </el-form-item>
          </el-col>
          <!-- 快递单号 -->
          <el-col :span="8">
            <el-form-item label="快递单号" prop="CourierNumber">
              <el-input disabled v-model="CheckForm.CourierNumber"></el-input>
            </el-form-item>
          </el-col>
          <!-- 托运人-->
          <el-col :span="8">
            <el-form-item label="托运人" prop="shipper">
              <el-input disabled v-model="CheckForm.shipper"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 运输ID -->
          <el-col :span="8">
            <el-form-item label="运输ID" prop="IDTransportation">
              <el-input v-model="CheckForm.IDTransportation" disabled>
              </el-input>
            </el-form-item>
          </el-col>
          <!-- 运输方式 -->
          <el-col :span="8">
            <el-form-item label="运输方式" prop="TypeOfShipping">
              <el-input v-model="CheckForm.TypeOfShipping" disabled> </el-input>
            </el-form-item>
          </el-col>
          <!-- 运输状态-->
          <el-col :span="8">
            <el-form-item label="运输状态" prop="TransportStatus">
              <el-input v-model="CheckForm.TransportStatus" disabled>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <!-- 收货人 -->
        <el-row :gutter="60">
          <el-col :span="8">
            <el-form-item label="收货人" prop="consignee">
              <el-input v-model="CheckForm.consignee" disabled> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第四行 -->
        <!-- 备注 -->
        <el-row>
          <el-form-item label="发货备注">
            <el-input
              type="textarea"
              disabled
              v-model="CheckForm.text"
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
        <!-- 收货信息 -->
        <div class="ShippingInf2">
          <span class="ShippingInfTitle2">收货信息</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName2">
              <el-input disabled v-model="CheckForm.CorporateName2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市/区" prop="country2">
              <el-input disabled v-model="CheckForm.country2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress2">
              <el-input disabled v-model="CheckForm.CompanyAddress2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode2">
              <el-input disabled v-model="CheckForm.PostalCode2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 规定收货时间 -->
          <el-col :span="8">
            <el-form-item label="规定收货时间">
              <el-form-item prop="time2">
                <el-input disabled v-model="CheckForm.time2"></el-input>
              </el-form-item>
            </el-form-item>
          </el-col>
          <!-- 手机号码 -->
          <el-col :span="8">
            <el-form-item label="手机号码" prop="phone">
              <el-input disabled v-model="CheckForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 收货信息 -->
        <div class="ShippingInf2">
          <span class="ShippingInfTitle2">收货信息</span>
        </div>
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName2">
              <el-input disabled v-model="CheckForm.CorporateName2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份/市/区" prop="country2">
              <el-input disabled v-model="CheckForm.country2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 公司详细地址 -->
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress2">
              <el-input disabled v-model="CheckForm.CompanyAddress2"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode2">
              <el-input disabled v-model="CheckForm.PostalCode2"></el-input>
            </el-form-item>
          </el-col>
          <!-- 规定收货时间 -->
          <el-col :span="8">
            <el-form-item label="规定收货时间">
              <el-form-item prop="time2">
                <el-input disabled v-model="CheckForm.time2"></el-input>
              </el-form-item>
            </el-form-item>
          </el-col>
          <!-- 手机号码 -->
          <el-col :span="8">
            <el-form-item label="手机号码" prop="phone">
              <el-input disabled v-model="CheckForm.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <!-- 收货人姓名 -->
          <el-col :span="8">
            <el-form-item label="收货人姓名" prop="name">
              <el-input disabled v-model="CheckForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
      CheckForm: {
        NameOfGoods: "",
        CourierNumber: "",
        shipper: "",
        IDTransportation: "",
        TypeOfShipping: "",
        TypeOfShipping: "",
        consignee: "",
        text: "",
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
    };
  },

  components: { CargoDetails: CargoDetails, AOTRecorder: AOTRecorder },

  methods: {},
};
</script>
<style lang='less' scoped>
.CheckBox {
  top: 15px;
  position: relative;
  height: 1930px;
}
.CBBasicInformation {
  position: relative;
  top: 15px;
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.CBBasicIfTtile {
  color: black;
}
.AOTRecordersAdd {
  position: relative;
  top: -3px;
  left: 940px;
  height: 14px;
  text-align: center;
  line-height: 7px !important;
}
.CargoDetailsAdd {
  position: relative;
  top: -3px;
  left: 990px;
  height: 14px;
  text-align: center;
  line-height: 7px !important;
}
.CHShippingInf {
  height: 40px;
  margin-top: -10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.CHShippingInfTitle {
  position: relative;
  left: 5px !important;
  top: 45px;
}
.CHShippingInfCheck {
  position: relative;
  left: 985px;
}
</style>