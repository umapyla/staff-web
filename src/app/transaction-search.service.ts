import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class TransactionSearchService {

  // private url = 'https://api.myjson.com/bins/psdva';
 private url = 'https://api.myjson.com/bins/d8f1a';
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
       return this.http.get<any>(this.url);
    }

}

