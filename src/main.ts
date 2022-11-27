import express from 'express'
const app = express()

app.get('/', function (_req, res): void {
	res.send('Hello World')
})
   
app.listen(8000)