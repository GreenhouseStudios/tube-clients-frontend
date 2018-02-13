<template>
	<div>
		<h1>Profile</h1>
		<div id="user-info" v-if="user !== null">
			<p>{{ user.firstname }} {{user.lastname}}</p>
			<p>{{user.email}}</p>
		</div>
		<p v-else>Loading...</p>
		<router-link to="profile/update">Update</router-link>
	</div>
</template>

<script>
	import axios from 'axios'
	import {mapGetters} from 'vuex'

	export default {
		name: "profile",
		computed: {
			...mapGetters({
				user: 'auth/user'
			})
		},
		methods: {}
	}
</script>

<style scoped>

</style>