import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TranscationdetailService {
  private url = 'https://api.myjson.com/bins/yx3z2';


  constructor(private http: Http) { 

  }
  getData(): Observable<Response> {
    return  this.http.get(this.url);
   }
   

}
