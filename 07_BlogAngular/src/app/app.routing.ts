//importar los modulos del router del angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//importar componentes a los cuales les quiero haccer una pagina exlusiva

import { HomeComponent } from './componente/home/home.component';
import { BlogComponent } from './componente/blog/blog.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { PaginaComponent } from './componente/pagina/pagina.component';
import { ErrorComponent } from './componente/error/error.component';
import { PaginaCopyComponent } from './componente/pagina-copy/pagina-copy.component';
import { ArticleComponent } from './componente/article/article.component';
import { SearchComponent } from './componente/search/search.component';
import { ArticleNewComponent } from './componente/article-new/article-new.component';
import { ArticleEditComponent } from './componente/article-edit/article-edit.component';

//Array de rutas

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/articulo/:id', component: ArticleComponent },
  { path: 'blog/crear', component: ArticleNewComponent },
  { path: 'blog/editar/:id', component: ArticleEditComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'pagina-de-prueba', component: PaginaComponent },
  { path: 'pagina-de-prueba/:nombre/:apellidos', component: PaginaComponent },
  { path: 'pagina-de-prueba-2', component: PaginaCopyComponent },
  { path: '**', component: ErrorComponent }
];

//exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);