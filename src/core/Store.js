import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/app/auth/vuex'
import common from '@/app/common/vuex'
import request from '@/app/request/vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth: auth,
		common: common,
		requests: request
	}
})

export default store