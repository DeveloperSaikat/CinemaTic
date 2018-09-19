import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieservService } from '../shared/movieserv.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  movieForm:FormGroup;
  search: People[]=[];
  id:number;

  ngOnInit() {
    this.movieForm = new FormGroup({
      name: new FormControl('')
    });
  }

  onSubmit(){
    this.search.splice(0,this.search.length);
    this.movieService.getID(this.movieForm.value.name).subscribe(
      (data)=>{
        this.id=data.results[0].id;
        this.findCredits()
      }
    )
    
    
}

findCredits(){
  this.search.splice(0,this.search.length);
    this.movieService.credits(this.id).subscribe(
      (data)=>{
        for(let i=0; i<data.credits.cast.length; i++){
          const movieResult = new People(
            data.credits.cast[i].title,
            data.credits.cast[i].overview,
            data.credits.cast[i].release_date,
            data.credits.cast[i].poster_path,
            data.credits.cast[i].vote_average
          )
          this.search.push(movieResult);
      }
      return this.search;
    }
    
  )

}
}
