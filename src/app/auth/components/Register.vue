<template>
	<div>
		<h1>Register</h1>
		<form action="" @submit.prevent="attemptRegister">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" v-model="username" required autocomplete="username">
			<br>
			<label for="password">Password</label>
			<input type="password" name="password" id="password" v-model="password" required
			       autocomplete="current-password">
			<br>
			<label for="firstname">First Name</label>
			<input type="text" name="firstname" id="firstname" v-model="firstname" required
			       autocomplete="current-firstname">
			<br>
			<label for="lastname">Last Name</label>
			<input type="text" name="lastname" id="lastname" v-model="lastname" required
			       autocomplete="current-lastname">
			<br>
			<label for="email">Email</label>
			<input type="email" name="email" id="email" v-model="email" required
			       autocomplete="current-email">
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
		name: "Register",
		data() {
			return {
				username: '',
				password: '',
				firstname: '',
				lastname: '',
				email: '',
				error: '',
				loading: false
			}
		},
		methods: {
			...mapActions({
				register: 'auth/register'
			}),
			attemptRegister() {
				this.register({
					payload: {
						username: this.username,
						password: this.password,
						firstname: this.firstname,
						lastname: this.lastname,
						email: this.email
					},
					context: this
				})
			}
		}
	}
</script>