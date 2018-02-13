<template>
	<div id="app">
		<navigation></navigation>
		<alerts></alerts>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navigation from './components/navigation'
	import Alerts from './components/alerts'

	export default {
		name: "shell",
		components: {
			Navigation,
			Alerts
		}
	}
</script>

<style lang="scss">
	@import "~styles/app"
</style>