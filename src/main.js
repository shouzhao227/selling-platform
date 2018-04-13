// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import Vuex from 'vuex'
import App from './App'
import Layout from './components/layout'
import IndexPage from './pages/index'

Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Vuex)

// let store=new Vuex.Store({
// 	state:{
// 		totalPrice:0
// 	},
// 	getters:{
// 		getTotal(state){
// 			return state.totalPrice;
// 		}
// 	},
// 	mutations:{
// 		increment(state,price){
// 			state.totalPrice+=price;
// 		},
// 		decrement(state,price){
// 			state.totalPrice-=price;
// 		}
// 	},
// 	actions:{
// 		increase(context,price){
// 			context.commit('increment',price)
// 		},
// 		decrease(context,price){
// 			context.commit('decrement',price)
// 		}
// 	}
// })

const router=new VueRouter({
	mode:"history",
	routes:[
		{path:"/",component:IndexPage}
	]
	
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
