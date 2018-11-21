import { Component, OnInit} from '@angular/core';
import { transactionList } from './transaction.model';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Array<transactionList>;
  isDateWise: boolean;

  constructor() { }

  ngOnInit() {
    this.isDateWise = false;
  }
 dateWiseSearch() {
   this.isDateWise = true;
 }
}
