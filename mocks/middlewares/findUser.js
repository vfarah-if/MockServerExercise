const { USERS } = require('../models/users')

function findUser() {
	return (req, res) => {
		const userId = req.params.id
		const user = USERS.find((userData) => userData.id === Number(userId))
		if (user) {
			res.status(200)
			res.send(user)
		} else {
			res.status(404)
			res.send({
				message: 'User not found',
			})
		}
	}
}
exports.findUser = findUser
