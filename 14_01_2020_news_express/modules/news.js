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
exports.getPolitica = (req, res) => {
    res.render('politica')
}