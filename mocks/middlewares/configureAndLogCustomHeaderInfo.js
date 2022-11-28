function configureAndLogCustomHeaderInfo() {
	return (_req, res, next, core) => {
		res.set('x-mocks-server-example', 'some-value')
		core.logger.info('Custom header added by route variant middleware')
		next()
	}
}
exports.configureAndLogCustomHeaderInfo = configureAndLogCustomHeaderInfo
