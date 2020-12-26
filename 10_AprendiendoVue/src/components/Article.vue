<template>

<div class="general">
        <div class="center">

            <section id="content">
                <h2 class="subheader">Blog</h2>
                 <div id="articles">

                <!--Listado articulos-->
                <article class="article-item article-detail" v-if="article" >
                    <div class="image-wrap">
                          <img :src="url+'get-image/'+article.image" :alt="article.title" :title="article.title" v-if="article.image" >
                          <img src="https://farm5.staticflickr.com/4363/36346283311_1dec5bb2c2.jpg" :alt="article.title" :title="article.title" v-if="!article.image" >
                    </div>
                    <h1 class="subheader">{{article.title}}</h1>
                    <span class="date">
                    {{article.date | moment("from","now")}}
                    </span>
                    <p>
                        {{article.content}}
                    </p>
                    <div class="clearfix"></div>

                    <router-link class="btn btn-warning" :to="'/editar/'+article._id">Editar</router-link>
                    <a class="btn btn-danger" @click="deleteArticle(article._id)">Eliminar</a>

                </article>
                </div>
            </section>
             <Sidebar />
          <div class="clearfix"></div>

       </div>  
</div>   


</template>

<script>
import Sidebar from './Sidebar.vue'
import axios from 'axios'
import Global from '../Global'
import swal from 'sweetalert'

export default {
    name: 'Article',
    components: {
        Sidebar
    },
    data(){
        return {
            url: Global.url,
            article: null
        }
    },
     mounted(){
      // alert(Global.url);
        var articleId = this.$route.params.id;
        //console.log(articleId);
        this.getArticle(articleId);
        //console.log(this.article);
    },
    methods: {
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
        deleteArticle(articleId){
            //alert(articleId);
         swal({
        title: "¿Estas Seguro?",
        text: "Una vez eliminado, el articulo no podras recuperarlo!",
        icon: "warning",
        buttons: [true,true],
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
            axios.delete(this.url + 'article/'+articleId)
            .then(response => {
                console.log(response);
                swal(
                    'Articulo borrado',
                    'El Articulo se ha borrado correctamente',
                    'success'

                );
                this.$router.push('/blog');
            });


      } else { 
        swal(
          'Tranquilo',
          'Tu Articulo no se ha eliminado',
          'info'
        );
      }
    });
            
        }
    }
}
</script>