import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { TranscationdetailService } from '../transcationdetail.service';
import { transactionDetail } from './transaction.model';

@Component({
  selector: 'app-transcation-listing',
  templateUrl: './transcation-listing.component.html',
  styleUrls: ['./transcation-listing.component.css']
})
export class TranscationListingComponent implements OnInit {
    transactions: Array<transactionDetail>;
    transactions3: Array<any>;
    listlength: Number;
    minIndex:number;
    maxIndex:number;
    error: boolean;
    isviewMore:boolean;
    myValue = 0;
  
  constructor(private transcationService: TranscationdetailService) { }

  ngOnInit() {
    this.minIndex=0;
    this.transactions3=[];
   this.getData();
   this.error = false;
   //this.listlength = 5;
   this.isviewMore= true;
  }

getData(){
    this.transcationService.getData().subscribe(res=>{
      this.transactions = res.json();
      this.viewMoretranscations();
     //this.transactions3 = res.json();
  },(err: Error) => {
    
      console.log (err);    
       this.error = true;
  });
  
}
viewMoretranscations(){

  this.minIndex=this.minIndex+5;
  this.maxIndex=this.minIndex+5;
  
if(this.maxIndex>this.transactions.length)
  {
    this.isviewMore = false;
    console.log("hide transactions");
  } else {
 let pushValues:any=this.transactions.slice( this.minIndex, this.maxIndex);
 pushValues.forEach((item)=>{
  this.transactions3.push(item);
 });

 this.transactions3.forEach((transaction) => {
   if(transaction.Amount.indexOf("-") != -1) {
      transaction.newValue = 'negative';
   } else {
     transaction.newValue = 'positive';
   }
 })
}
 //console.log(pushValues);
 console.log(this.transactions3);
 }

}
