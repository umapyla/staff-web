import { Component, OnInit } from '@angular/core';
import { transactionList } from './transaction.model';
import { TransactionListService } from '../transaction-list.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Array<transactionList>;
  isDateWise: boolean;
  constructor(private transServ: TransactionListService) { }

  ngOnInit() {
    this.isDateWise = false;
    this.getTransactionList();
  }
 dateWiseSearch() {
   this.isDateWise = true;
 }
 getTransactionList(){
  this.transServ.getData().subscribe(res=> {
    this.transactions = res.json();
    console.log(res);
   });
  
}

}
