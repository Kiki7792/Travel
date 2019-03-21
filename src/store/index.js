import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

//创建new Store实例对象
const store = new Vuex.Store({
    // state存放全局公用的数据
    // state: state,
    // mutations: mutations,
    //es6中键值一样, 省略值
    state,
    mutations
    // actions: {
    //     changeCity(ctx, city) {
    //         // console.log(city);
    //         //actions必须通过commit提交给Mutations, 执行Mutations对应的函数, 改变state的值 将数据渲染到页面上
    //         ctx.commit('changeCity', city)
    //     }
    // }
})

export default store