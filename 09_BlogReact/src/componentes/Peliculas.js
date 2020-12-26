import React, {Component} from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component{
    state= { };

    cambiarTitulo = () =>{

        var {peliculas} = this.state;
       // var random = Math.floor(Math.random() * 3);
        peliculas[0].titulo ="Batman Begins" ;

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula,indice) => {
        //console.log("favorita marcada");
        console.log(pelicula,indice);
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount(){
        //alert("se va a montar el componente");
        this.setState({
            peliculas: [
                {titulo: 'Batman vs Superman', image: 'https://www.kienyke.com/sites/default/files/styles/interna_destacada_s/public/2020-06/Batman-vs.-Superman6.jpg'},
                {titulo: 'Spiderman Far From Home', image: 'https://cnet2.cbsistatic.com/img/zu5Eh35K1_879O-JfJPUlGr1gdg=/940x0/2019/06/25/108f258a-3433-4764-9f4e-009dc086fcfe/spider-man-and-mysterio.jpg'},
                {titulo: "Avengers End Game" , image: 'https://hipertextual.com/files/2019/04/hipertextual-peliculas-marvel-que-deberias-ver-antes-endgame-2019311434.jpg'}
            ],
            nombre: "Nicolas Sepulveda",
            favorita: "" 
        });
    }

    componentDidMount(){
        //alert("ya se ha montado el componente");
    }

    render(){
        var pStyle = {
            background: 'green',
            color:'white', 
            padding:'10px'
            }
          var favorita;
          if(this.state.favorita.titulo){
              favorita = (
                <p className="favorita" style={pStyle}>
                <strong>La Pelicula favorita es: </strong>
                <span>{this.state.favorita.titulo}</span>
                   </p>
              );
          } else{
              favorita = (
                <p>No Ha seleccionado una Pelicula Favorita</p>
              )
          } 
        return(
            <div id="peliculas">
            <Slider  title="Peliculas" size="slider-small" />
            <div className="center">
            <div  id="content" className="peliculas">
                <h2 className="subheader">Listado de Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}>Cambiar Titulo de Batman</button></p>
                
                {favorita}

                {/*this.state.favorita.titulo ? (

                  <p className="favorita" style={pStyle}>
                  <strong>La Pelicula favorita es: </strong>
                  <span>{this.state.favorita.titulo}</span>
                     </p>) : (
                         <p>No Ha seleccionado una Pelicula Favorita</p>
                     )
                
                     */}

              
               

            {/* crear componente de peliculas */ }

                <div id="articles" className="peliculas">    
                {
                    this.state.peliculas.map((pelicula, i) =>{
                        return(
                        
                            <Pelicula 
                            key={i} 
                            pelicula={pelicula} 
                            marcarFavorita={this.favorita}
                            indice={i}
                            />
                        )
                    })
                }
                </div>
            </div>
            <Sidebar   />
            </div>
            </div>
        );
    }
}

export default Peliculas;