const USERS = [
	{
		id: 1,
		name: 'John Doe',
	},
	{
		id: 2,
		name: 'Jane Doe',
	},
]

const ALL_USERS = [
	...USERS,
	{
		id: 3,
		name: 'Tommy',
	},
	{
		id: 4,
		name: 'Timmy',
	},
]

module.exports = { USERS, ALL_USERS }
