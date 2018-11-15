import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TransactionSearchService {
private url = 'https://api.myjson.com/bins/rato2' ;
  constructor(private http: Http) { }

getData(): Observable<Response> {
 return this.http.get(this.url);
}

}
