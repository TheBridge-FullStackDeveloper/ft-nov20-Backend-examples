const http = require('http'); // Modulo a importar

const hostname = 'localhost'; // IP 127.0.0.1 
const port = 3000; // Puerto

// Codigo del Servidor
const server = http.createServer((req, res) => {
  // Rellenar la respuesta
  res.statusCode = 200; // 200 OK
  res.setHeader('Content-Type', 'text/html');
  res.write('<h2>Bienvenido a mi primer serverr!!</h2>')
  res.write('<h3>Aqui empieza la fiestaaaa!!!!!</h3>')
  res.end('<p>Hello World</p>');
});

// Escuchador de eventos. Espera a que llegue peticion
server.listen(port, hostname, () => {
    // Mensaje de "bienvenida" al servidor
  console.log(`Server running at http://${hostname}:${port}/`); // Mensa
});