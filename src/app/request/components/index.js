import Vue from 'vue'
import RequestFeedComponent from './RequestFeed'
import RequestComponent from './Request'
import CreateRequestComponent from './CreateRequest'

export const RequestFeed = Vue.component('request-feed', RequestFeedComponent)
export const Request = Vue.component('request', RequestComponent)
export const CreateRequest = Vue.component('create-request', CreateRequestComponent)