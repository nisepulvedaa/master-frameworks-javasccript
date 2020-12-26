<template>
<div class="general">
     <Slider texto="Pagina de Pruebas" />
        <div class="center">

            <section id="content">
                <h2 class="subheader">Pagina de Pruebas</h2>
                <h3>{{id_desde_url}}</h3>
                <h3>{{nombre}}</h3>
                <button @click="actualizarNombre()" >Actualizar Nombre</button>
                <button @click="redirigirAlBlog()" >Redirigir al blog</button>
            </section> 
             <Sidebar />
          <div class="clearfix"></div>
       </div>  
</div>    

</template>

<script>
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
export default {
    name: 'Pagina',
    components: {
        Slider,
        Sidebar
    },
    created(){
    console.log('Componente creado!!');
    },
    updated(){
      console.log('Componente actualizado!!');
    },
    mounted(){
        this.id_desde_url = this.$route.params.id
        console.log('Componente montado!!');
    },
    destroyed(){
        console.log('Componente Eliminado!!');
    },
    data(){
        return {
            id_desde_url: null,
            nombre: 'Victor Robles'
        }
    },
    methods:{
        actualizarNombre(){
                this.nombre = "Nicolas Sepulveda"
                console.log(this.nombre);
            },
        redirigirAlBlog(){
           this.$router.push('/blog');
          //  this.$router.push({name: 'pagina', params: {id: 'Redireccion'}});
        }
    }
   
}
</script>