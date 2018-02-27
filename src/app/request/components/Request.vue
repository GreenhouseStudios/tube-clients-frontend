<template>
	<div>
		<h1>Request</h1>
		<p>Citation: {{ request.citation }}</p>
		<router-link :to="{name: 'requests'}">Back</router-link>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: "request",
		computed: {
			...mapGetters({
				user: 'auth/user',
			}),
			request() {
				return this.user.requests.find((req) => {
					return req.ID = this.$route.params.id
				})
			}
		}
	}
</script>

<style scoped>

</style>