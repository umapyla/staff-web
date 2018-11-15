import { Component, OnInit } from '@angular/core';
import { TransactionSearchService } from "../transaction-search.service";
import { TransactionDetail } from "./transaction.model";

@Component({
  selector: 'app-transactional-search',
  templateUrl: './transactional-search.component.html',
  styleUrls: ['./transactional-search.component.css']
})
export class TransactionalSearchComponent implements OnInit {

  search: string;
 transactions : Array<TransactionDetail>

  constructor(private transactionSearchService:TransactionSearchService) { }

  ngOnInit() {
    this.getData();
  }

  onClick(){
   this.search = '';
  }

  getData() {
    this.transactionSearchService.getData().subscribe(resp => {
      this.transactions = resp.json();
    })
  }

}
