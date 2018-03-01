//我们组装模块并导出 store 的地方;
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions'//.js可以省略不写；


const store = new Vuex.Store({
//	state: {}, //所有需要管理的组件的状态
//  mutations:{}, //改变状态的的集合----显示的提交mutation
//  actions:{}, // 异步操作
      //抽离出来；
      state,
	  mutations,
	  actions
});

export default store;
