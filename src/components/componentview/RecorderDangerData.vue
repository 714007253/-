<!-- 首页-折线图组件 -->
<template>
  <div class="com-container">
    <div id="RecorderData1"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      // 参数定义
      echarts: "",
      linedata: null,
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.initchart("RecorderData1");
      this.getData();
    });
  },

  methods: {
    initchart(id) {
      this.charts = echarts.init(document.getElementById(id));
    },
    // 实时更新数据
    async getData() {
      const { data: res } = await this.$http.get("RecorderDangerData");
      console.log(res);
      this.linedata = res.data.linedata1;
      this.drawLine();
    },

    drawLine() {
      // const sellerNames = this.piedata.map((item) => {
      //   return item.name;
      // });
      this.charts.setOption({
        color: ["#B9DDFF"],
        xAxis: [
          {
            type: "category",
            data: [
              "9:00",
              "11:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
              "00:00",
              "02:00",
              "04:00",
              "06:00",
            ],
            name: "时间",
            nameLocation: "end",
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: {
          type: "value",
          name: "次数",
          nameLocation: "end",
          data: ["0", "1", "2", "3", "4"],
        },

        series: [
          {
            type: "line",
            data: this.linedata,
            areaStyle: {},
            label: {
              show: true,
            },
            lineStyle: {
              // 系列级个性化折线样式
              width: 3,
              type: "solid",
              color: "#3AA1FF",
            },
          },
        ],
      });
    },
  },
};
</script>
<style  scoped>
#RecorderData1 {
  width: 565px;
  height: 320px;
}
</style>