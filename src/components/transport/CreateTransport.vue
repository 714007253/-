<!-- 创建新订单 -->
<template>
  <div>
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>运输管理</strong> </el-breadcrumb-item>
        <el-breadcrumb-item><strong>创建订单</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getTransportList"
          ><img src="../images/刷新.svg" class="RefreshImg" />
          <span class="RefreshTitle">刷新 </span>
        </el-button>
      </el-breadcrumb>
    </el-card>

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
          <span>基础信息</span>
          <span>*</span>
          <span>为必填项</span>
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
            <el-form-item label="托运人">
              <el-form-item prop="shipper">
                <el-input
                  placeholder="请填写托运人姓名"
                  v-model="addForm.shipper"
                ></el-input>
              </el-form-item>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 运输ID -->
          <el-col :span="8">
            <el-form-item label="运输ID" prop="addForm.IDTransportation">
              <el-input
                v-model="addForm.IDTransportation"
                placeholder="请输入货件名称"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <!-- 运输方式 -->
          <el-col :span="8">
            <el-form-item label="运输方式" prop="addForm.TypeOfShipping">
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
            <el-form-item label="运输状态" prop="addForm.TransportStatus">
              <el-select v-model="addForm.TypeOfShipping">
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
            <el-form-item label="收货人" prop="addForm.consignee">
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
              v-model="addForm.experiment9"
              maxlength="200"
              show-word-limit
              rows="7"
            >
            </el-input>
          </el-form-item>
        </el-row>

        <!-- 货物详情 -->
        <div class="CargoDetails">
          <span>货物详情</span>
          <el-button @click="">新增</el-button>
        </div>
        <el-table :data="CargorList" stripe>
          <!-- 报价单表单 -->
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="coffer1" label="冷链包ID" width="120">
          </el-table-column>
          <el-table-column prop="coffer2" label="集装箱ID" width="120">
          </el-table-column>
          <el-table-column prop="coffer3" label="数量(单位)" width="120">
          </el-table-column>
          <el-table-column prop="coffer4" label="长(单位)" width="120">
          </el-table-column>
          <el-table-column prop="coffer5" label="宽(单位)" width="120">
          </el-table-column>
          <el-table-column prop="coffer6" label="高(单位)" width="120">
          </el-table-column>
          <el-table-column prop="coffer7" label="重量(单位)" width="120">
          </el-table-column>
          <el-table-column prop="coffer7" label="抛重(单位)" width="120">
          </el-table-column>

          <!-- 操作区 -->
          <el-table-column label="操作" width="170">
            <template slot-scope="scope">
              <!-- 编辑按钮 -->
              <el-button size="mini" @click="changeEditDialog(scope.row.id)">
                编辑
              </el-button>
              <!-- 删除按钮 -->
              <el-button
                size="mini"
                type="danger"
                @click="removeEditById(scope.row.id)"
                >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 温度记录仪授权 -->
        <div class="AOTRecorder">
          <span>温度记录仪授权</span>
          <el-button @click="">新增</el-button>
        </div>
        <el-table :data="AOTRecorder" stripe>
          <!-- 报价单表单 -->
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="AOTRecorder" label="记录仪编号" width="120">
          </el-table-column>
          <el-table-column prop="AOTRecorder" label="添加日期" width="120">
          </el-table-column>

          <!-- 操作区 -->
          <el-table-column label="操作" width="170">
            <template slot-scope="scope">
              <!-- 编辑按钮 -->
              <el-button
                size="mini"
                @click="changeAOTRecorderDialog(scope.row.id)"
              >
                编辑
              </el-button>
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
      </el-form>
      <!-- 表单二 -->
      <!-- 发货信息 -->
      <div class="ShippingInformation">
        <img src="../images/qibiao.svg" alt="" />
        <span>{{ create.time }}</span>
        <span>发货信息</span>
        <el-radio v-model="" label="2">数据联网</el-radio>
      </div>
      <el-form
        label-position="top"
        :model="ShippingIfForm"
        :rules="ShippingIfFormRules"
        ref="ShippingIfFormRef"
        label-width="70px"
      >
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName">
              <el-input
                placeholder="请填写疫苗/药品公司详细地址"
                v-model="ShippingIfForm.CorporateName"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress">
              <el-input
                placeholder="请填写发货方公司详细地址"
                v-model="ShippingIfForm.CompanyAddress"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份" prop="ShippingIfForm.country">
              <el-cascader
                v-model="ShippingIfForm.country"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 市/区 -->
          <el-col :span="8">
            <el-form-item label="市/区" prop="ShippingIfForm.city">
              <el-cascader
                v-model="ShippingIfForm.city"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode">
              <el-input
                placeholder="请填写发货地邮政编码"
                v-model="ShippingIfForm.PostalCode"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <!-- 规定发货时间 -->
          <el-col :span="8">
            <el-form-item label="规定发货时间" required>
              <el-form-item prop="ShippingIfForm.time">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期时间"
                  v-model="ShippingIfForm.time"
                  style="width: 100%"
                >
                </el-date-picker>
              </el-form-item>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 表单三 -->
      <!-- 收货信息 -->
      <div class="ReceivingIF">
        <span>发货信息</span>
        <el-radio v-model="" label="2">数据联网</el-radio>
      </div>
      <el-form
        label-position="top"
        :model="ReceivingIFForm"
        :rules="ReceivingIFFormRules"
        ref="ReceivingIFFormRef"
        label-width="70px"
      >
        <!-- 第一行 -->
        <el-row :gutter="60">
          <!-- 公司名称 -->
          <el-col :span="8">
            <el-form-item label="公司名称" prop="CorporateName2">
              <el-input
                placeholder="请填写疫苗/药品公司详细地址"
                v-model="ReceivingIF.CorporateName2"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="公司详细地址" prop="CompanyAddress2">
              <el-input
                placeholder="请填写收货方公司详细地址"
                v-model="ReceivingIF.CompanyAddress2"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="60">
          <!-- 国家/省份 -->
          <el-col :span="8">
            <el-form-item label="国家/省份" prop="ShippingIfForm.country2">
              <el-cascader
                v-model="ReceivingIF.country2"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 市/区 -->
          <el-col :span="8">
            <el-form-item label="市/区" prop="ReceivingIF.city2">
              <el-cascader
                v-model="ReceivingIF.city2"
                :options="options"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <!-- 邮政编码 -->
          <el-col :span="8">
            <el-form-item label="邮政编码" prop="PostalCode2">
              <el-input
                placeholder="请填写收货地邮政编码"
                v-model="ReceivingIF.PostalCode2"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 第三行 -->
        <el-row :gutter="60">
          <!-- 规定发货时间 -->
          <el-col :span="8">
            <el-form-item label="规定发货时间" required>
              <el-form-item prop="time2">
                <el-date-picker
                  type="date"
                  placeholder="请选择日期时间"
                  v-model="ReceivingIF.time2"
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
                placeholder="请填写发货人手机号码"
                v-model="ReceivingIF.phone"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- 收货人姓名 -->
          <el-col :span="8">
            <el-form-item label="收货人姓名" prop="name">
              <el-input
                placeholder="请填写收货人姓名"
                v-model="ReceivingIF.name"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 保存与重置 -->
      <el-button type="primary" class="" @click="">保存</el-button>
      <el-button class="" @click="">重置</el-button>
    </el-card>

    <!-- 新增货物详情的对话框 -->
    <el-dialog
      title="新增"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
      :append-to-body="true"
    >
      <!-- 内容主体 -->
      <el-form :model="addForms" ref="addFormRef" label-width="100px">
        <el-form-item label="产品ID" prop="coffer1">
          <el-input v-model="addForms.coffer1"></el-input>
        </el-form-item>
        <el-form-item label="集装箱ID" prop="coffer2">
          <el-input v-model="addForms.coffer2"></el-input>
        </el-form-item>
        <el-form-item label="数量" prop="coffer3">
          <el-input v-model="addForms.coffer3"></el-input>
        </el-form-item>
        <el-form-item label="长*宽*高" prop="coffer4">
          <el-input v-model="addForms.coffer4"></el-input>
        </el-form-item>
        <el-form-item label="产品金额小计" prop="coffer5">
          <el-input v-model="addForms.coffer5"></el-input>
        </el-form-item>
        <el-form-item label="重量" prop="coffer6">
          <el-input v-model="addForms.coffer6"></el-input>
        </el-form-item>
        <el-form-item label="抛重" prop="coffer7">
          <el-input v-model="addForms.coffer7"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="adddata">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增温度记录仪授权的对话框 -->
    <el-dialog
      title="新增"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
      :append-to-body="true"
    >
      <!-- 内容主体 -->
      <el-form :model="addForms" ref="addFormRef" label-width="100px">
        <el-form-item label="记录仪编号" prop="coffer1">
          <el-input v-model="addForms.coffer1"></el-input>
        </el-form-item>
        <el-form-item label="添加日期" prop="coffer2">
          <el-input v-model="addForms.coffer2"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="adddata">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.RefreshBox {
  position: absolute;
  top: 37px;
  left: 1130px;
  width: 50px;
  height: 20px;
}
.RefreshImg {
  position: relative;
  top: -8px;
  left: -15px;
  width: 13px;
  height: 15px;
}
.RefreshTitle {
  position: relative;
  font-size: 10px;
  top: -12px;
  left: -14px;
  width: 15px;
  height: 15px;
}
</style>