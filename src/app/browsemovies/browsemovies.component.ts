import { Component, OnInit } from '@angular/core';
import { MovieservService } from '../shared/movieserv.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-browsemovies',
  templateUrl: './browsemovies.component.html',
  styleUrls: ['./browsemovies.component.css']
})
export class BrowsemoviesComponent implements OnInit {

  movies: Movies[]=[];
  constructor(private movieService: MovieservService) { }

  ngOnInit() {
    this.onDemand();
  }

  onDemand(){
    this.movies.splice(0, this.movies.length);
    this.movieService.movies().subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const kidscategory = new Movies(
            data.results[i].title,
            data.results[i].overview,
            data.results[i].release_date,
            data.results[i].poster_path,
            data.results[i].vote_average
          );
          console.log(kidscategory);
          this.movies.push(kidscategory);
        }
        return this.movies;
      }
    )
  }

}
