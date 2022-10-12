import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import{ HttpClient} from '@angular/common/http'

@Injectable()

export class PositionTableService
{
    private API_ServerRank="https://flaskapp-365318.nn.r.appspot.com/api/PosTable";
    constructor(public http:HttpClient){}
    public getRank():Observable<any>{
        return this.http.get(this.API_ServerRank)
    }
    
}
