import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import{ HttpClient} from '@angular/common/http'

@Injectable()

export class PremierLeagueTeamsServices
{
    private API_ServerTeams="https://flaskapp-365318.nn.r.appspot.com/api/teams";
    constructor(public http:HttpClient){}
    public getTeams ():Observable<any>{
        return this.http.get(this.API_ServerTeams)
    }
    
}
