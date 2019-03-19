// 引入vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入组件
import Home from "../pages/home/Home.vue"

//路由规则
let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    
]

//实例化路由
const router = new VueRouter({
    //更改路由的默认hash为history
    // mode: 'history',
    routes
})

export default router;