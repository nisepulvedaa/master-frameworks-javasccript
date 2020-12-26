<template>
 <section id="content">
<h2 class="subheader">Últimos articulos</h2>
<h1>{{ msg }}</h1>
    <h2>{{ texto }}</h2>
    <div class="red">
   
  </div>
 </section>

    
</template>

<script>
export default {
  name: 'HelloWorld',
   components: {

  },
  props: {
    msg: String
  },
  data(){
    return{
      texto: "Hola Mundo desde  el componente!!"
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red{
  background: red;
}
</style>
