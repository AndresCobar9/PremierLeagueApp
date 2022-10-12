import { Component, OnInit } from '@angular/core';
import { PremierLeagueTeamsServices } from './PremierLeagueService';


@Component({
  selector: 'app-premier-league-teams',
  templateUrl: './premier-league-teams.component.html',
  styleUrls: ['./premier-league-teams.component.css']
})
export class PremierLeagueTeamsComponent implements OnInit {

  Teams:any;
  constructor(public PremierTeams: PremierLeagueTeamsServices){}
  ngOnInit(){
    this.PremierTeams.getTeams().subscribe(
      (r)=> {this.Teams = r; console.log(r)},
      (e)=> { console.error(e)}
    ) 
  }
  
}
