import {Login, Register, Profile, Update, Home} from '../components/index'


export default [
	{
		path: '/',
		component: Home,
		name: "home",
		meta: {
			guest: true,
			needsAuth: false
		}
	},
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
	},
	{
		path: '/profile/update',
		component: Update,
		name: "update",
		meta: {
			guest: false,
			needsAuth: true
		}
	}
]