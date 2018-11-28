import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { TxDetails, IShowDetails } from './transactiondetails.model';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.scss']
})
export class TransactiondetailsComponent implements OnInit {
  transactionDetails: TxDetails[];
  showData: IShowDetails[];
  isDisplay: boolean;
  selectedIndex: number;
  transaction_list: IShowDetails[];
  displayMoreDetail: any[] = [];
  errorMsg: string;
  constructor(private dataservice: DataService) { }
  ngOnInit() {
    this.getData();
    this.transactionDetails.forEach((data, index) => {
      this.displayMoreDetail[data.id] = true;
    });
  }
  getData() {
    this.dataservice.getData().subscribe((response: TxDetails[]) => {
      this.transactionDetails = response;
    }
      , (error) => {
        this.errorMsg = 'Error Occurred';
      });
  }
  moreDetails(transactionId: number, transaction_list: IShowDetails[]) {
    this.showData = [];
    this.transactionDetails.forEach((currentTransaction, index) => {
      if (transactionId === currentTransaction.id) {
        this.showData = transaction_list;
        this.displayMoreDetail[currentTransaction.id] = this.displayMoreDetail[currentTransaction.id] ? false : true;
      } else {
        this.displayMoreDetail[currentTransaction.id] = false;
      }
    });

  }

}
