import Vue from 'vue'
import router from '@/core/Router'
import store from '@/core/Store'
import Shell from '@/Shell'
import axios from 'axios'
import localForage from 'localforage'
import {isEmpty} from 'lodash'
import domready from 'domready'

class App {
	constructor() {
		this.configureAxios()
		this.configureLocalForage()

	}

	configureAxios() {
		// set json header type for all post, put, and delete requests
		axios.defaults.headers.post['Content-Type'] = 'application/json'
		axios.defaults.headers.put['Content-Type'] = 'application/json'
		axios.defaults.headers.delete['Content-Type'] = 'application/json'
	}

	configureLocalForage() {
		localForage.config({
			driver: localForage.LOCALSTORAGE,
			storeName: 'app'
		})

		localForage.getItem('authtoken').then((token) => {
			if (!isEmpty(token)) {
				// set the authtoken to the axios authorization header and the vuex store
				store.dispatch('auth/setToken', token).then(() => {
					// load the user into the vuex store
					store.dispatch('auth/getUser')
				})
			} else {
				// otherwise, log us out
				store.dispatch('auth/logout')
			}

			this.configureVue()
		})
	}

	configureVue() {
		// instantiate vue
		this.vue = new Vue({
			router,
			store,
			render: h => h(Shell)
		}).$mount('#app');

		// initialize the filters
		require('@/core/Filters')
	}
}

domready(() => {
	new App()
})