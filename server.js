// Se cargan los módulos de express
const express = require('express');
const path = require('path');

const app = express();

// Se corren los archivos en la carpeta /dist
app.use(express.static(__dirname + '/dist'));

// Se le permite a Angular enrutar en vez de el servidor
// Cualquier ruta de la aplicación será desde el index construido
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Inicia la aplicación por el puerto por defecto de Heroku
app.listen(process.env.PORT || 8080);
