const fetch = require('node-fetch');
const API_KEY = '---API KEY HERE ---';

// Home
exports.getHome = (req, res) => {
    res.render('index',{name:"noticias PUG",desc:"Bienvenido a la pagina de perritos"});
}
// Internacional
exports.getInternacional = (req, res) => {
    res.render('internacional')
}
// Deportes
exports.getDeportes = (req, res) => {
    console.log(req.params.seccion); // Parametro de seccion
    console.log(req.params);
    //let secciones =["futbol","baloncesto","tenis"]
    // Con seccion + ID --> http://localhost:3000/deportes/futbol/2824 
    if(req.params.seccion && req.params.id){
        // Futbol, baloncesto u otros
        console.log(`seccion: ${req.params.seccion} noticia ${req.params.id}`);
        let msj =`Te renderizo la seccion: ${req.params.seccion}  y la noticia: ${req.params.id}`;
        res.render('deportes',{message:msj})
    }
    // Con seccion. Ruta--> http://localhost:3000/deportes/futbol
    else if(req.params.seccion){
        console.log(`seccion: ${req.params.seccion}`);
        let msj = `Te renderizo la seccion: ${req.params.seccion}`;
        res.render('deportes',{message:msj})
    // Sin parametros. Ruta --> http://localhost:3000/deportes
    }else{
        // Deportes
        let msj = 'Te renderizo la pagina de deportes';
        res.render('deportes',{message:msj})
    }
}
// Politica
// http://localhost:3000/politica
// http://localhost:3000/politica/12
// http://localhost:3000/politica/2

exports.getPolitica = (req, res) => {
    // Consulta a la API de noticias
    if(req.params.id){
        fetch(`http://newsapi.org/v2/everything?q=politics&from=2021-01-15&sortBy=publishedAt&apiKey=${API_KEY}`)
        .then(data => data.json())
        .then(news =>{
            let id = req.params.id; // Num de la noticia
            console.log(news.articles[id]);
            console.log(news.articles[id].title);
            console.log(news.articles[id].content);
            res.render('politica',{
                titulo:news.articles[req.params.id].title,
                contenido:news.articles[req.params.id].content,
                url:news.articles[req.params.id].urlToImage
            })
        })
        .catch(e => console.log(e))
    }else{ // si no pasas el :id
        res.render('politica',{
            titulo:'Pagina general de politica',
            contenido:'Estas son las ultimas noticias'
        })
    }
}