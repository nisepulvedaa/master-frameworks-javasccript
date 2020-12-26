import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';


@Injectable()
export class PeliculaService{ 
  public peliculas: Array<Pelicula>;

  constructor() { 
    this.peliculas =  [
      new Pelicula("Spiderman Far From Home", 2020, 'https://cnet2.cbsistatic.com/img/zu5Eh35K1_879O-JfJPUlGr1gdg=/940x0/2019/06/25/108f258a-3433-4764-9f4e-009dc086fcfe/spider-man-and-mysterio.jpg'),
      new Pelicula("Avengers End Game", 2019, 'https://hipertextual.com/files/2019/04/hipertextual-peliculas-marvel-que-deberias-ver-antes-endgame-2019311434.jpg'),
      new Pelicula("Batman vs Superman", 2018, 'https://www.kienyke.com/sites/default/files/styles/interna_destacada_s/public/2020-06/Batman-vs.-Superman6.jpg'),
      new Pelicula("Iron Man", 2008,'https://sm.ign.com/ign_es/screenshot/default/ironmanvr-blogroll-1554158268175_1ybb.jpg' )
    ];
  }

  holaMundo(){ 
    return 'hola Mundo desde un servicio de Angular !!!';
  }

  getPeliculas() { 
    return this.peliculas;
  }

}