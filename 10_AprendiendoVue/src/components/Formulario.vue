<template>
<div class="general">
     <Slider texto="Formulario" />
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>
              <form class="mid-form"  @submit.prevent="mostrarUsuario()" >

                <div class="form-group">
                    <label for="nombre">Nombre: </label>
                    <input type="text" name="nombre" v-model="user.nombre">
                    <div v-if="submited && !$v.user.nombre.required">
                        Este campo es requerido
                    </div>
                    <div v-if="submited && !$v.user.nombre.minLength">
                        Este campo debe tener mas caracteres
                    </div>
                </div>


                <div class="form-group">
                    <label for="apellidos">Apellidos: </label>
                    <input type="text" name="nombre" v-model="user.apellidos">
                     <div v-if="submited && !$v.user.apellidos.required">
                        Este campo es requerido
                    </div>
                     <div v-if="submited && !$v.user.apellidos.minLength">
                        Este campo debe tener mas caracteres
                    </div>
                </div>


                <div class="form-group">
                    <label for="bio">Biografia: </label>
                    <textarea name="bio" v-model="user.bio"></textarea>
                    <div v-if="submited && !$v.user.bio.required">
                        Este campo es requerido
                    </div>
                     <div v-if="submited && !$v.user.bio.minLength">
                        Este campo debe tener mas caracteres
                    </div>
                </div>


                <div class="form-group raddiobuttons">
                    <input type="radio" name="genero" id="genero" value="hombre" checked v-model="user.genero" />Hombre
                    <input type="radio" name="genero" id="genero" value="mujer" v-model="user.genero"  />Mujer
                    <input type="radio" name="genero" id="genero" value="otros" v-model="user.genero"  />Otros
                </div>

                <div class="clearfix"></div>

                <input type="submit" value="Enviar" class="btn btn-success">

                <div class="datos" v-if="user.nombre && user.apellidos">
                    <h3>{{user.nombre + ' ' + user.apellidos}}</h3>
                 </div>   

            </form>
            </section>
             <Sidebar />
          <div class="clearfix"></div>

       </div>  
</div>   
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
import Slider from './Slider.vue'
import Sidebar from './Sidebar.vue'
export default {
    name: 'Formulario',
    components: {
        Slider,
        Sidebar
    },
    validations: {
        user: {
         nombre: {
            required,
            minLength: minLength(2),
        },
        apellidos: {
            required,
            minLenght: minLength(2),
        },
        bio: {
            required,
            minLenght: minLength(10)
        }
        }
      
    },
    data(){
        return {
            submited: false,
            user:{
                nombre: '',
                apellidos: '',
                bio: '',
                genero: ''
            }
        }
    },
    methods:{
        mostrarUsuario(){
            console.log(this.user);
            this.submited = true;
            this.$v.$touch();
            if(this.$v.$invalid){
                return false;
            }

            alert("validacion pasada");
        }
    }
}
</script>