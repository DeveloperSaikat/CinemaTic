import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Msearch } from '../models/msearch';
import { MovieservService } from '../shared/movieserv.service';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  movieForm:FormGroup;
  search: Msearch[]=[];

  ngOnInit() {
    this.movieForm = new FormGroup({
      movie: new FormControl('')
    });
  }

  onSubmit(){
    this.search.splice(0,this.search.length);
    this.movieService.msearch(this.movieForm.value.movie).subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const movieResult = new Msearch(
            data.results[i].title,
            data.results[i].overview,
            data.results[i].release_date,
            data.results[i].poster_path,
            data.results[i].vote_average
          )
          this.search.push(movieResult);
        }
        return this.search;
      }
    )
  }
}
