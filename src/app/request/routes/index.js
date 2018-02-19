import {RequestFeed} from "../components";

export default [
	{
		path: '/requests',
		component: RequestFeed,
		name: "requests",
		meta: {
			guest: false,
			needsAuth: true,
		}
	}
]