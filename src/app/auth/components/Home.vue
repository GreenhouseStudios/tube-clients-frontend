<template>
	<div>
		<h1>Tube</h1>
		<router-link :to="{name: 'login'}">Sign In</router-link>
		<router-link :to="{name: 'register'}">Sign Up</router-link>
	</div>
</template>

<script>
	export default {
		name: "home"
	}
</script>

<style scoped>

</style>