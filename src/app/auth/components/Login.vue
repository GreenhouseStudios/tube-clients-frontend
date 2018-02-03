<template>
	<div>
		<h1>Login</h1>
		<form action="" @submit.prevent="attemptAuth">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" v-model="username" required autocomplete="username">
			<br>
			<label for="password">Password</label>
			<input type="password" name="password" id="password" v-model="password" required
			       autocomplete="current-password">
			<br>
			<button v-if="!loading">Log In</button>
			<span v-else>Loading...</span>
			<span style="color:red">{{ error }}</span>
		</form>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: "Login",
		computed: {},
		data() {
			return {
				username: '',
				password: '',
				error: '',
				loading: false
			}
		},
		methods: {
			...mapActions({
				login: 'auth/login'
			}),
			attemptAuth() {
				this.login({
					payload: {
						username: this.username,
						password: this.password
					},
					context: this
				})
			}
		}
	}
</script>