import localForage from 'localforage'
import {isEmpty} from 'lodash'
import axios from "axios/index";


export const setToken = (state, token) => {

	if (isEmpty(token)) {
		localForage.removeItem('authtoken')
		axios.defaults.headers.common['Authorization'] = null;
		state.token = null
		return
	}
	
	localForage.setItem('authtoken', token)
	axios.defaults.headers.common['Authorization'] = "Bearer " + token;
	state.token = token
}

export const setUser = (state, user) => {
	state.user = user
}

export const setAuthenticated = (state, value) => {
	state.authenticated = value
}