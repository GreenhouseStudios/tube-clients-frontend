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
						next({name: 'profile'})
						return
					}

					// 2. Notification Guard
					let alerts = Store.getters['common/alerts']
					if (alerts.length > 0) {
						for (let alert of alerts) {
							if (!alert.persistent) {
								Store.dispatch('common/removeAlert', {payload: {id: alert.id}})
							}
						}
					}

					next()
				})
				//})
			}).catch(() => {
				if (to.meta.needsAuth) {
					next({name: 'login'})
					return
				}
				next()
			})
		})
	}
}

export default new Router