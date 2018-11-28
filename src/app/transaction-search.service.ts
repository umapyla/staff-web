import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class TransactionSearchService {
   private url = 'https://api.myjson.com/bins/124m8a';

   constructor(private http: HttpClient) { }

   getData(): Observable<any> {
      return this.http.get<any>(this.url);
   }
}

