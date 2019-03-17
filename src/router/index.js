// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import Home from "../pages/Home.vue"

//路由规则
let routes = [
    {
        path: '/',
        component: Home
    },
    
]

//实例化路由
const router = new VueRouter({
    routes
})

export default router;