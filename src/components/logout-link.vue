<template>
	<a href="#" @click.prevent="logout">Log Out</a>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		name: "logout-button",
		methods: {
			...mapActions({
				addAlert: 'common/addAlert',
			}),
			logout() {
				this.$store.dispatch('auth/logout').then(() => {
					this.addAlert({
						payload: {
							message: "Logout Successful"
						}
					}).then(() => {
						this.$router.push({name: 'login'})
					})
				})
			}
		}
	}
</script>

<style scoped>

</style>