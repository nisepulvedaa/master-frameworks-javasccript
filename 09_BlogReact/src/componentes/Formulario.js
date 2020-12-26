import React,{Component} from 'react';
import Sidebar from './Sidebar';

class Formulario extends Component{


    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    radio1Ref = React.createRef();
    radio2Ref = React.createRef();
    radio3Ref = React.createRef();
    state ={
        user: {}
    }

    recibirFormulario = (e) =>{
        e.preventDefault();
       // console.log("Formulario enviado!!!");
       // console.log(this.nombreRef.current.value);
       var genero = '';
        if(this.radio1Ref.current.checked){
            genero = this.radio1Ref.current.value;
        }else if(this.radio2Ref.current.checked){
            genero = this.radio2Ref.current.value;
        }else{
            genero = this.radio3Ref.current.value;
        }
        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        
        }
        this.setState({
            user:user
        });
        
        console.log("Formulario enviado!!!");
        console.log(user);
    }

    render(){
        if(this.state.user.nombre){
            var user = this.state.user;
        }
        return(
            <div id="formulario">

              

                <div className="center">

                <div id="content">
                    {/* Crear un Formulario*/}
                    <h1 className="subheader">Formulario</h1>

                    {/* Mostrar datos formularios */}

                    {this.state.user.nombre &&
                        <div id="user-data">
                            <p>Nombre: <strong>{user.nombre}</strong></p>
                            <p>Apellidos: <strong>{user.apellidos}</strong></p>
                            <p>Bio: <strong>{user.bio}</strong></p>
                            <p>Genero: <strong>{user.genero}</strong></p>
                        </div>  
                    }

                    <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>

                        <div className="form-group">
                            <label htmlFor="nombre">Nombre: </label>
                            <input type="text" name="nombre" ref={this.nombreRef} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos: </label>
                            <input type="text" name="nombre" ref={this.apellidosRef} />
                        </div>


                        <div className="form-group">
                            <label htmlFor="bio">Biografia: </label>
                            <textarea name="bio" ref={this.bioRef}></textarea>
                        </div>


                        <div className="form-group raddiobuttons">
                            <input type="radio" name="genero" ref={this.radio1Ref} value="hombre" />Hombre
                            <input type="radio" name="genero" ref={this.radio2Ref} value="mujer" />Mujer
                            <input type="radio" name="genero" ref={this.radio3Ref} value="otros" />Otros
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                        </form>

                </div>

                <Sidebar />


                </div>
               

            </div>
            
           
        );
    }
}

export default Formulario;