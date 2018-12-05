import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ITransactionList } from './date-wise-transaction/transaction.model';
import { Constant } from '../core/utils/constant';

@Injectable()
export class TransactionListService {
   url: string;
   constructor(private http: HttpClient) { }
   getData(): Observable<ITransactionList[]> {
      this.url = Constant.getUrl.data;
      return this.http.get<ITransactionList[]>(this.url);
   }
}
