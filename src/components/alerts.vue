<template>
	<div id="alerts">
		<div v-for="alert in alerts" class="alert" :key="alert.id" :id="'alert-' + alert.id">
			{{ alert.message }}<br>
			<a href="#" @click.self.prevent.stop="closeAlert(alert.id)" v-if="!alert.persistent">Close</a>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: "alerts",
		computed: {
			...mapGetters({
				alerts: 'common/alerts'
			})
		},
		methods: {
			...mapActions({
				removeAlert: 'common/removeAlert'
			}),
			closeAlert(id) {
				setTimeout(() => {
					this.$el.querySelector('#alert-' + id).style.opacity = 0
					setTimeout(() => {
						this.removeAlert({
							payload: {
								id: id
							}
						})
					}, 150)
				})
			}
		}
	}
</script>

<style scoped>
	.alert {
		background-color: slategray;
		padding: 15px;
		transition: opacity 0.15s ease;
	}
</style>