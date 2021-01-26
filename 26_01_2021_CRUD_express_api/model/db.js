const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


// Conexión
async function conn(){
    const client = await MongoClient(url,{ useUnifiedTopology: true });
    
    client
    .connect()
    .then(()=>console.log("Ha funcionado! estamos conectados"))
    .catch(e=>console.log(e));

    return client; // Objeto de conexion a la BBDD
}
//conn(); // Probar la conexion


// CREATE
exports.createNews = async (article) => {
    const client = await conn(); // Devuelve el objeto de conexion a la bbdd
    const result = await client
                        .db("bbdd")
                        .collection("news")
                        .insertOne(article);
    console.log(`New listing created with the following id: ${result.insertedId}`);
    return result.insertedId;
}
let noticia = {
    titulo: "Un oso panda conquista a más de cuatro millones de personas por su ternura",
    contenido:"Se llama Fu Bao y con sólo seis meses este oso panda muy unido a su cuidador. Tanto, que se aferra por completo a su pierna y, por más que se mueva, el hombre no logra librarse de su tierno enganche.",
    url:"https://static.scientificamerican.com/espanol/cache/file/050D641B-C40F-460A-B892534B0024CB3C_source.jpg?w=590&h=800&4147C8A7-B3A4-4126-9293322177AC2D1C",
    topic:"internacional"
}
// Crea noticia
//createNews(noticia);
// READ
// topic --> politica, deportes, internacional
exports.readNews = async(topic) => {
    let client = await conn();
    const result = await client
                        .db("bbdd")
                        .collection("news")
                        .find({'topic':topic})
                        .toArray();
    
    console.log(result);
    return result;
}
//Probar funcion
//readNews('internacional');

// UPDATE

// DELETE