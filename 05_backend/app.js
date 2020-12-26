'use strict'

//Cargar Modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express(http)
var app = express();

//Cargar ficheros rutas
var articles_router = require('./routes/article');

//Cargas Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    response.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Añadir prefijos a rutas / cargar rutas

app.use('/api', articles_router);

//Ruta metodo de prueba
/*
app.get('/probando', (request, response) => {
    //  console.log("Hola Mundo");


    return response.status(200).send(`
        <lu>
            <li>NodeJs</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </lu>
    `);
    
    return response.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Nicolas Sepulveda',
        url: 'deinsoluciones.cl'
    });
});

app.get('/datos-curso', (request, response) => {
    //  console.log("Hola Mundo");

  
    return response.status(200).send(`
        <lu>
            <li>NodeJs</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </lu>
    `);
   
    return response.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Nicolas Sepulveda',
        url: 'deinsoluciones.cl'
    });
});



app.post('/datos-curso', (request, response) => {
    //  console.log("Hola Mundo");
    var hola = request.body.hola;

   
    return response.status(200).send(`
        <lu>
            <li>NodeJs</li>
            <li>Angular</li>
            <li>React</li>
            <li>Vue</li>
        </lu>
    `);
    
    return response.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Nicolas Sepulveda',
        url: 'deinsoluciones.cl',
        hola: hola,
    });
});
*/

//Exportar Modulo (fichero actual)
module.exports = app;