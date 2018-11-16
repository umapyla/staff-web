import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
@Injectable()
export class TransactionListService {
 url: string;
  constructor(private http: Http) { }
  getData(): Observable<Response> {
    this.url = 'https://api.myjson.com/bins/1gu5ci';
    return this.http.get(this.url);
  }
}
