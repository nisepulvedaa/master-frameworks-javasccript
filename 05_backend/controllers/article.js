'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');
const { exists } = require('../models/article');
const article = require('../models/article');

var controller = {
        datoCurso: (request, response) => {

            var hola = request.body.hola;


            return response.status(200).send({
                curso: 'Master en Frameworks JS',
                autor: 'Nicolas Sepulveda',
                url: 'deinsoluciones.cl',
                hola: hola,
            });
        },

        test: (request, response) => {
            return response.status(200).send({
                message: 'Soy la accion test de mi controlador de articulos'
            });
        },

        save: (request, response) => {
            //recoger parametros por post 
            var params = request.body;
            // console.log(params);
            //validar datos(validator)

            try {

                var validate_title = !validator.isEmpty(params.title);
                var validate_content = !validator.isEmpty(params.content);


            } catch (error) {

                return response.status(200).send({
                    status: 'error',
                    message: "Faltan datos por enviar !!!"
                });

            }

            if (validate_title && validate_content) {
                /*
                return response.status(200).send({
                    message: "Validacion correcta"
                });
                */
                //Crear el objeto a guardar
                var article = new Article();

                //asignar valores al objeto
                article.title = params.title;
                article.content = params.content;
                if (params.image) {
                    article.image = params.image;
                } else {
                    article.image = null;
                }


                //guardar el articulo
                article.save((error, articleStored) => {
                    if (error || !articleStored) {
                        return response.status(404).send({
                            status: 'error',
                            message: "El articulo no se ha guardado!!!"
                        });
                    } else {

                        return response.status(200).send({
                            status: 'success',
                            article: articleStored
                        });

                    }
                });
                //devolver una respuesta


            } else {
                return response.status(200).send({
                    status: 'error',
                    message: "Los datos no son validos!!!"
                });
            }



        },

        getArticles: (request, response) => {

            var query = Article.find({});
            var last = request.params.last;
            //console.log(last);
            if (last || last != undefined) {
                query.limit(5);
            }


            //Find
            query.sort('-_id').exec((error, articles) => {

                if (error) {
                    return response.status(500).send({
                        status: 'error',
                        message: "Error al Devolver los articulos!!!"
                    });
                }

                if (!articles) {
                    return response.status(404).send({
                        status: 'error',
                        message: "No hay articulos para Mostrar!!!"
                    });
                }

                return response.status(200).send({
                    status: 'success',
                    articles
                });

            });


        },
        getArticle: (request, response) => {


            var articleId = request.params.id;
            console.log(articleId);
            if (!articleId || articleId == null) {
                return response.status(404).send({
                    status: 'error',
                    message: "No existe el articulo!!!"
                });
            }


            //Find
            Article.findById(articleId, (error, article) => {

                if (error) {
                    return response.status(404).send({
                        status: 'error',
                        message: "Error al devolver los datos!!!"
                    });
                }


                if (!article) {
                    return response.status(404).send({
                        status: 'error',
                        message: "No existe el articulo!!!"
                    });
                }


                return response.status(200).send({
                    status: 'success',
                    article
                });


            });


        },
        update: (request, response) => {
            /// Recoger el id del articulo por la url
            var articleId = request.params.id;
            //Recoger los datos que llegan por put

            var params = request.body;
            //validar datos

            try {

                var validate_title = !validator.isEmpty(params.title);
                var validate_content = !validator.isEmpty(params.content);



            } catch (error) {
                return response.status(200).send({
                    status: 'error',
                    message: "Faltan datos por enviar!!!"
                });
            }

            if (validate_title && validate_content) {
                //find and update
                Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (error, articleUpdate) => {

                    if (error) {
                        return response.status(500).send({
                            status: 'error',
                            message: "Error al Actualizar"
                        });
                    }

                    if (!articleUpdate) {
                        return response.status(404).send({
                            status: 'error',
                            message: "No existe el articulo!!"
                        });
                    }

                    return response.status(200).send({
                        status: 'success',
                        article: articleUpdate
                    });

                });

            } else {


                return response.status(200).send({
                    status: 'error',
                    message: "La validacion no es Correcta!!!"
                });

            }



        },
        delete: (request, response) => {

            //recoger el id de la url

            var articleId = request.params.id;

            Article.findOneAndDelete({ _id: articleId }, (error, articleRemoved) => {
                if (error) {
                    return response.status(500).send({
                        status: 'error',
                        message: "Error al borrar!!!"
                    });
                }

                //fing and delete
                if (!articleRemoved) {
                    return response.status(404).send({
                        status: 'error',
                        message: "No se ha borrado el articulo, posiblemente no exista !!!"
                    });
                }


                return response.status(200).send({
                    status: 'success',
                    article: articleRemoved
                });



            });

        },
        upload: (request, response) => {

            // configurar el modulo del connect multiparty router/article.js

            //recoger el fichero de la peticion
            var file_name = 'Imagen no subida..';
            //console.log(request.files);

            if (!request.files) {
                return response.status(404).send({
                    status: 'error',
                    message: file_name,
                });


            }

            var file_path = request.files.file0.path;
            var file_split = file_path.split('\\');

            //advertencia en linux o max    var file_split = file_path.split('/');


            //nombre del archivo

            var file_name = file_split[2];

            //Extension del fichero

            var extension_split = file_name.split('\.');
            var file_ext = extension_split[1];
            //comprobar la extension, solo imagenes , si es valida borrar el fichero
            if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
                //borrar el archivo
                fs.unlink(file_path, (error) => {
                    return response.status(200).send({
                        status: "Error",
                        message: "La extension de la imagen no es valida!!"
                    });

                });
            } else {

                //si todo es valido , sacando id de la url
                var articleId = request.params.id;

                if (articleId) {
                    Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (error, articleUpdate) => {

                        if (error || !articleUpdate) {
                            return response.status(200).send({
                                status: "error",
                                message: "Error al guardar la imagen de articulo!!"
                            });
                        }

                        return response.status(200).send({
                            status: "Success",
                            article: articleUpdate
                        });
                    });

                } else {
                    return response.status(200).send({
                        status: "Success",
                        image: file_name
                    });
                }
                //buscar el articulo , asignarle el nombre de la imagen y actualizarlo





            }






        }, //end upload file
        getImage: (request, response) => {

            var file = request.params.image;
            var path_file = './upload/articles/' + file;

            fs.exists(path_file, (exists) => {
                //console.log(exists);
                if (exists) {
                    return response.sendFile(path.resolve(path_file));

                } else {

                    return response.status(404).send({
                        status: "error",
                        message: "La imagen no existe!!!"
                    });

                }
            });


        },
        search: (request, response) => {

            //sacar el string  a buscar
            var searchString = request.params.search;

            Article.find({
                    "$or": [
                        { "title": { "$regex": searchString, "$options": "i" } },
                        { "content": { "$regex": searchString, "$options": "i" } }
                    ]

                })
                .sort([
                    ["date", "descending"]
                ])
                .exec((error, articles) => {

                    if (error) {
                        return response.status(500).send({
                            status: "error",
                            message: "Error en la peticion!!!"
                        });
                    }

                    if (!articles || articles.length <= 0) {
                        return response.status(200).send({
                            status: "success",
                            message: "No hay articulos que coincidan con tu busqueda!!!"
                        });
                    }

                    return response.status(200).send({
                        status: "success",
                        articles
                    });
                });

            //find or 

            //


        },

    } //end controller

module.exports = controller;