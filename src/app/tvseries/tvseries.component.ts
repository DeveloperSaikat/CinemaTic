import { Component, OnInit } from '@angular/core';
import { MovieservService } from '../shared/movieserv.service';
import { Tv } from '../models/tv';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  tvs: Tv[]=[];

  ngOnInit() {
    this.onDemand();
  }

  onDemand(){
    this.tvs.splice(0, this.tvs.length);
    this.movieService.tvseries().subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const kidscategory = new Tv(
            data.results[i].name,
            data.results[i].overview,
            data.results[i].first_air_date,
            data.results[i].poster_path,
            data.results[i].vote_average
          );
          console.log(kidscategory);
          this.tvs.push(kidscategory);
        }
        return this.tvs;
      }
    )
  }

}
