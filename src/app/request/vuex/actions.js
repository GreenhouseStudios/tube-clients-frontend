import axios from 'axios'

export const createRequest = ({commit, dispatch}, {payload, context}) => {
	context.loading = true
	context.error = null
	axios.post(process.env.API_URL + '/requests', payload).then((response) => {
		dispatch('auth/getUser', null, {root: true}).then(() => {
			context.loading = false
			dispatch('common/addAlert', {
				payload: {
					message: "Request Created",
					preloaded: true,
				}
			}, {root: true})
			context.$router.push({name: 'requests'})
		})
	}).catch((error) => {
		context.loading = false
		context.error = JSON.parse(error.response.data.Error)
		console.log(JSON.parse(error.response.data.Error))
	})
}