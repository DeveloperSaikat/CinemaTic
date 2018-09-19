import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowsemoviesComponent } from './browsemovies/browsemovies.component';
import { KidsmoviesComponent } from './kidsmovies/kidsmovies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { MovieservService } from './shared/movieserv.service';
import { CommonModule } from '@angular/common';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { TvsearchComponent } from './tvsearch/tvsearch.component';
import { MovieyearComponent } from './movieyear/movieyear.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
      {path:'tvsearch', component: TvsearchComponent},
      {path:'moviesearch', component: SearchmoviesComponent},
      {path:'tvseries', component: TvseriesComponent},
      {path:'kids', component: KidsmoviesComponent},
      {path:'people', component: PeopleComponent},
      {path:'movieyear', component: MovieyearComponent},
      {path:'browse', component: BrowsemoviesComponent},
      {path:'welcome', component: HomepageComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
 ];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BrowsemoviesComponent,
    KidsmoviesComponent,
    TvseriesComponent,
    SearchmoviesComponent,
    TvsearchComponent,
    MovieyearComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
