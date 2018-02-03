<template>
	<ul>
		<li v-if="!authed">
			<router-link to="login">Login</router-link>
		</li>
		<li v-if="!authed">
			<router-link to="register">Register</router-link>
		</li>
		<li v-if="authed">
			<router-link to="profile">Profile</router-link>
		</li>
		<li v-if="authed">
			<logout-link></logout-link>
		</li>
	</ul>
</template>

<script>
	import {mapGetters} from 'vuex'
	import logoutLink from './logout-link'

	export default {
		name: "navigation",
		components: {
			logoutLink
		},
		computed: {
			...mapGetters({
				authed: 'auth/authed'
			})
		}
	}
</script>

<style scoped>

</style>