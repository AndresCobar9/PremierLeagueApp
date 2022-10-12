import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierLeagueTeamsComponent } from './premier-league-teams/premier-league-teams.component';
import { PremierLeagueTeamsServices } from './premier-league-teams/PremierLeagueService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PositionTableComponent } from './position-table/position-table.component';
import { PositionTableService } from './position-table/PositionTableService';

@NgModule({
  declarations: [
    AppComponent,
    PremierLeagueTeamsComponent,
    NavBarComponent,
    FooterComponent,
    PositionTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PremierLeagueTeamsServices,
    PositionTableService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
