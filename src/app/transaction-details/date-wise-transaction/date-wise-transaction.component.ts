import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { TransactionListService } from '../transaction-list.service';
import { ITransactionList } from './transaction.model';
@Component({
   selector: 'app-date-wise-transaction',
   templateUrl: './date-wise-transaction.component.html',
   styleUrls: ['./date-wise-transaction.component.scss']
})
export class DateWiseTransectioComponent implements OnInit {
   loopDate: string;
   fromDate: string;
   toDate: string;
   visibleTransactions: ITransactionList[];
   transactionsApi: ITransactionList[];
   transactions: ITransactionList[];
   isCustom: boolean;
   isTransaction: boolean;
   days: number;
   apiError: boolean;
   constructor(private transServ: TransactionListService) { }
   ngOnInit() {
      this.isCustom = false;
      this.getTransactionList();
      this.apiError = false;
      this.isTransaction = true;
   }
   getTransactionList() {
      this.transServ.getData().subscribe((res: ITransactionList[]) => {
         this.visibleTransactions = res;
         this.transactionsApi = res;
      }, (err) => {
         this.apiError = true;
      });
   }
   dateRangeSearch(days: number) {
      this.days = days;
      this.isCustom = false;
      this.visibleTransactions = this.transactionsApi;
      this.transactions = [];
      this.toDate = moment(new Date()).format('YYYY-MM-DD');
      this.fromDate = moment().subtract(days, 'd').format('YYYY-MM-DD');
      this.visibleTransactions.forEach((item) => {
         if (item.Date >= this.fromDate) {
            this.transactions.push(item);
         }
      });
      this.visibleTransactions = this.transactions;
      if (this.visibleTransactions.length === 0) {
         this.isTransaction = false;
      }
   }
   customSearch() {
      this.visibleTransactions = this.transactionsApi;
      this.transactions = [];
      this.fromDate = moment(new Date(this.fromDate)).format('YYYY-MM-DD');
      this.toDate = moment(new Date(this.toDate)).format('YYYY-MM-DD');
      this.visibleTransactions.forEach((item) => {
         this.loopDate = moment(new Date(item.Date)).format('YYYY-MM-DD');
         if (this.loopDate >= this.fromDate && this.loopDate <= this.toDate) {
            this.transactions.push(item);
         }
      });
      this.visibleTransactions = this.transactions;
      if (this.visibleTransactions.length === 0) {
         this.isTransaction = false;
      }
   }
   custom() {
      this.days = 0;
      this.visibleTransactions = this.transactionsApi;
      this.fromDate = '';
      this.toDate = '';
      this.isCustom = true;
   }
}
