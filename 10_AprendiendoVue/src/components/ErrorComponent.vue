<template>
    <section id="content">
    <hr/>
    <h1>{{titulo}}</h1>
    <h2>{{subtitulo}}</h2>
    <hr/>


</section>
</template>

<script>
export default {
    name: 'ErrorComponent',
    data() {
        return {  
            titulo: 'Pagina no Encontrada',
            subtitulo: 'La pagina que buscas no existe intenalo mas tarde :)'
          
        }
    }
}
</script>