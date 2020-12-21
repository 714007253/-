import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './components/global.css'
import echarts from "echarts";

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    key: '2eb5edc76474fd10616c908e24ffa766', //高德的key（自己申请）
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch',
        'AMap.Scale', 'AMap.OverView',
        'AMap.ToolBar', 'AMap.MapType',
        'AMap.PolyEditor', 'AMap.CircleEditor',
        'AMap.Geolocation'
    ], //引用的插件（根据需要引入）
    uiVersion: '1.0', //UI库 版本
    v: '1.4.4', //高德SDK 版本
})

Vue.use(Element)

//配置请求根路径
Vue.prototype.$echarts = echarts;
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 导入假数据接口
axios.defaults.baseURL = 'https://result.eolinker.com/AfMQniX89802140bb73e4e303e18a7abdaeda367dc9b244?uri='
axios.interceptors.request.use(config => {
    //为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')