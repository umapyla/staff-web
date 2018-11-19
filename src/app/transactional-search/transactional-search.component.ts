import { Component, OnInit } from '@angular/core';
// import { TransactionSearchService } from "../transaction-search.service";
// import { TransactionDetail } from "./transaction.model";
import { Response, Http } from '@angular/http';

@Component({
  selector: 'app-transactional-search',
  templateUrl: './transactional-search.component.html',
  styleUrls: ['./transactional-search.component.css']
})
export class TransactionalSearchComponent implements OnInit {

  searchText: any;
  //  transactions : Array<TransactionDetail>
  transactions1: any[];
  transactions2: any[];
  dummayArray = [];

  constructor() { }
 
  ngOnInit() {
    // this.getData();

    this.transactions1 =
      [{ Date: "20Nov2017", descripton: 'Installment ', Amount: "-R2000.00", Balance: "R13951.84" },
      { Date: "15Oct2017", descripton: "Purchasw ", Amount: "R4800.00", Balance: "R13951.84" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: "R4000.00", Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: "R4000.00", Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: "R4000.00", Balance: "R10751.00" }];

      this.transactions2 = this.transactions1;

  }

  onClear() {
     this.searchText = '';
     this.transactions2 = this.transactions1;
  }

  // updateResult() {
  //   this.dummayArray = [];
  //   if(this.searchText.length >=3){
  //   this.transactions1.forEach((item) => {
  //     if(item.descripton.indexOf(this.searchText) !== -1 ) {
  //       this.dummayArray.push(item);
  //     } 
    
  //   });

  //   if(this.dummayArray.length) {
  //     this.transactions2 = this.dummayArray;
  //   }
  // } else {
  //   this.transactions2= this.transactions1;
  // }
  // }

  updateResult() {
    this.dummayArray = [];
    if(this.searchText.length >=3  ){
    this.transactions1.filter((item) => {
      if(item.descripton.toString().toLowerCase().indexOf(this.searchText) !== -1 ) {
        this.dummayArray.push(item);
      } 
    
    });

    if(this.dummayArray.length) {
      this.transactions2 = this.dummayArray;
    }
  } else {
    this.transactions2= this.transactions1;
  }
  }






  // getData() {
  //   this.transactionSearchService.getData().subscribe(resp=> {
  //     this.transactions = resp.json();
  //     console.log(this.transactions);
  //   })
  // }
 
}
