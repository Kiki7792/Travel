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
fastclick.attach(document.body)


Vue.config.productionTip = false

//导入抽取的路由
import router from "./router/index.js"

new Vue({
  render: h => h(App),
  //使用路由
  router,

}).$mount('#app')
