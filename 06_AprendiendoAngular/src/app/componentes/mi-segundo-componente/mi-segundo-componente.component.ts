import { Component, OnInit, DoCheck , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-mi-segundo-componente',
  templateUrl: './mi-segundo-componente.component.html',
  styleUrls: ['./mi-segundo-componente.component.css']
})
export class MiSegundoComponenteComponent implements OnInit, DoCheck {
  public titulo: string;
  constructor() { 
    this.titulo = "Mi segundo Componente";
    console.log("Constructor lanzado");
  }

  ngOnInit() {
    console.log("Componente iniciado");
  }

  ngDoCheck() {
    console.log("Docheck Lanzado");
  }

  ngOnDestroy()  {
    console.log("El componente se va a eliminar");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado";
   }

}
