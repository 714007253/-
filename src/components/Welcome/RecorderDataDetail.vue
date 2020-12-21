<!-- 报警记录仪具体显示卡片 -->
<template>
  <div>
    <div class="CardFlex">
      <el-card class="CardBox">
        <img src="../images/gantanhao.svg" class="Boximg" />
        <div class="CardData1_1">
          <span>设备编号:</span>
          <span>{{ RecoderCardList.data1_1 }}</span>
          <span>记录仪类型:</span>
          <span>{{ RecoderCardList.data1_2 }}</span>
        </div>
        <el-card class="CardMap">
          <div class="amap-page-container1">
            <el-amap id="amapDemo1" :center="center" :zoom="zoom">
              <el-amap-marker
                v-for="marker in markers"
                :position="marker.position"
              ></el-amap-marker>
            </el-amap>
          </div>
        </el-card>
        <div class="CardRow">
          <span class="CardTtile">当前定位:</span>
          <span class="CardData1_2">{{ RecoderCardList.data1_3 }}</span>
        </div>
        <div class="CardRow">
          <span class="CardTtile">天气:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_4 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 环境温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_5 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 冷联包温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_6 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 电池电量:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_7 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 信号强度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_8 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 记录仪状态:</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_9 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 异常报警次数:</span>
          <span class="Cardsmart">(最近一次监测)</span>
          <div class="CardData1_3">{{ RecoderCardList.data1_10 }}</div>
        </div>
      </el-card>
      <el-card class="CardBox">
        <img src="../images/gantanhao.svg" class="Boximg" />
        <div class="CardData1_1">
          <span>设备编号:</span>
          <span>{{ RecoderCardList.data2_1 }}</span>
          <span>记录仪类型:</span>
          <span>{{ RecoderCardList.data2_2 }}</span>
        </div>
        <el-card class="CardMap2">
          <div class="amap-page-container2">
            <el-amap id="amapDemo2" :center="center2" :zoom="zoom2">
              <el-amap-marker
                v-for="marker in markers2"
                :position="marker.position"
              ></el-amap-marker>
            </el-amap>
          </div>
        </el-card>
        <div class="CardRow">
          <span class="CardTtile">当前定位:</span>
          <span class="CardData1_2">{{ RecoderCardList.data2_3 }}</span>
        </div>
        <div class="CardRow">
          <span class="CardTtile">天气:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_4 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 环境温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_5 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 冷联包温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_6 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 电池电量:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_7 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 信号强度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_8 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 记录仪状态:</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_9 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 异常报警次数:</span>
          <span class="Cardsmart">(最近一次监测)</span>
          <div class="CardData1_3">{{ RecoderCardList.data2_10 }}</div>
        </div>
      </el-card>
      <el-card class="CardBox">
        <img src="../images/gantanhao.svg" class="Boximg" />
        <div class="CardData1_1">
          <span>设备编号:</span>
          <span>{{ RecoderCardList.data3_1 }} </span>

          <span>记录仪类型:</span>
          <span>{{ RecoderCardList.data3_2 }}</span>
        </div>
        <el-card class="CardMap3">
          <div class="amap-page-container3">
            <el-amap id="amapDemo3" :center="center3" :zoom="zoom3">
              <el-amap-marker
                v-for="marker in markers3"
                :position="marker.position"
              ></el-amap-marker>
            </el-amap>
          </div>
        </el-card>
        <div class="CardRow">
          <span class="CardTtile">当前定位:</span>
          <span class="CardData1_2">{{ RecoderCardList.data3_3 }}</span>
        </div>
        <div class="CardRow">
          <span class="CardTtile">天气:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_4 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 环境温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_5 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 冷联包温度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_6 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 电池电量:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_7 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 信号强度:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_8 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 记录仪状态:</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_9 }}</div>
        </div>
        <div class="CardRow">
          <span class="CardTtile"> 异常报警次数:</span>
          <span class="Cardsmart">(最近一次监测)</span>
          <div class="CardData1_3">{{ RecoderCardList.data3_10 }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import location from "../images/25感叹号-三角框.png";
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  data() {
    return {
      RecoderCardList: {
        data1_1: "",
        data1_2: "",
        data1_3: "",
        data1_4: "",
        data1_5: "",
        data1_6: "",
        data1_7: "",
        data1_8: "",
        data1_9: "",
        data1_10: "",
        data2_1: "",
        data2_2: "",
        data2_3: "",
        data2_4: "",
        data2_5: "",
        data2_6: "",
        data2_7: "",
        data2_8: "",
        data2_9: "",
        data2_10: "",
        data3_1: "",
        data3_2: "",
        data3_3: "",
        data3_4: "",
        data3_5: "",
        data3_6: "",
        data3_7: "",
        data3_8: "",
        data3_9: "",
        data3_10: "",
      },
      map: null,
      zoom: 15,
      center: null,
      zoom2: 15,
      center2: null,
      zoom3: 15,
      center3: null,
      markers: [],
      markerMain: null,
      markers2: [],
      markerMain2: null,
      markers3: [],
      markerMain3: null,
      lngMain: 0,
      latMain: 0,
      lngMain2: 0,
      latMain2: 0,
      lngMain3: 0,
      latMain3: 0,
    };
  },
  created() {
    this.getWelcomeList2();
    this.point();
    this.point2();
    this.point3();
    this.getRecoderCardList();
  },

  methods: {
    // 获取报警仪数据图文数据
    async getRecoderCardList() {
      const { data: res } = await this.$http.get("RecoderCardList");
      if (res.meta.status !== 200)
        return this.$message.error("获取报警仪数据失败");
      this.RecoderCardList = res.data.RecoderCardList;
    },
    async getWelcomeList2() {
      const { data: res } = await this.$http.get("RecoderCardList");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.lngMain = res.data.position.lngMain;
      this.latMain = res.data.position.latMain;
      this.lngMain2 = res.data.position.lngMain2;
      this.latMain2 = res.data.position.latMain2;
      this.lngMain3 = res.data.position.lngMain3;
      this.latMain3 = res.data.position.latMain3;
    },
    point() {
      lazyAMapApiLoaderInstance.load().then(() => {
        this.map = new AMap.Map("amapDemo1", {
          center: [this.lngMain, this.latMain],
          zoom: this.zoom,
        });

        let icon = new AMap.Icon({
          image: location,
          size: new AMap.Size(30, 30),
          imageSize: new AMap.Size(30, 30),
        });

        this.markerMain = new AMap.Marker({
          icon: icon,
          position: [this.lngMain, this.latMain],
        });
        this.map.add(this.markerMain);
      });
    },
    point2() {
      lazyAMapApiLoaderInstance.load().then(() => {
        this.map = new AMap.Map("amapDemo2", {
          center: [this.lngMain2, this.latMain2],
          zoom: this.zoom,
        });

        let icon = new AMap.Icon({
          image: location,
          size: new AMap.Size(30, 30),
          imageSize: new AMap.Size(30, 30),
        });

        this.markerMain2 = new AMap.Marker({
          icon: icon,
          position: [this.lngMain2, this.latMain2],
        });
        this.map.add(this.markerMain2);
      });
    },
    point3() {
      lazyAMapApiLoaderInstance.load().then(() => {
        this.map3 = new AMap.Map("amapDemo3", {
          center: [this.lngMain3, this.latMain3],
          zoom: this.zoom,
        });

        let icon = new AMap.Icon({
          image: location,
          size: new AMap.Size(30, 30),
          imageSize: new AMap.Size(30, 30),
        });

        this.markerMain3 = new AMap.Marker({
          icon: icon,
          position: [this.lngMain3, this.latMain3],
        });
        this.map3.add(this.markerMain3);
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../css/Welcome/RecorderDataDetail.css";
</style>
