import { ViewBankerService } from './../view-banker.service';
import { IBankerInfo, IClientInfo } from './view-banker.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-banker',
  templateUrl: './view-banker.component.html',
  styleUrls: ['./view-banker.component.css']
})
export class ViewBankerComponent implements OnInit {
  bankersInfo: Array<IBankerInfo>;
  clientsInfo: Array<IClientInfo>;
  showBankerDetails: boolean;
  clientName: string;
  mailLink: string;
  bankerEmail: string;
  telephoneNumber: string;
  bankerName: string;
  firstName: string;
  surName: string;

  constructor(private viewBankerService: ViewBankerService) {}

  ngOnInit() {
    this.showBankerDetails = false;
    this.mailLink = 'mailto:';
    this.getData();
  }

  getData() {
    this.viewBankerService.getData().subscribe(
      res => {
        this.bankersInfo = res.json();
        this.clientsInfo = res.json();
        this.clientName = this.clientsInfo[0].FullNames;
        this.firstName = this.clientsInfo[0].FirstName;
        this.surName = this.clientsInfo[0].Surname;
        console.log(res);
      },
      (err: Error) => {}
    );
  }

  getInitials(firstName: string, lastName: string) {
    return firstName.charAt(0) + lastName.charAt(0);
  }

  showDetails() {
    this.showBankerDetails = true;
  }

  hideDetails() {
    this.showBankerDetails = false;
  }
}
