import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/articles.services';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import SweetAlert from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public title: string;
  public date: any;
  public image: string;
  public content: string;
  public url: string;
  public _id: string;
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.title = response.article.title;
            this.date = response.article.date;
            this.image = response.article.image;
            this._id = response.article._id;
            console.log(this._id);
            this.content = response.article.content;
          } else {
            this._router.navigate(['/home']);
          }
          //console.log(response);
          
        }, error => {
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id) { 

    swal({
      title: "¿Estas Seguro?",
      text: "Una vez eliminado, el articulo no podras recuperarlo!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response => {
            this._router.navigate(['/blog']);
          }, error => {
            console.log(error);
          }
        );
    
        swal(
          'Articulo Elimado!!',
          'El articulo se ha Eliminado Correctamente',
          'success'
        );


      } else { 
        swal(
          'Tranquilo',
          'Tu Articulo no se ha eliminado',
          'info'
        );
      }
    });


   

  }

}
