import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import './assets/font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './components/global.css'


Vue.use(Element)

//配置请求根路径
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
    //为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')