const http = require('http');
const fs = require('fs');
const path = require('path');

const version = process.env.VERSION || 'HOLA. esta es la version v1';

const server = http.createServer((req, res) => {
  let htmlFile = version.includes('v2') ? 'index-v2.html' : 'index.html';
  let cssFile = version.includes('v2') ? 'styles-v2.css' : 'styles.css';

  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, htmlFile), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error cargando index.html');
      }
      
      // Reemplazar específicamente "Versión desconocida" con la versión correcta
      let html = data.replace('Versión desconocida', version);
      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });
  } else if (req.url.endsWith('.css')) {
    fs.readFile(path.join(__dirname, req.url.slice(1)), (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end('CSS no encontrado');
      }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('No encontrado');
  }
});

server.listen(80, () => {
  console.log(`Servidor iniciado en puerto 80 - ${version}`);
});