const express = require('express')
const news = require('./modules/news')
const cors = require('cors')
const app = express() // create server
const port = 3000

app.use(cors())
// Middleware
app.use(express.json()); // para poder leer datos del BODY del post

// Rutas
// Peticiones GET
app.get('/', news.getAuthor)
app.post('/:theme?', news.postTheme)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
