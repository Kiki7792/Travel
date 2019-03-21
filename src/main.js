import Vue from 'vue'
import App from './App.vue'
//引入公共样式
import './assets/styles/reset.css'
//解决1px边框的css文件
import './assets/styles/border.css'
//引入iconfont的css样式
import './assets/styles/iconfont.css'
//引入fastclick库, 解决click有300ms延时的问题  -- cnpm install fastclick --save 
import fastclick from 'fastclick'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入vuex的store
import store from './store/index'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

//导入抽取的路由
import router from "./router/index.js"

new Vue({
  render: h => h(App),
  //使用路由
  router,
  //根实例 使用store
  store
}).$mount('#app')
