import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MovieservService {

  constructor(private http: Http) { }
  
  movies(){
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=##&region=US&language=en-US&page=1")
    .map((response: Response)=>response.json());
  }

  tvseries(){
    return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=##&language=en-US&page=1")
    .map((response:Response)=>response.json())
  }

  msearch(name:string){
    return this.http.get("https://api.themoviedb.org/3/search/movie?query="+name+"&api_key=##&language=en-US&page=1")
    .map((response:Response)=>response.json())
  }

  tvsearch(name:string){
    return this.http.get("https://api.themoviedb.org/3/search/tv?api_key=##&language=en-US&region=US&query="+name+"&page=1")
    .map((response:Response)=> response.json())
  }

  movieyear(date:number){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=##&language=en-US&region=IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year="+date+"")
    .map((response:Response)=>response.json())
  }

  getID(name:string){
    return this.http.get("https://api.themoviedb.org/3/search/person?api_key=##&language=en-US&query="+name+"&page=1&include_adult=false")
    .map((response:Response)=>response.json())
  }

  credits(id:number){
    return this.http.get("https://api.themoviedb.org/3/person/"+id+"?api_key=##&append_to_response=credits")
    .map((response:Response)=>response.json())
  }
  
  kidsmovies(){
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=##&certification_country=US&certification.lte=G&sort_by=popularity.desc")
    .map((response:Response)=>response.json());
  }
}
