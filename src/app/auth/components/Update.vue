<template>
	<div>
		<h1>Update Profile</h1>
		<form @submit.prevent="attemptUpdateProfile">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" v-model="user.username" required autocomplete="username">
			<br>
			<label for="firstname">First Name</label>
			<input type="text" name="firstname" id="firstname" v-model="user.firstname" required
			       autocomplete="firstname">
			<br>
			<label for="lastname">Last Name</label>
			<input type="text" name="lastname" id="lastname" v-model="user.lastname" required
			       autocomplete="lastname">
			<br>
			<label for="email">Email</label>
			<input type="email" name="email" id="email" v-model="user.email" required
			       autocomplete="email">
			<br>
			<button v-if="!loading">Update</button>
			<span v-else>Loading...</span>
			<span style="color:red">{{ error }}</span>
		</form>
		<h1>Update Password</h1>
		{{user}}
		<form @submit.prevent="attemptUpdatePassword">

		</form>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "Update",
		data() {
			return {
				error: '',
				loading: false
			}
		},
		computed: {
			...mapGetters({
				user: 'auth/user'
			})
		},
		methods: {
			...mapActions({
				updateProfile: 'auth/updateProfile'
			}),
			attemptUpdateProfile() {
				this.updateProfile({
					payload: this.user,
					context: this
				})
			},
			attemptUpdatePassword() {

			}
		}
	}
</script>

<style scoped>

</style>