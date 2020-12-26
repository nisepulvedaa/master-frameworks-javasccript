import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';


@Component({
  selector: 'app-pagina-copy',
  templateUrl: './pagina-copy.component.html',
  styleUrls: ['./pagina-copy.component.css'],
  providers: [PeliculaService]
})
export class PaginaCopyComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public favoritaTitle: string;
  public favoritaYear: Date;
  public favoritaYearNumber: number;
  constructor(private _peliculaService:PeliculaService) { 

  }

  ngOnInit(): void {
  //  console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
    this.peliculas = this._peliculaService.getPeliculas();
    console.log(this._peliculaService.getPeliculas());
  }

  mostrarFavorita(event) {
    this.favorita = new Pelicula(event.pelicula.title, event.pelicula.year, event.pelicula.image);
    console.log(this.favorita);
    this.favoritaTitle = this.favorita.title;
    this.favoritaYear = new Date(2020, 8, 12);
    this.favoritaYearNumber = event.pelicula.year;
  //  this.favoritaYear = this.favorita.year;
 
    //console.log();
  }

}
