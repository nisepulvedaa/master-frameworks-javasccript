<template>
<div class="general">
     <Slider texto="Bienveniedo Al Curso de Vue" home="true" />
        <div class="center">

                <section id="content">
                    <h2>Ultimos articulos</h2>

                    <div id="articles">
                        <Articles  :articles="articles" />
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
import Articles from './Articles.vue'
import axios from 'axios'
import Global from '../Global'

export default {
    name: 'LastArticles',
     components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
      // alert(Global.url);
        this.getLasArticles();
    },
    data(){
        return {
            url: Global.url,
            articles: []
        }
    },
    methods: {
        getLasArticles(){
            axios.get(this.url + 'articles/true')
            .then(res => {
                if(res.data.status == 'success'){
                    this.articles = res.data.articles;
                }
                //console.log(this.articles);
            });
        }
    }
}
</script>