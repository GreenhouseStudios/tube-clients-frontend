import localForage from 'localforage'
import {isEmpty} from 'lodash'
import axios from "axios/index";


export const setToken = (state, token) => {

	if (isEmpty(token)) {
		localForage.removeItem('authtoken')
		state.token = null
		return
	}
	state.token = token
	localForage.setItem('authtoken', token)
}

export const setUser = (state, user) => {
	state.user = user
}

export const setAuthenticated = (state, value) => {
	state.authenticated = value
}