import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/articles.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;
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
    this.page_title = "Crear Articulo";
    this.is_edit = false;
    
    /*
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
*/
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    //(alert("Formulario enviado!!!");
    console.log("entrada al metodo obsubmit");
    this._articleService.create(this.article).subscribe(

      response => { 
        console.log("antes de leer el response");
        console.log(response);
        if (response.status == "success") {
          this.status = 'success';

          this.article = response;

          //alerta
          swal(
            'Articulo Creado!!',
            'El articulo se ha Creado Correctamente',
            'success'
          );

          this._router.navigate(['/blog']);
          //console.log(response +"jejeej");
        } else { 
          this.status = 'error';
        }  
      }, error => { 
        console.log(error);
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

}