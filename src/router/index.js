// router配置
// 主页路由
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Welcome from '../components/Welcome/Welcome.vue'
import Transport from '../components/transport/Transport.vue'
import Enclosure from '../components/enclosure/enclosure.vue'
import Firmware from '../components/firmware/firmware.vue'
import Jurisdiction from '../components/jurisdiction/jurisdiction.vue'
import Record from '../components/record/record.vue'
import Interface from '../components/SMS/interface.vue'
import Send from '../components/SMS/send.vue'
import User from '../components/user/user.vue'
// 创建路由
import CreateTransport from '../components/transport/CreateTransport.vue'
// 查看编辑路由
import CheckTransport from '../components/transport/CheckTransport.vue'
import ChangeTransport from '../components/transport/ChangeTransport.vue'
import CheckRecord from '../components/record/CheckRecord.vue'
import CreateRecord from '../components/record/CreateRecord.vue'
import ChangeRecord from '../components/record/ChangeRecord.vue'
import CheckEnclosure from '../components/enclosure/CheckEnclosure.vue'
import CreateEnclosure from '../components/enclosure/CreateEnclosure.vue'
import CreateUser from '../components/user/CreateUser.vue'


Vue.use(Router)

const router = new Router({
  // 非打包情况请注释掉
  // mode:'hash',
  // base:'/v1.0',

  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/Welcome',
      children: [{
          path: '/Welcome',
          component: Welcome
        }, {
          path: '/Transport',
          component: Transport
        }, {
          path: '/enclosure',
          component: Enclosure
        }, {
          path: '/firmware',
          component: Firmware
        }, {
          path: '/jurisdiction',
          component: Jurisdiction
        }, {
          path: '/record',
          component: Record
        }, {
          path: '/interface',
          component: Interface
        }, {
          path: '/send',
          component: Send
        }, {
          path: '/user',
          component: User
        }

        //新建表单
        , {
          path: '/CreateTransport',
          component: CreateTransport
        }
        // 查看编辑表单
        , {
          path: '/CheckTransport',
          component: CheckTransport
        }, {
          path: '/ChangeTransport',
          component: ChangeTransport
        }, {
          path: '/CheckRecord',
          component: CheckRecord
        }, {
          path: '/CreateRecord',
          component: CreateRecord
        }, {
          path: '/ChangeRecord',
          component: ChangeRecord
        }, {
          path: '/CheckEnclosure',
          component: CheckEnclosure
        }, {
          path: '/CreateEnclosure',
          component: CreateEnclosure
        }, {
          path: '/CreateUser',
          component: CreateUser
        }
      ]
    }
  ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问的数据
  //from代表从哪个路径跳转而来
  //next 是一个函数，表示放行
  // next（）放行  next（/login"） 强制跳转

  if (to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next()

})

export default router