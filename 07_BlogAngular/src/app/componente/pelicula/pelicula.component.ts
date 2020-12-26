import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent  implements OnInit {
  @Input() pelicula: Pelicula;

  @Output() MarcarFavorita: EventEmitter<any> = new EventEmitter();  
  

  
  constructor(){ }

  ngOnInit() {
    console.log("Componente iniciado");
  }


  seleccionar(event,pelicula) { 
    this.MarcarFavorita.emit({
       pelicula:pelicula
    });
  }

}
