<template>
	<div>
		<h1>Requests</h1>
		<div v-for="request in user.requests" :key="request.ID"
		     style="border:1px solid black; padding:10px; margin-bottom:10px;">
			<h4>Citation: {{request.citation}}</h4>
			<p>Request Date {{request.CreatedAt | formatDate}}</p>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: "request-feed",
		computed: {
			...mapGetters({
				user: 'auth/user'
			})
		}
	}
</script>

<style scoped>

</style>