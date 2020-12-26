import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Peliculas from './componentes/Peliculas';
import Error from './componentes/Error';

import Header from './componentes/Header';
import Search from './componentes/Search';

import Footer from './componentes/Footer';
import Home from './componentes/Home';
import Blog from './componentes/Blog';
import Formulario from './componentes/Formulario';
import Article from './componentes/Article';
import CreateArticle from './componentes/CreateArticle';
import EditArticle from './componentes/EditArticle';

class Router extends Component{
    
    render(){
       
        return(
        

            <BrowserRouter>
               <Header />
      
            
                {/*CONFIGURAR RUTAS Y PAGINAS */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/articulo/:id"  component={Article} />
                        <Route exact path="/blog/crear"  component={CreateArticle} />
                        <Route exact path="/blog/editar/:id"  component={EditArticle} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (<Redirect to={'/blog/busqueda/'+search} />);
                            }
                        } />
                        <Route exact path="/formulario" component={Formulario} />
                        <Route exact path="/peliculas" component={Peliculas} />
                        <Route exact path="/pagina-1" render={() =>(
                            <h1>Hola mundo desde la ruta: Pagina 1</h1>
                         )} />

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) =>{

                            var id = props.match.params.id;
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return(
                            <div id="content">
                                     <h1 className="subheader">Página de pruebas</h1>
                                    <h2>{id}</h2>
                                    <h2>
                                        {nombre && !apellidos &&
                                        nombre 
                                        }
                                        {nombre && apellidos &&
                                        nombre + ' ' + apellidos
                                        }
                                        </h2>
                            </div>
                           
                                 );
                            }
                         } />
                        <Route component={Error} />
                    </Switch>
                    

                
                <div className="clearfix"></div>

                <Footer />


            </BrowserRouter>
        );
    }
}

export default Router;