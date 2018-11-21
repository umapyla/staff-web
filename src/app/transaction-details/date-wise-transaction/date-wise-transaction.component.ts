import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { TransactionListService } from '../transaction-list.service';
import { transactionList } from '../transaction-list/transaction.model';


@Component({
   selector: 'app-date-wise-transaction',
   templateUrl: './date-wise-transaction.component.html',
   styleUrls: ['./date-wise-transaction.component.scss']
})
export class DateWiseTransectioComponent implements OnInit {
   loopDate: any;
   fromDate: any;
   toDate: any;
   transactions: transactionList[];
   transactions3: transactionList[];
   isCustom: boolean;
   isTransaction: boolean;
   days: number;
   apiError: boolean;
   constructor(private transServ: TransactionListService) { }

   ngOnInit() {
      this.isTransaction = true;
      this.isCustom = false;
      this.getTransactionList();
      console.log(this.transactions3);
      this.apiError = false;
   }

   getTransactionList() {
      this.transServ.getData().subscribe((res: transactionList[]) => {
         this.transactions = res;
         this.transactions3 = res;
         console.log(res);
      }, (err) => {
         this.apiError = true;
      });

   }

   searchThirtyDay(days: number) {
      this.days = days;
      this.isCustom = false;
      this.isCustom = false;
      this.transactions = this.transactions3;
      const trasactions2 = Array<transactionList>();
      this.toDate = moment(new Date()).format('YYYY-MM-DD');
      this.fromDate = moment().subtract(days, 'd').format('YYYY-MM-DD');
      this.transactions.forEach((item) => {
         if (item.Date >= this.fromDate) {
            trasactions2.push(item);
         }
      });

      this.transactions = trasactions2;
      if (this.transactions.length === 0) {
         this.isTransaction = !this.isTransaction;
      }


   }

   customSearch() {

      this.transactions = this.transactions3;
      const trasactions2 = Array<transactionList>();
      this.fromDate = moment(new Date(this.fromDate)).format('YYYY-MM-DD');
      this.toDate = moment(new Date(this.toDate)).format('YYYY-MM-DD');
      this.loopDate;
      this.transactions.forEach((item) => {
         this.loopDate = moment(new Date(item.Date)).format('YYYY-MM-DD');
         if (this.loopDate >= this.fromDate && this.loopDate <= this.toDate) {
            trasactions2.push(item);
         }
      });
      this.transactions = trasactions2;
      if (this.transactions.length === 0) {
         this.isTransaction = !this.isTransaction;
      }
   }

   custom() {
      this.days = 0;
      this.transactions = this.transactions3;
      this.fromDate = '';
      this.toDate = '';
      this.isCustom = true;
   }
}
