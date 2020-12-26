import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/articles.services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
  public articles: Array<Article>;
  public search: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];
      this.search = search;
      //alert(search);
      this._articleService.search(search).subscribe(
        response => { 
          if (response) { 
            this.articles = response.articles;
            console.log(this.articles);
          }
          //this.articles = response;
          //console.log(this.articles);
          //console.log(response);
         // console.log(response);
        }, error => {
          console.log(error);
          this.articles = [];
         /// this._router.navigate(['/home']);
         }
      );

    });
  }

}
