const http = require('http'); // Modulo a importar

const cowsay = require('cowsay');
const starwars = require('starwars');
// Importar modulo propio
const calculadora = require('./modules/calculadora');

const hostname = 'localhost'; // IP 127.0.0.1 
const port = 3000; // Puerto

console.log("cuanto son 3+2?: "+calculadora.suma(3,2));
console.log("cuanto son 3-2?: "+calculadora.resta(3,2));
console.log("cuanto son 4/2?: "+calculadora.division(4,2));
// node app.js
//nodemon app.js
//npm start

// Codigo del Servidor
const server = http.createServer((req, res) => {
  // Rellenar la respuesta
  res.statusCode = 200; // 200 OK
  res.setHeader('Content-Type', 'text/html');
  res.write('<h2>Bienvenidoo a mi primer serverr!!</h2>')
  res.write('<h3>Aqui empiezaa la fiestaaaa4!!!!!</h3>')
  res.write('<h3>Aqui empiezaa la fiestaaaa5!!!!!</h3>')
  res.write(`<p>Frase:${starwars()}</p>`)
  res.write('<pre>'+cowsay.think({
    text: "cuanto son 2+2?: "+calculadora.suma(2,2),
    cow: '', // Template for a cow, get inspiration from `./cows`
    eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
    tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
    wrap: true, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
    wrapLength: 20, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
    mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
  })+'</pre>')
  res.end('<p>Hello World</p>');
});

// Escuchador de eventos. Espera a que llegue peticion
server.listen(port, hostname, () => {
    // Mensaje de "bienvenida" al servidor
  //console.log(`Server running at http://${hostname}:${port}/`); // Msj bienvenida al server
  console.log(cowsay.say({
	text : `Muuu. Bienvenido a mi servidor http://${hostname}:${port}/`,
	e : "^^",
	T : "U "
    }));
});