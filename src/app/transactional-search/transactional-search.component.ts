import { Component, OnInit } from '@angular/core';
import { TransactionSearchService } from '../transaction-search.service';
import { ITransactionDetail } from './transaction.model';
import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transactional-search',
  templateUrl: './transactional-search.component.html',
  styleUrls: ['./transactional-search.component.css']
})
export class TransactionalSearchComponent implements OnInit {

  searchText: any;
  transactions: Array<ITransactionDetail>;
  transactionsSecond: any[];
  dummayArray = [];
  isValidSearch: boolean;
  sorttype: string;
  errorMsg: boolean;

  constructor(private transactionService: TransactionSearchService) {
    this.errorMsg = false;
  }

  ngOnInit() {
    this.getData();
    this.sorttype = 'desc';
  }

  getData() {
    this.transactionService.getData().subscribe((res: ITransactionDetail[]) => {
      this.transactions = res;
      this.transactionsSecond = res;
    }, (error) => {
      console.log(error);
      this.errorMsg = true;
    });
  }

  updateResult() {
    this.dummayArray = [];
    if (this.searchText.length >= 3) {
      this.transactions.filter((item) => {

        if (item.Description.toString().toLowerCase().indexOf(this.searchText) !== -1 ||
          item.Amount.toString().indexOf(this.searchText) !== -1) {
          this.dummayArray.push(item);
        } else if (item.Description.toString().indexOf(this.searchText) !== -1) {
          this.dummayArray.push(item);

        }

        if (this.dummayArray.length) {
          this.transactions = this.dummayArray;
        }
      });
    } else {
      this.transactions = this.transactionsSecond;

    }
  }


  sortData(sortByType: string) {
    if (sortByType === 'Amount') {
      if (this.sorttype === 'asc') {
        this.transactions.sort((a, b) => {
          if (a.Amount > b.Amount) {
            return -1;
          } else if (a.Amount < b.Amount) {
            return 1;
          }
        });
        this.sorttype = 'desc';
      } else {
        this.transactions.sort((a, b) => {
          if (a.Amount > b.Amount) {
            return 1;
          } else if (a.Amount < b.Amount) {
            return -1;
          }
        });
        this.sorttype = 'asc';
      }
    }
  }

}






