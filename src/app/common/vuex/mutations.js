export const addAlert = (state, alert) => {
	if (alert.id === null) {
		let max = -1
		if (state.alerts.length > 0) {
			for (let alert of state.alerts) {
				max = alert.id > max ? alert.id : max
			}
		}
		alert.id = ++max
	}

	if (alert.persistent === undefined) {
		alert.persistent = false
	}

	if (alert.preloaded === undefined) {
		alert.prelaoded = false
	}

	state.alerts.push(alert)
}

export const removeAlert = (state, alertID) => {
	for (let i = 0; i < state.alerts.length; i++) {
		if (state.alerts[i].id === alertID) {
			state.alerts.splice(i, 1)
			break
		}
	}
}