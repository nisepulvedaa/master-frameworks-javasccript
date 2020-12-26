'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

// se elimina las funciones de versiones anteriores
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('La conexion a la base de datos de ha realiado bien!!');

        //Crear Servidor y escuchar Peticiones http
        app.listen(port, () => {
            console.log('Servidor Corriendo en http://localhost:' + port);
        });
    });