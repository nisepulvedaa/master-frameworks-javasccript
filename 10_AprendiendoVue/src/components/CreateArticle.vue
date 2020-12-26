<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './Sidebar.vue'
import Article from '../models/Article'
import axios from 'axios'
import Global from '../Global'
import {required } from 'vuelidate/lib/validators'
import swal from 'sweetalert'

export default {
    name: 'CreateArticle',
    components: {
        Sidebar,
    },
    data(){
        return {
            url: Global.url,
            file: '',
            article: new Article('','',null, ''),
            submited: false
        }
    },
    validations:{
        article: {
            title: {
                required
            },
            content:{
                required
            }
        }
       
    },
    mounted(){
        //console.log(this.article);
    },
    methods: {
        fileChange(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },
        save(){
            this.submited = true;

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }else{
                 //console.log(this.article);

                    axios.post(this.url + 'save' , this.article)
                    .then(response => {
                    if(response.data.status == "success"){

                        //subida del archivo

                        if(this.file != null && this.file != undefined && this.file != ''){
                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.file,
                                this.file.name
                            );
                            var articleId = response.data.article._id;
                            axios.post(this.url + 'upload-image/' + articleId, formData) 
                            .then(response => {
                                if(response.data.article){
                                    swal(
                                        'Articulo Creado',
                                        'El Articulo se ha Creado Correctamente',
                                        'success'
                                    );
                                    this.artice = response.data.article;
                                       this.$router.push('/blog');
                                    //this.$router.push("/blog");
                                }else{
                                    swal(
                                        'Creacion fallida',
                                        'El Articulo no se ha guardado bien',
                                        'error'
                                    );
                                    //mostrar alerta de error
                                }
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        }else{
                             swal(
                                        'Articulo Creado',
                                        'El Articulo se ha Creado Correctamente',
                                        'success'
                                    );
                             this.artice = response.data.article;
                              this.$router.push('/blog');
                        }
                        
                     
                    }
                    })
                    .catch(error =>{
                        console.log(error);
                    });
            }

           
        },
    }
}
</script>