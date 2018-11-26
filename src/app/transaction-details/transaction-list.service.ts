import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ITransactionList } from './date-wise-transaction/transaction.model';

@Injectable()
export class TransactionListService {
   url: string;
   constructor(private http: HttpClient) { }
   getData(): Observable<ITransactionList[]> {
      this.url = 'https://api.myjson.com/bins/sjaqy';
      return this.http.get<ITransactionList[]>(this.url);
   }
}
