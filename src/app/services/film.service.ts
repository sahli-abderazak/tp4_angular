import { Film } from './../model/film.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films : Film[]
  film! : Film;
  constructor() { 
    console.log("creation du service film !");
    
    this.films = [
      {idFilm : 1, nomFilm : "That's My Boy ", genreFilm : "comedie", dateSortie : new Date("06/15/2012")},
      {idFilm : 2, nomFilm : "Bodyguard", genreFilm :"action" , dateSortie : new Date("09/3/2018")},
      {idFilm : 3, nomFilm :"The Dictator", genreFilm : "comedie", dateSortie : new Date("05/16/2012")}
       ];
  }
  listeFilm() : Film[]{
    return this.films;

  }
  ajouterFilm( f: Film){
    this.films.push(f);
    }
    supprimerFilm( film: Film){
      const index = this.films.indexOf(film, 0);
      if (index > -1) {
      this.films.splice(index, 1);
      }
      }
      consulterFilm(id:number): Film{
        return this.film = this.films.find(f => f.idFilm == id)!;
        
        }
        updateFilm(f:Film)
       {
       
          this.supprimerFilm(f);
           this.ajouterFilm(f);
           this.trierFilms()
       }
       trierFilms(){
        this.films = this.films.sort((n1,n2) => {
        if (n1.idFilm! > n2.idFilm!) {
        return 1;
        }
        if (n1.idFilm! < n2.idFilm!) {
        return -1;
        }
        return 0;
        });
        }
          
      
      }
