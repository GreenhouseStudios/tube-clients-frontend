export const alerts = (state) => {
	return state.alerts
}

export const alert = (state) => (id) => {
	return state.alerts.find(val => val.id === id)
}