import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/app/auth/vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth: auth
	}
})

export default store