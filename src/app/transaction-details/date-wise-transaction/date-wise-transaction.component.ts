import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-wise-transaction',
  templateUrl: './date-wise-transaction.component.html',
  styleUrls: ['./date-wise-transaction.component.scss']
})
export class DateWiseTransectioComponent implements OnInit {
   fromDate: any;
   toDate: any;
  constructor() { }

  ngOnInit() {
    this.toDate = moment(new Date()).format('YYYY-MM-DD');
    this.fromDate = moment().subtract(30,'d').format('YYYY-MM-DD');
    console.log(this.toDate)
    console.log(this.fromDate);
  }
getTransectionHistory(){
  
} 

}
