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
  transactionsFirst: any[];
  transactionsSecond: any[];
  dummayArray = [];
  isValidSearch: boolean;
  sorttype:string="desc";

  constructor() { 
   
  }
 
  ngOnInit() {
   //this.getData();

    this.transactionsFirst =
      [{ Date: "20Nov2017", descripton: 'Installment ', Amount: -2000.00, Balance: "R13951.84" },
      { Date: "15Oct2017", descripton: "Purchasw ", Amount: 4800.00, Balance: "R13951.84" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: 3000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: 2000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Payment Recieved ", Amount: 1000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Payment Transfer ", Amount: 4000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "Account ", Amount: 45000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "tx first ", Amount: "R5000.00", Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "t x second ", Amount: 5000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "t2 second ", Amount: 6000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "12 x second ", Amount: 7000.00, Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "tx first ", Amount: "R10000.00", Balance: "R10751.00" },
      { Date: "02Nov2016", descripton: "tx first ", Amount: "3000.00", Balance: "R10751.00" },
      
      
      
    ];

      this.transactionsSecond = this.transactionsFirst;

  }

  updateResult() {
    this.dummayArray = [];
    if(this.searchText.length >=3  ){
    this.transactionsFirst.filter((item) => {

      if(item.descripton.toString().toLowerCase().indexOf(this.searchText) !== -1 ) {
        this.dummayArray.push(item);
      } else if(item.descripton.toString().indexOf(this.searchText) != -1) {
         this.dummayArray.push(item);
      }

      if(this.dummayArray.length) {
        this.transactionsSecond = this.dummayArray;
        this.transactionsSecond.sort((a:any,b:any) => {

          if(a.Amount <= b.Amount) return -1; 
          else if(a.Amount >= b.Amount) return 1;
          else return 0;
         
        });
      }
    });
  }
    else {
      this.transactionsSecond= this.transactionsFirst;
      
    }
  }

  sort(sortByType:string) {
    if(sortByType==='Amount')
      {
       
        if(this.sorttype==='asc')
          {
    this.transactionsSecond.sort((a:any,b:any): number => {
      if(a.Amount < b.Amount) return -1; 
      else if(a.Amount > b.Amount) return 1;
      else return 0;  
    });
    this.sorttype='desc';
  } else {
    this.transactionsSecond.sort((a:any,b:any): number => {
      if(a.Amount < b.Amount) return 1; 
      else if(a.Amount > b.Amount) return -1;
      else return 0;  
    });
    this.sorttype='asc';
  }
  }
  }
  }
    
  

 
 

