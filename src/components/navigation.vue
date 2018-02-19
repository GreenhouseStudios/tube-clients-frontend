<template>
	<nav>
		<ul v-if="!authed">
			<li>
				<router-link :to="{name: 'login'}">Login</router-link>
			</li>
			<li>
				<router-link :to="{name: 'register'}">Register</router-link>
			</li>
		</ul>
		<ul v-else>
			<li>
				<router-link :to="{name: 'profile'}">Profile</router-link>
			</li>
			<li>
				<router-link :to="{name: 'requests'}">Requests</router-link>
			</li>

			<li>
				<logout-link></logout-link>
			</li>
		</ul>
	</nav>
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