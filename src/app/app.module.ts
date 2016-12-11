import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { Team1Component } from './teams/team1/team1.component';
import { Team2Component } from './teams/team2/team2.component';
import { Team3Component } from './teams/team3/team3.component';
import { Team4Component } from './teams/team4/team4.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team1', component: Team1Component },
  { path: 'team2', component: Team2Component },
  { path: 'team3', component: Team3Component },
  { path: 'team4', component: Team4Component },
 /* {
    path: 'heroes',
    component: HeroListComponent,
    data: {
      title: 'Heroes List'
    }
  },*/
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    TasksComponent,
    AboutComponent,
    Team1Component,
    Team2Component,
    Team3Component,
    Team4Component,
    Team1Component,
    Team2Component,
    Team3Component,
    Team4Component,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
