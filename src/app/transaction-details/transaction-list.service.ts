import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class TransactionListService {
   url: string;
   constructor(private http: HttpClient) { }
   getData(): Observable<any> {
      this.url = 'https://api.myjson.com/bins/sjaqy';
      return this.http.get<any>(this.url);
   }
}
