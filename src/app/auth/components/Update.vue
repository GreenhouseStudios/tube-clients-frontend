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
			<button v-if="!profile.loading">Update</button>
			<span v-else>Loading...</span>
			<span style="color:red">{{ profile.error }}</span>
		</form>
		<h1>Update Password</h1>
		<form @submit.prevent="attemptUpdatePassword">
			<label for="oldpassword">Old Password</label>
			<input type="password" name="oldpassword" id="oldpassword" required v-model="password.oldpassword">
			<br>
			<label for="newpassword">New Password</label>
			<input type="password" name="newpassword" id="newpassword" required v-model="password.newpassword">
			<br>
			<label for="newpasswordconfirm">Confirm New Password</label>
			<input type="password" name="newpasswordconfirm" id="newpasswordconfirm"
			       required v-model="password.newpasswordconfirm">
			<br>
			<button v-if="!password.loading">Update</button>
			<span v-else>Loading...</span>
			<span style="color:red">{{ password.error }}</span>
		</form>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "Update",
		data() {
			return {
				profile: {
					error: '',
					loading: false
				},
				password: {
					oldpassword: '',
					newpassword: '',
					newpasswordconfirm: '',
					error: '',
					loading: false,
				}
			}
		},
		computed: {
			...mapGetters({
				user: 'auth/user'
			})
		},
		methods: {
			...mapActions({
				updateProfile: 'auth/updateProfile',
				updatePassword: 'auth/updatePassword',
			}),
			attemptUpdateProfile() {
				this.updateProfile({
					payload: this.user,
					context: this
				})
			},
			attemptUpdatePassword() {
				if (this.password.newpasswordconfirm !== this.password.newpassword) {
					this.password.error = 'New Password Must Match'
					return;
				}
				this.updatePassword({
					payload: {
						ID: this.user.ID,
						passwordData: {
							OldPassword: this.password.oldpassword,
							NewPassword: this.password.newpassword
						}
					},
					context: this
				})
			}
		}
	}
</script>

<style scoped>

</style>