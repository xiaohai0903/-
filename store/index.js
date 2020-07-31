import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state={
	historySearch:[],
	shopGoods:[],	
}

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})


export default store