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
  AccountData: any[];
  transaction_list: any[];
  displayMoreDetail: any[] = [];
  message= 'Error Occured';
  error: boolean;
  errorMsg: string;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getData();
    this.transactionDetails.forEach((data, index) => {
      this.displayMoreDetail[data.id] = true;
  });

  }

  getData(): void {
    this.dataservice.getData().subscribe((response: TxDetails[]) => {
     this.transactionDetails = response;
     console.log(this.transactionDetails); }
     , (error) => {
      this.errorMsg = 'Error Occurred';

    });
  }


    moreDetails(txId: number, transaction_list: any) {
    this.showData = [];
    this.transactionDetails.forEach((currentTransaction, index) => {
      if (txId === currentTransaction.id) {

        this.showData = transaction_list;
        this.displayMoreDetail[currentTransaction.id] = this.displayMoreDetail[currentTransaction.id] ? false : true;
      }else {
        this.displayMoreDetail[currentTransaction.id] = false;
      }
    });

  }

}
