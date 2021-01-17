const express = require('express')
const news = require('./modules/news')
const app = express() // create server
const port = 3000

// Middleware
app.use(express.static('public')); // Carpeta de archivos estáticos

app.set('view engine', 'pug'); // Motor para trabajar con pug
app.set('views','./views'); // Donde guardo mis ficheros pug

// Rutas
// Peticiones GET
app.get('/', news.getHome)
app.get('/internacional', news.getInternacional)
app.get('/deportes/:seccion?/:id?', news.getDeportes)
app.get('/politica/:id?', news.getPolitica)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
