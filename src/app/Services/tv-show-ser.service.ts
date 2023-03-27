import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class TvShowSerService {
  private baseusl="https://api.themoviedb.org/3/tv/";
  private key ="?api_key=3525ed71d5e8ac2d62316f31904d48d7"
  constructor(public http:HttpClient) {
   }
   toprate():Observable<any>{
   return this.http.get<any>(this.baseusl+"top_rated"+this.key);
   }
   
   popular():Observable<any>{
    return this.http.get<any>(this.baseusl+"popular"+this.key);
    }
    OnAir():Observable<any>{
      return this.http.get<any>(this.baseusl+"on_the_air"+this.key);
      }
      GetOne(id:any):Observable<any>{
        return this.http.get<any>(this.baseusl+id+this.key);
        }
       
        today():Observable<any>{
          return this.http.get<any>(this.baseusl+"airing_today"+this.key);
          }

          similar(id:any):Observable<any>{
            return this.http.get<any>(this.baseusl+id+"/similar"+this.key);
            }
            credits(id:any):Observable<any>{
              return this.http.get<any>(this.baseusl+id+"/credits"+this.key);
              }
              airing_today():Observable<any>{
                return this.http.get<any>(this.baseusl+"airing_today"+this.key);
                }
                
}
