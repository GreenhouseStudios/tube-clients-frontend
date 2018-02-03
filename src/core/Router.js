import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from './Store'
import {mapGetters} from 'vuex'
import {routes as routes} from '@/app/index'

Vue.use(VueRouter)

class Router extends VueRouter {
	constructor() {
		super({mode: 'history', routes: routes})

		this.beforeEach(((to, from, next) => {
			Store.dispatch('auth/checkTokenExists').then(() => {
				Store.dispatch('auth/refreshToken').then(() => {
					if (to.meta.guest) {
						next({name: 'profile'})
						return
					}

					next()
				})
			}).catch(() => {

				if (to.meta.needsAuth) {
					next({name: 'login'})
					return
				}

				next()
			})
		}))

		// this.afterEach( ({ to }) => {
		//   Emitter.emit( ROUTER_ROUTE_CHANGE, to.name );
		// });

	}
}

export default new Router