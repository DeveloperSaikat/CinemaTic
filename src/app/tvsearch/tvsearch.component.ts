import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Tvseries } from '../models/tvseries';
import { MovieservService } from '../shared/movieserv.service';

@Component({
  selector: 'app-tvsearch',
  templateUrl: './tvsearch.component.html',
  styleUrls: ['./tvsearch.component.css']
})
export class TvsearchComponent implements OnInit {

  constructor(private movieService: MovieservService) { }

  tvForm:FormGroup;
  search: Tvseries[]=[];

  ngOnInit() {
    this.tvForm = new FormGroup({
      tv: new FormControl('')
    });
  }

  onSubmit(){
    this.search.splice(0,this.search.length);
    this.movieService.tvsearch(this.tvForm.value.tv).subscribe(
      (data)=>{
        for(let i=0; i<data.results.length; i++){
          const tvResult = new Tvseries(
            data.results[i].title,
            data.results[i].overview,
            data.results[i].release_date,
            data.results[i].poster_path,
            data.results[i].vote_average
          )
          this.search.push(tvResult);
        }
        return this.search;
      }
    )
  }
}
