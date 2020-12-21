<!-- 首页-折线图组件 -->
<template>
  <div class="com-container">
     <div class="DataBox2_1">
        <span class="Data2Title2">记录仪报警统计</span>
        <!-- 选择显示的数据对应的仪器 -->
        
            <el-select class="select" @change="getData" v-model="options">
              <el-option
                v-for="item in option"
                :key="item.id"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
        

        <div id="RecorderDangerData">
    <div id="RecorderData1"></div>
        </div>
     </div>
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
      // 统计仪下拉菜单接口
      options: {
        value: "",
      },
      value: null,
      option: [],
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.initchart("RecorderData1");
      this.getData();
    });
  },
  created() {
    this.getWelcomeList();
  },
  methods: {
    // 首页四个数组获取数据
    async getWelcomeList() {
      const { data: res } = await this.$http.get("Welcome");
      if (res.meta.status !== 200)
        return this.$message.error("获取首页数据失败");
      this.option = res.option;
    },
    initchart(id) {
      this.charts = echarts.init(document.getElementById(id));
    },
    // 实时更新数据
    async getData(value) {
      

      this.linedata =value
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
.Data2Title2 {
    position: relative;
    left: 23px;
    top:17px;
    font-size: 14px;
    font-weight: 700;
}
</style>