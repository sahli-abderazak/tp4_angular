
import { FilmService } from '../services/film.service';
import { Film } from './../model/film.model';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
 
})
export class AddFilmComponent  implements OnInit {
  ngOnInit(): void{}
  newFilm = new Film();

  constructor(private FilmService : FilmService , private router: Router){}
  addFilm(){
    this.FilmService.ajouterFilm(this.newFilm);
    this.router.navigate(["films"])
    }
    
}
