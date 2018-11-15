import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { TxDetails } from './transactiondetails.model';
import { Response, Http } from '@angular/http';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.scss']
})
export class TransactiondetailsComponent implements OnInit {
  transactionDetails:Array<TxDetails>;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getData();

  }

  getData():void{
    this.dataservice.getData().subscribe(response=>{
     this.transactionDetails = response.json();
     console.log(this.transactionDetails);
    });

  }

}
