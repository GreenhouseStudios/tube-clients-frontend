<template>
	<a href="#" @click.prevent="logout">Log Out</a>
</template>

<script>
	export default {
		name: "logout-button",
		methods: {
			logout() {
				this.$store.dispatch('auth/logout').then(() => {
					this.$router.push({name: 'login'})
				})
			}
		}
	}
</script>

<style scoped>

</style>