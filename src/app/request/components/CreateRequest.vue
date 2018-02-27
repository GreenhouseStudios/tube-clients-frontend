<template>
	<div>
		<h1>Create Request</h1>
		<form @submit.prevent="attemptRequestCreate">
			<label for="citation">Citation</label>
			<br>
			<textarea name="citation" id="citation" v-model="citation">
			</textarea>
			<br>
			<label for="vendor">Vendor</label>
			<input type="text" name="vendor" id="vendor" v-model="vendor">
			<br>
			<button v-if="!loading">Submit Request</button>
			<span v-else>Loading...</span>
			<span style="color:red">{{ error }}</span>
		</form>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default {
		name: "create-request",
		data() {
			return {
				loading: false,
				error: '',
				citation: '',
				vendor: '',
			}
		},
		computed: {
			...mapGetters({
				user: 'auth/user',
			})
		},
		methods: {
			...mapActions({
				createRequest: 'requests/createRequest',
			}),

			attemptRequestCreate() {
				this.createRequest({
					payload: {
						Citation: this.citation,
						Vendor: this.vendor,
						DueDate: (new Date()).toISOString(),
					},
					context: this
				})
			}
		}
	}
</script>

<style scoped>

</style>