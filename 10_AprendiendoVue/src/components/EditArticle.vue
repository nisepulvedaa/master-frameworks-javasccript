<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './Sidebar.vue'
import Article from '../models/Article'
import axios from 'axios'
import Global from '../Global'
import {required } from 'vuelidate/lib/validators'
import swal from 'sweetalert'

export default {
    name: 'EditArticle',
    components: {
        Sidebar,
    },
    data(){
        return {
            url: Global.url,
            file: '',
            article: new Article('','',null, ''),
            submited: false,
            isEdit: true
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
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
        console.log(this.article);
    },
    methods: {
        fileChange(){
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },
        getArticle(articleId){
            axios.get(this.url + 'article/'+articleId)
            .then(res => {
                //console.log(res.data.article);
                if(res.data.status == 'success'){
                    //console.log("data"+res);
                    this.article = res.data.article;
                }
                //console.log(this.articles);
            });
        },
        save(){
            var articleId = this.$route.params.id;
            this.submited = true;

            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }else{
                 //console.log(this.article);

                    axios.put(this.url + 'article/' + articleId, this.article)
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
                                        'Articulo Editado',
                                        'El Articulo se ha Editado Correctamente',
                                        'success'
                                    );
                                    this.artice = response.data.article;
                                       this.$router.push('/articulo/'+this.article._id);
                                    //this.$router.push("/blog");
                                }else{
                                    swal(
                                        'Edicion fallida',
                                        'El Articulo no se ha editado bien',
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
                                        'Articulo Editado',
                                        'El Articulo se ha Editado Correctamente',
                                        'success'
                                    );
                             this.artice = response.data.article;
                              this.$router.push('/articulo/'+this.article._id);
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