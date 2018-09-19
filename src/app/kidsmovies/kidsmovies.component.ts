import { Component, OnInit } from '@angular/core';
import { MovieservService } from '../shared/movieserv.service';
import { Kids } from '../models/kids';

@Component({
  selector: 'app-kidsmovies',
  templateUrl: './kidsmovies.component.html',
  styleUrls: ['./kidsmovies.component.css']
})
export class KidsmoviesComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  kids: Kids[]=[];

  ngOnInit() {
    this.onDemand();
  }

  onDemand(){
    this.kids.splice(0, this.kids.length);
    this.movieService.kidsmovies().subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const kidscategory = new Kids(
            data.results[i].title,
            data.results[i].overview,
            data.results[i].release_date,
            data.results[i].poster_path,
            data.results[i].vote_average
          );
          console.log(kidscategory);
          this.kids.push(kidscategory);
        }
        return this.kids;
      }
    )
  }
}
