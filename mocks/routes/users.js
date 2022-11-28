// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

const { USERS, ALL_USERS } = require('../models/users')
const { findUser } = require('../middlewares/findUser')

module.exports = [
	{
		id: 'get-users', // route id
		url: '/api/users', // url in express format
		method: 'GET', // HTTP method
		variants: [
			{
				id: 'success', // variant id
				type: 'json', // variant handler id
				options: {
					status: 200, // status to send
					body: USERS, // body to send
				},
			},
			{
				id: 'all', // variant id
				type: 'json', // variant handler id
				options: {
					status: 200, // status to send
					body: ALL_USERS, // body to send
				},
			},
			{
				id: 'error', // variant id
				type: 'json', // variant handler id
				options: {
					status: 400, // status to send
					// body to send
					body: {
						message: 'Error',
					},
				},
			},
		],
	},
	{
		id: 'get-user', // route id
		url: '/api/users/:id', // url in express format
		method: 'GET', // HTTP method
		variants: [
			{
				id: 'success', // variant id
				type: 'json', // variant handler id
				options: {
					status: 200, // status to send
					body: USERS[0], // body to send
				},
			},
			{
				id: 'id-3', // variant id
				type: 'json', // variant handler id
				options: {
					status: 200, // status to send
					body: ALL_USERS[2], // body to send
				},
			},
			{
				id: 'real', // variant id
				type: 'middleware', // variant handler id
				options: {
					middleware: findUser(),
				},
			},
		],
	},
]
