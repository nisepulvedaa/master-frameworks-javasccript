<template>
<div class="general">
     <Slider :texto="'Busqueda: '+ this.searchString" />
        <div class="center">

            <section id="content">
                <h2 class="subheader" v-if="articles">Articulos Encontrados:  </h2>
                <h2 class="subheader" v-else>Sin Resultados</h2>
                 
                 <div id="articles" v-if="articles">

                     <Articles :articles="articles" />

                 </div>

                 <div id="articles" v-else>

                    No Hay Articulos que coincidan con tu busqueda

              </div>

            </section>
             <Sidebar />
          <div class="clearfix"></div>

       </div>  
</div>   
</template>

<script>
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
import axios from 'axios'
import Articles from './Articles'
import Global from '../Global'

export default {
    name: 'Search',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
         this.searchString = this.$route.params.searchString;
      // alert(Global.url);
        this.getArticlesBySearch(this.searchString);
    },
    data(){
        return {
            url: Global.url,
            articles: [],
            searchString: ''
        }
    },
    methods: {
        getArticlesBySearch(){
            axios.get(this.url + 'search/'+this.searchString)
            .then(res => {
                if(res.data.status == 'success'){
                    this.articles = res.data.articles;
                }else{
                    console.log(res.data.status);
                }
                //console.log(this.articles);
            });
        }
    }
}
</script>