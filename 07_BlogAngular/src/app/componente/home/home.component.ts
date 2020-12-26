import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/articles.services';
import { Article } from '../../models/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public articles: Array<Article>;
  constructor(private _articleService :ArticleService) { 

    this.titulo = "Últimos Artículos";
      

  }

  ngOnInit(): void {
  //console.log(this._articleService.pruebas());
  this._articleService.getArticles(true).subscribe(
    response => {
     //console.log(response);
      if (response.articles) {
        this.articles = response.articles;
        console.log(this.articles);
      } else { 

      }
    },
    error => {
    console.log(error);
  }
  );
    
    

  }


}
