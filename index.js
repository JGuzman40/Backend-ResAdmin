require('dotenv').config()
const server = require('./src/server.js')
const { conn } = require('./src/db.js')

const port = process.env.PORT || 3001

conn
	.sync({ alter: true })
	.then(() => {
		server.listen(port, () => {
			console.log(`Server listening on port ${port}`)
		})
	})
	.catch((error) => console.error(error))
