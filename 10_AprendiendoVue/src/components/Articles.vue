<template>

<div>

        <div id="article-list" v-if="articles && articles.length >= 1">

                        <article class="article-item" id="article-template" v-for="article in articles" :key="article._id">
                            <div class="image-wrap">
                                <img :src="url+'get-image/'+article.image" :alt="article.title" :title="article.title" v-if="article.image" >
                                <img src="https://farm5.staticflickr.com/4363/36346283311_1dec5bb2c2.jpg" :alt="article.title" :title="article.title" v-if="!article.image" >
                            </div>
             
                              <h2 class="subheader" > <router-link :to="{name: 'article', params: {id: article._id}}">{{article.title}}   </router-link></h2>
                         
                            <span class="date">
                           {{article.date | moment("from", "now")}}
                        </span>
                        <router-link :to="{name: 'article', params: {id: article._id}}">Leer Mas </router-link>
                            <!--<a href="#">Leer Mas</a>-->
                            <div class="clearfix"></div>
                        </article>
        </div>     

      <div v-else-if="articles && articles.length < 1">
            No hay articulos para mostrar
        </div>

        <div v-else>
            Cargando.....
        </div>


</div>

</template>

<script>
import Global from '../Global.js' 

export default {
    name: 'Articles',
    props: ['articles'],
    data(){
        return {
            url: Global.url
        }
    }
}
</script>