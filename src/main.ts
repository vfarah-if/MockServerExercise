const { createServer } = require('@mocks-server/main')
const collections = require('../mocks/collections.json')
const userRoutes = require('../mocks/routes/users')
const commonRoutes = require('../mocks/routes/common')

const server = createServer()

const configureMocks = async () => {
  const { loadRoutes, loadCollections } = server.mock.createLoaders()
  const routes = [...commonRoutes, ...userRoutes]
  loadCollections(collections)
  loadRoutes(routes)
  server.mock.collections.select('all-users')
}
server.start().then(configureMocks)
