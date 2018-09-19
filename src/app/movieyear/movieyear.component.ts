import { Component, OnInit } from '@angular/core';
import { Myear } from '../models/movieyear';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieservService } from '../shared/movieserv.service';

@Component({
  selector: 'app-movieyear',
  templateUrl: './movieyear.component.html',
  styleUrls: ['./movieyear.component.css']
})
export class MovieyearComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  movieForm:FormGroup;
  search: Myear[]=[];

  ngOnInit() {
    this.movieForm = new FormGroup({
      movie: new FormControl('')
    });
  }

  onSubmit(){
    this.search.splice(0,this.search.length);
    this.movieService.movieyear(this.movieForm.value.movie).subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const movieResult = new Myear(
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
