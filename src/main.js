import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './components/global.css'
import echarts from "echarts";



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