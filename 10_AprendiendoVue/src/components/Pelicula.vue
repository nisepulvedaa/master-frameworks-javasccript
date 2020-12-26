<template>
            <!--Listado articulos-->
                <article class="article-item" >
                    <div class="image-wrap">
                        <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title"  />
                    </div>
                    <h2 class="subheader">{{pelicula.title}}</h2>
                    <span class="date" :class="{
                       'year-green': pelicula.year >= 2015,
                        'year-red': pelicula.year < 2015,
                    }">
                    {{pelicula.year}}
                </span>
                    <a href="#">Leer Mas</a>
                    <input type="button" value="Marcar Como Favorita" @click="pasarFavoritaAlPadre(pelicula)" />
                    <div class="clearfix"></div>
                </article>
                <!--Añadir Articulos via js-->
</template>

<script>
export default {
    name: 'Pelicula',
    props: ['pelicula'],
    methods: {
        pasarFavoritaAlPadre(pelicula){
            //console.log(pelicula);
            //alert("boton pulsar");
            this.$emit('favorita',pelicula);
        }
    } 
}
</script>