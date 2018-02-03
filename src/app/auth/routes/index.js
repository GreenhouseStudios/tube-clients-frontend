import {Login, Register, Profile} from '../components/index'


export default [
	{
		path: '/login',
		component: Login,
		name: "login",
		meta: {
			guest: true,
			needsAuth: false
		}
	},
	{
		path: '/register',
		component: Register,
		name: "register",
		meta: {
			guest: true,
			needsAuth: false
		}
	},
	{
		path: '/profile',
		component: Profile,
		name: "profile",
		meta: {
			guest: false,
			needsAuth: true
		}
	}
]