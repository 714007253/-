<!-- 运输管理-->
<template>
  <div>
    <!-- 导航 -->
    <el-card>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Welcome' }"
          ><strong>首页</strong>
        </el-breadcrumb-item>
        <el-breadcrumb-item><strong>运输管理</strong> </el-breadcrumb-item>
        <el-button class="RefreshBox" @click="getTransportList"
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
            <el-form-item label="运输单号" class="input">
              <el-input
                v-model="queryInfo.query"
                placeholder="请输入您要搜索的运输单号"
              ></el-input>
            </el-form-item>
            <el-form-item label="状态" class="select">
              <el-select v-model="queryInfo.query2">
                <el-option label="全部" value="1"></el-option>
                <el-option label="未开始" value="2"></el-option>
                <el-option label="运送中" value="3"></el-option>
                <el-option label="已送达" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="search">
              <el-button type="primary" @click="getTransportList"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
          <!-- 添加用户按钮 -->
          <el-button class="add" type="primary" @click="toCreateTransport"
            >新增订单</el-button
          >
          <span class="RadioTitle">查看形式:</span>
          <el-radio-group class="radio" v-model="radio1">
            <el-radio-button @click="ChangeList" label="列表"></el-radio-button>
            <el-radio-button @click="ChangeMap" label="地图"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </el-card>

    <!-- 具体表单 -->
    <el-card class="box-card2">
      <!-- 标题栏 -->
      <div slot="header" class="clearfix">
        <span><strong>数据列表</strong> </span>
        <!-- 表格 -->
        <el-card class="box-card2">
          <!-- 表单区域 -->
          <el-table :data="transportslist" stripe style="width: 100%" border>
            <!-- 数据表单 -->
            <el-table-column type="selection" width="55"> </el-table-column>

            <el-table-column prop="TransportOrder" label="运输单号" width="160">
            </el-table-column>

            <el-table-column
              prop="ShippingAddress"
              label="发货地址"
              width="100"
            >
            </el-table-column>

            <el-table-column prop="CollectionTime" label="揽收时间" width="110">
            </el-table-column>

            <el-table-column prop="Destination" label="送达目的地" width="100">
            </el-table-column>

            <el-table-column
              prop="AgreedDeliveryTime"
              label="约定送达时间"
              width="110"
            >
            </el-table-column>

            <el-table-column prop="State" label="状态" width="110">
            </el-table-column>

            <el-table-column
              prop="ActualDeliveryTime"
              label="实际送达时间"
              width="110"
            >
            </el-table-column>

            <el-table-column
              prop="SavedTime"
              label="已保存时间/保存有效期(小时)"
              width="220"
            >
            </el-table-column>

            <!-- 操作区 -->
            <el-table-column fixed="right" width="210" label="操作区">
              <template slot-scope="scope">
                <!-- 查看按钮 -->
                <el-button
                  size="mini"
                  @click="showEditDialog(scope.row.id)"
                  type="primary"
                >
                  查看
                </el-button>
                <!-- 编辑按钮 -->
                <el-button size="mini" @click="changeEditDialog(scope.row.id)">
                  编辑
                </el-button>
                <!-- 删除按钮 -->
                <el-button
                  size="mini"
                  type="danger"
                  @click="removeUserById(scope.row.id)"
                  >删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页区域 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryInfo.pagenum"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="queryInfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      total: 0,
      // 显示形式单选定义
      radio1: "列表",
      // 运输管理表单
      transportslist: [
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
        {
          TransportOrder: "DD20200909001",
          ShippingAddress: "杭州",
          CollectionTime: "2020-09-09 12:00:00",
          Destination: "研究所",
          AgreedDeliveryTime: "2020-09-09 12:00:00",
          State: "已送达",
          ActualDeliveryTime: "2020-09-09 11:00:00",
          SavedTime: "2/120",
        },
      ],
    };
  },

  methods: {
    // 运输管理函数获取数据
    async getTransportList() {
      const { data: res } = await this.$http.post("Transport", {
        params: this.queryInfo,
      });
      if (res.meta.status !== 200)
        return this.$message.error("获取运输表单数据失败");
      this.transportslist = res.data.transports;
      console.log(res);
    },
    // 新增订单
    toCreateTransport() {
      this.$router.push("/CreateTransport");
    },
    // 查看订单
    showEditDialog() {},
    // 编辑订单
    changeEditDialog() {},
    // 删除订单
    async removeUserById(id) {
      // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        "此操作将永久删除该订单, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);

      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消了删除，则返回值为字符串 cancel
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }

      const { data: res } = await this.$http.post("Transport/" + id);

      if (res.meta.status !== 200) {
        return this.$message.error("删除订单失败！");
      }

      this.$message.success("删除订单成功！");
      this.getTransportList();
    },

    // 翻页函数
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getTransportList();
    },
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getTransportList();
    },
    // 改变查看形式
    ChangeList() {},
    ChangeMap() {},
  },
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
.box-card1 {
  position: relative;
  top: 20px;
  height: 105px;
}
.box-card2 {
  position: relative;
  top: 45px;
  height: 1450px;
}
.clearfix {
  color: #999999;
  height: 10px;
}
.input {
  position: relative;
  top: -10px;
}
.select {
  position: relative;
  top: -10px;
  left: 30px;
}
.search {
  position: relative;
  top: -10px;
  left: 70px;
}
.add {
  position: relative;
  top: -73px;
  left: 710px;
  width: 110px;
  height: 40px;
}
.radio {
  position: relative;
  top: -73px;
  left: 834px;
}
.RadioTitle {
  position: relative;
  top: -71px;
  left: 819px;
  font-size: 16px;
}
</style>