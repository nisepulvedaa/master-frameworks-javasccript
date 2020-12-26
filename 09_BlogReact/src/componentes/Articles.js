import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';

class Articles extends Component{

    url = Global.url;

    state = {
        articles: [],
        status: null
    };

    componentWillMount(){
        var home = this.props.home;
        var search = this.props.search;
       // alert(home);
        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
                this. getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
        
    }

    getArticles = () =>{
       // console.log("getArticles");
       axios.get(this.url+"articles")
       .then(res => {
           //console.log(res.data);
           this.setState({
               articles: res.data.articles,
               status: 'success'
           });
           console.log(this.state);
       });
       
    }

    getLastArticles = () =>{
        // console.log("getArticles");
        axios.get(this.url+"articles/last")
        .then(res => {
            //console.log(res.data);
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
           // console.log(this.state);
        });
        
     }

     
    getArticlesBySearch = (searched) => {
        // console.log("getArticles");
        axios.get(this.url+"search/"+searched)
        .then(res => {
            //console.log(res.data);
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            
            
           
          //  console.log(this.state);
        }).catch(err => {
            this.setState({
                articles: [],
                status: 'success'
            });
            //console.log("sdadas"+err);
        });
        
     }

    render(){
        if(this.state.articles.length >= 1){

            var listArticle = this.state.articles.map((article) => {
                return(
                    <article key={article._id} className="article-item" id="article-template">
                    <div className="image-wrap">
                        {article.image !== null ?(
                            <img src={this.url+"get-image/"+article.image} alt={article.title} title={article.title} />
                        ):(
                            <img src="data:image/png;base64,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" alt={article.title} title={article.title} />
                        )

                        }
                        
                    </div>
                <h2 className="subheader">{article.title}</h2>
                    <span className="date">
                       <Moment locale="es" fromNow>{article.date}</Moment> 
                </span>
                  <Link to={'/blog/articulo/'+article._id}>Leer mas</Link>
                    <div className="clearfix"></div>
                </article>

                );
            })

            return(
                <div id="articles">
                   {listArticle}
                </div>
            );
        }else if(this.state.articles.length === 0 && this.state.status === "success"){
            return(
                <div id="articles">
                   <h2 className="subheader">No Hay Articulos para Mostrar</h2>
                   <p>Todavia no hay contenido en esta Seccion</p>
                </div>
            );
        }else{
            return(
                <div id="articles">
                <h2 className="subheader">Cargando...</h2>
                <p>Espere Mientras Cargar el Contenido</p>
             </div>
            );

        }
     
    }
}
export default Articles;