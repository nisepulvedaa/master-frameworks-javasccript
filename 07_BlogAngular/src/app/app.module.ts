import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from "angular-file-uploader";

import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { SliderComponent } from './componente/slider/slider.component';
import { SidebarComponent } from './componente/sidebar/sidebar.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HomeComponent } from './componente/home/home.component';
import { BlogComponent } from './componente/blog/blog.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { PaginaComponent } from './componente/pagina/pagina.component';
import { routing, appRoutingProviders } from './app.routing';
import { ErrorComponent } from './componente/error/error.component';
import { PaginaCopyComponent } from './componente/pagina-copy/pagina-copy.component';
import { PeliculaComponent } from './componente/pelicula/pelicula.component';
import { EsParPipe } from './pipes/espar.pipes';
import { HttpClient } from '@angular/common/http';
import { ArticlesComponent } from './componente/articles/articles.component';
import { ArticleComponent } from './componente/article/article.component';
import { SearchComponent } from './componente/search/search.component';
import { ArticleNewComponent } from './componente/article-new/article-new.component';
import { ArticleEditComponent } from './componente/article-edit/article-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PaginaCopyComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],

  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
