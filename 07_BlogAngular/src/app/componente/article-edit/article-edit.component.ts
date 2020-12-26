import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/articles.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['../article-new/article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  
  public article: Article;
  public title: string;
  public date: any;
  public image: string;
  public content: string;
  public url: string;
  public _id: string;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpge, .svg",
    maxSize: "50",
    uploadAPI:  {
      url:Global.url+'/upload-image'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};
  
  
  
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {

    this.article = new Article('', '', '', null, null);
    this.is_edit = true;
    this.page_title = "Editar Articulo";
    this.url = Global.url;
   }

  ngOnInit(): void {
    this.getArticle();//console.log(this.page_title);
  }

  
  onSubmit() { 
    //(alert("Formulario enviado!!!");
    console.log("entrada al metodo obsubmit");
    this._articleService.update(this.article._id,this.article).subscribe(

      response => { 
       // console.log("antes de leer el response");
        //console.log(response);
        if (response.status == "success") {
          this.status = 'success';
          
          this.article = response;
          console.log(response.article._id);

          
          //alerta
          swal(
            'Articulo Editado!!',
            'El articulo se ha Editado Correctamente',
            'success'
          );

          this._router.navigate(['/blog/articulo/', response.article._id]);
          //console.log(response +"jejeej");
        } else { 
          this.status = 'error';
        }  
      }, error => { 
        console.log(error);
        //alerta
        swal(
          'Edición fallida!!',
          'El articulo no se ha Editado Correctamente',
          'error'
        );
      }
    );
  }

  imageUpload(data) { 
    console.log(data);
    console.log(data.body);
    console.log(data.body.image);
    //console.log(JSON.parse(data))
    let image_data = data.body; //JSON.parse(data.body);//JSON.parse(data);
    this.article.image = image_data.image;
    ///alert(image_data.image);
  }

  getArticle() { 

    this._route.params.subscribe(params => { 
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => { 
          if (response.article) {
            /*
            this.title = response.article.title;
            this.date = response.article.date;
            this.image = response.article.image;
            this._id = response.article._id;
            //console.log(this._id);
            this.content = response.article.content;
            */
            this.article = response.article;
            console.log(this.article);
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


}
