<!-- 首页-记录仪物流状态组件 -->
<template>
  <div>
    <div id="RecorderData"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  data() {
    return {
      // 参数定义
      chartstext: null,
      echarts: "",
      piedata: null,
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.initchart("RecorderData");
      this.getData();
    });
  },

  methods: {
    initchart(id) {
      this.charts = echarts.init(document.getElementById(id));
    },
    // 实时更新数据
    async getData() {
      const { data: res } = await this.$http.get("RecorderDate");
      console.log(res);
      this.piedata = res.data;
      this.drawLine();
    },
    drawLine() {
      const sellerNames = this.piedata.map((item) => {
        return item.name;
      });
      this.charts.setOption({
        legend: {
          orient: "horizontal",
          left: 220,
          top: 290,
          data: sellerNames,
        },
        color: ["#36CBCB", "#3AA1FF"],

        series: [
          {
            type: "pie",
            data: this.piedata,
            label: {
              show: true,
              formatter: function (arg) {
                return arg.name + ":" + arg.percent + "%";
              },
            },
            radius: ["50%", "75%"],
          },
        ],
      });
    },
  },
};
</script>
<style  scoped>
#RecorderData {
  width: 600px;
  height: 600px;
}
</style>