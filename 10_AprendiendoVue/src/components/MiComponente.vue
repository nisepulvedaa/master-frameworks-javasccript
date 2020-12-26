<template>
<section id="content">
    <hr/>
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <hr/>

    <h2>Reactividad</h2>
    <input type="text"  v-model="nombre" />
    Mi Nombre es: <strong>{{nombre}}</strong>

        <pre>
        {{$data}}
     </pre>   

    <h2>Directivas Condicionales</h2>
    <input type="text"  v-model="edad" />
    Mi Edad es: <strong>{{edad}}</strong>

    <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65" >
        !!Eres Mayor de Edad
    </p>

    <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
        !!Eres de avanzada Edad
    </p>

    <p class="alert-danger-provisional" v-else>
        !!Eres Menor de Edad
    </p>

    <h2>Directiva Iterativa</h2>

    <ol>
       <li v-for="pelicula in peliculas" v-bind:key="pelicula">{{pelicula}}</li> 
    </ol>


</section>
</template>
<script>
export default {
    name: 'MiComponente',
    data() {
        return {
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtitulo de mi componente',
            nombre: '',
            edad: 18,
            peliculas: ['Batman vs Superman', 'Spiderman Far From Hombre', 'Iron Man', 'Avengers']
         
        }
    }
}
</script>