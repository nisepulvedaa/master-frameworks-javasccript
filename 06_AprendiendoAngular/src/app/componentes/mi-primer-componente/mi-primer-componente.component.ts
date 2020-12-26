import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: []
})
export class MiPrimerComponenteComponent {

  public titulo: string;
  public comentario: string;
  public year: number;
  public isVisible: boolean;
 

  constructor() { 
    this.titulo = "Hola Mundo , Este es mi Primer Componente ";
    this.comentario = "Este es mi Primer Comentario ";
    this.year = 2020;
    this.isVisible = true;



   // console.log('Componente mi-componente cargado!!');
   // console.log(this.titulo + this.comentario +  this.year);
  }
  ocultarComponente(){ 
    this.isVisible = false;
  }

  mostrarComponente(){ 
    this.isVisible = true;
  }


}
