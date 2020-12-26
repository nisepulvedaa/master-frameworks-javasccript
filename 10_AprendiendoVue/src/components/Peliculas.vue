<template>
<div class="general">
     <Slider texto="Peliculas" />
        <div class="center">

            <section id="content">
            <h2>Peliculas</h2>

            <div class="mis-datos" v.if="misDatos">
                <p v-html="misDatos"></p>
                <br>
                {{web | mayusculas | concatenaYear('Coronavirus')}}
            </div>

            <div class="favorita" v-if="favorita">
              
                <h2>  La pelicula marcada es:  {{favorita.title}}</h2>
            </div>

            <div id="articles">
                <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
                    <Pelicula :pelicula="pelicula" v-on:favorita="hallagadoLaPeliculaFavorita" />
                </div>             
            </div>


        </section>
         <Sidebar />
          <div class="clearfix"></div>

        </div>  
</div>   

</template>

<script>
import Pelicula from './Pelicula.vue'
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Slider,
        Sidebar
    },
    methods: {
        hallagadoLaPeliculaFavorita(favorita){
            //console.log(favorita);
            //alert("se ha ejecutado el evento en el padre");
            this.favorita = favorita;
        }
    },
    computed: {
        
        peliculasMayuscula(){
             var peliculasModificadas = this.peliculas;
            for(var i=0; i < this.peliculas.length; i++){
                peliculasModificadas[i].title = peliculasModificadas[i].title.toUpperCase();
            }
           
            return peliculasModificadas;
        },
        misDatos(){
            return this.nombre + ' ' + this.apellidos + '<br /> ' + '<strong>Sitio web: </strong>' + this.web;
        }
    },
    filters:{
        mayusculas(value){

            return value.toUpperCase();

        },
        concatenaYear(value,message){
            var date = new Date();
            return value + ' ' + date.getFullYear()+ ' Año del ' + message;
        }
    },
    data(){
      
        return {
              nombre: 'Nicolas',
              apellidos: 'Sepulveda Alvear',
              web: 'deinsoluciones.cl',
              favorita: null,
                peliculas: [
                {title: 'Batman vs Superman',year: 2018, image: 'https://www.kienyke.com/sites/default/files/styles/interna_destacada_s/public/2020-06/Batman-vs.-Superman6.jpg'},
                {title: 'Spiderman Far From Home',year: 2019, image: 'https://cnet2.cbsistatic.com/img/zu5Eh35K1_879O-JfJPUlGr1gdg=/940x0/2019/06/25/108f258a-3433-4764-9f4e-009dc086fcfe/spider-man-and-mysterio.jpg'},
                {title: "Avengers End Game" ,year:2020, image: 'https://hipertextual.com/files/2019/04/hipertextual-peliculas-marvel-que-deberias-ver-antes-endgame-2019311434.jpg'},
                {title: "Iron Man" ,year:2008, image: 'https://as.com/meristation/imagenes/2020/03/11/noticias/1583907550_650115_1583907595_noticia_normal.jpg'}
            ]
        }
    }
 
}
</script>