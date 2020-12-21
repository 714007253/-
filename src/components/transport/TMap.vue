<!--  -->
<template>
<div></div>
  <!-- <div class="amap-page-container"> -->
    <!-- <el-amap class="amap-box4" :zoom="zoom" :center="center">
      <el-amap-marker
        v-for="marker in markers"
        :position="marker.position"
        :key="marker.id"
        :events="marker.events"
        :icon="marker.icon"
      ></el-amap-marker>
      <el-amap-info-window
        v-if="window"
        :position="window.position"
        :visible="window.visible"
        :content="window.content"
        :offset="window.offset"
      ></el-amap-info-window>
    </el-amap> -->
  
</template>

<script>
module.exports = {
  data: function () {
    return {
      center: [120.362479, 30.320122],
      zoom: 17,
      markers: [],
      windows: [],
      window: "",
    };
  },

  methods: {
    // // 运输管理函数获取数据
    // async getTransportMap() {
    //   const { data: res } = await this.$http.get("TransportMap");
    //   if (res.meta.status !== 200)
    //     return this.$message.error("获取地图数据失败");
    //   this.pointMarker = res.data.pointMarker;
    //   console.log(res);
    // },
    point() {
      let markers = [];
      let windows = [];

      let that = this;
      let pointMarker = [
        {
          lng: 120.360325, //求是中楼
          lat: 30.321867,
          TransportOrder: "KD2020090912345", //运输单号
          StartTime: "2020-12-08", //出发时间
          StartAddress: "中国计量大学求是北楼", //发货地
          NowAddress: "中国计量大学赛博南楼", //当前位置
          NowTime: "2020-12-09", //当前时间
          DEndTime: "2020-12-10", //约定送达时间
          REndTime: "2020-12-10", //实际送达时间
          EndAddress: "浙江传媒学院", //收货地
        },
        {
          lng: 120.362707, //求是中楼
          lat: 30.32183,
          TransportOrder: "KD2020090912345", //运输单号
          StartTime: "2020-12-08", //出发时间
          StartAddress: "中国计量大学求是北楼", //发货地
          NowAddress: "中国计量大学求是中楼", //当前位置
          NowTime: "2020-12-09", //当前时间
          DEndTime: "2020-12-10", //约定送达时间
          REndTime: "2020-12-10", //实际送达时间
          EndAddress: "浙江传媒学院", //收货地
        },
        {
          lng: 120.355068, //求是中楼
          lat: 30.319274,
          TransportOrder: "KD2020090912346", //运输单号
          StartTime: "2020-12-08", //出发时间
          StartAddress: "中国计量大学求是北楼", //发货地
          NowAddress: "临江学院", //当前位置
          NowTime: "2020-12-09", //当前时间
          DEndTime: "2020-12-10", //约定送达时间
          REndTime: "2020-12-10", //实际送达时间
          EndAddress: "浙江传媒学院", //收货地
        },
      ];

      pointMarker.forEach((item, index) => {
        markers.push({
          position: [item.lng, item.lat],
          events: {
            click() {
              that.windows.forEach((window) => {
                window.visible = false; //关闭窗体
              });
              that.window = that.windows[index];
              that.$nextTick(() => {
                that.window.visible = true; //点击点坐标，出现信息窗体
              });
            },
          },
        });
        windows.push({
          position: [item.lng, item.lat],
          content:
            "" +
            "<div>" +
            "运输单号:" +
            item.TransportOrder +
            "</div>" +
            "<div>" +
            "出发时间:" +
            item.StartTime +
            "</div>" +
            "<div>" +
            "发货地:" +
            item.StartAddress +
            "</div>" +
            "<div>" +
            "当前位置:" +
            item.NowAddress +
            "</span>" +
            "</div>" +
            "<div>" +
            "当前时间:" +
            item.NowTime +
            "</span>" +
            "</div>" +
            "<div>" +
            "约定送达时间:" +
            item.DEndTime +
            "</span>" +
            "</div>" +
            "<div>" +
            "实际送达时间:" +
            "<span style='color: #66A0FF'>" +
            item.REndTime +
            "</span>" +
            "</div>" +
            "<div>" +
            "收货地:" +
            item.EndAddress +
            "</span>" +
            "</div>",

          offset: [0, -20], //窗体偏移
          visible: false, //初始是否显示
        });
      });
      //添加点标注
      this.markers = markers;
      //生成弹窗
      this.windows = windows;
    },
  },

  mounted() {
    this.point();
  },
};
</script>
<style lang='less' scoped>
.amap-box4 {

  height: 600px;
}

.prompt {
  background: white;
  width: 100px;
  height: 30px;
  text-align: center;
}
</style>