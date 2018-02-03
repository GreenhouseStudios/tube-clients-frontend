import axios from 'axios'
import {isEmpty} from 'lodash'

export const setHttpToken = (token) => {
	if (isEmpty(token)) {
		axios.defaults.headers.common['Authorization'] = null;
		return
	}

	axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}