const express = require('express')
const app = express() // create server
const port = 3000

// Middleware
app.use(express.static('public')); // Carpeta de archivos estáticos

// Rutas
// Peticiones GET

function dameHome(req,res){
 //res.send('Hello World!')
 res.sendFile(__dirname +'/html/index.html');
}
app.get('/', dameHome)
app.get('/home', dameHome)

app.get('/internacional', (req, res) => {
    res.send('Noticias internacionales')
})
// ENDPOINTS
//http://localhost:3000/deportes/
//http://localhost:3000/deportes/futbol
//http://localhost:3000/deportes/futbol/2824  Ha ganado el madrid
//http://localhost:3000/deportes/futbol/3427  Ha ganado el Barçaa
a//http://localhost:3000/deportes/baloncesto
app.get('/deportes/:seccion?/:id?', (req, res) => {
    console.log(req.params.seccion); // Parametro de seccion
    console.log(req.params);
    //let secciones =["futbol","baloncesto","tenis"]
    // Con seccion + ID --> http://localhost:3000/deportes/futbol/2824 
    if(req.params.seccion && req.params.id){
        // Futbol, baloncesto u otros
        console.log(`seccion: ${req.params.seccion} noticia ${req.params.id}`);
        res.send(`Te renderizo la seccion: ${req.params.seccion}  y la noticia: ${req.params.id}`);
    }
    // Con seccion. Ruta--> http://localhost:3000/deportes/futbol
    else if(req.params.seccion){
        console.log(`seccion: ${req.params.seccion}`);
        res.send(`Te renderizo la seccion: ${req.params.seccion}`);
    // Sin parametros. Ruta --> http://localhost:3000/deportes
    }else{
        // Deportes
        res.send('Te renderizo la pagina de deportes');
    }
})
app.get('/politica', (req, res) => {
    res.send('Noticias politica')
})

app.get('/polit*ica', (req, res) => {
    res.send('Cualquier cosa')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
