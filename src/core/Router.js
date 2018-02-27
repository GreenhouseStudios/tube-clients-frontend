import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './Store'
import {mapGetters} from 'vuex'
import {routes as routes} from '@/app/index'

Vue.use(VueRouter)

class Router extends VueRouter {
	constructor() {
		super({routes: routes})

		this.beforeEach((to, from, next) => {
			// 1. Navigation Guard
			// check localForage for token
			Store.dispatch('auth/checkTokenExists').then(() => {
				// refresh the token
				//Store.dispatch('auth/refreshToken').then(() => {
				// get the user if need be
				Store.dispatch('auth/getUserIfNull').then(() => {
					if (to.meta.guest) {
						Store.dispatch('common/addAlert', {payload: {message: "You Are Already Logged In"}}).then((res) => {
							next({name: 'profile'})
							return
						})
					}

					// 2. Notification Guard
					let alerts = Store.getters['common/alerts']
					if (alerts.length > 0) {
						for (let alert of alerts) {
							if (!alert.persistent) {
								if(alert.preloaded) {
									alert.preloaded = false
								} else {
									Store.dispatch('common/removeAlert', {payload: {id: alert.id}})
								}
							}
						}
					}

					next()
				})
				//})
			}).catch(() => {
				// If a valid token does not exist, we need to log out.
				Store.dispatch('auth/logout').then(() => {
					if (to.meta.needsAuth) {
						Store.dispatch('common/addAlert', {payload: {message: "You Must Log In First"}}).then((res) => {
							next({name: 'login'})
							return
						})
					}
					next()
				})
			})
		})
	}
}

export default new Router