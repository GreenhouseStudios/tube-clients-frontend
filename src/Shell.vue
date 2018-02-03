<template>
	<div id="app">
		<navigation></navigation>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from './components/navigation'
	export default {
		name: "shell",
		components: {
			Navigation
		}
	}
</script>

<style lang="scss">
	@import "~styles/app"
</style>