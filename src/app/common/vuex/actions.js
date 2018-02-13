export const addAlert = ({commit}, {payload}) => {
	commit('addAlert', payload)
}
export const removeAlert = ({commit}, {payload}) => {
	commit('removeAlert', payload.id)
}