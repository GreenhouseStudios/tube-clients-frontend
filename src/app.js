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
		App.configureLocalForage()
		App.configureAxios()

		this.initVue()
	}

	static configureLocalForage() {
		localForage.config({
			driver: localForage.LOCALSTORAGE,
			storeName: 'app'
		})
	}

	static configureAxios() {
		// set json header type for all post, put, and delete requests
		axios.defaults.headers.post['Content-Type'] = 'application/json'
		axios.defaults.headers.put['Content-Type'] = 'application/json'
		axios.defaults.headers.delete['Content-Type'] = 'application/json'

		// no need to handle the jwt header, as this is handled by vuex below
	}

	initVue() {

		// instantiate vue
		new Vue({
			router,
			store,
			render: h => h(Shell)
		}).$mount('#app');

		// add the jwt to the store, if there is one. This will also set the axios authorization header
		localForage.getItem('authtoken').then((token) => {
			if (!isEmpty(token)) {
				store.dispatch('auth/setToken', token).then(() => {
					store.dispatch('auth/getUser')
				})
			}
		})
	}
}

domready(() => {
	new App()
})