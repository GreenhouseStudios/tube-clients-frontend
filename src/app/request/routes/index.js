import {Request, RequestFeed, CreateRequest} from "../components";

export default [
	{
		path: '/requests',
		component: RequestFeed,
		name: "requests",
		meta: {
			guest: false,
			needsAuth: true,
		}
	},
	{
		path: '/request/create',
		component: CreateRequest,
		name: "createRequest",
		meta: {
			guest: false,
			needsAuth: true,
		}
	},
	{
		path: '/request/:id',
		component: Request,
		name: "request",
		meta: {
			guest: false,
			needsAuth: true
		}
	}
]