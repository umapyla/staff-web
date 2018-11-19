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
  address: any;
  showBankerDetails: boolean;
  clientName: string;
  mailLink: string;
  bankerEmail: string;
  telephoneNumber: string;
  bankerName: string;
  firstName: string;
  surName: string;
  // bankerImage: string;
  // bankerImageUrl: string;
  // imageAvailable: boolean;

  constructor(private viewBankerService: ViewBankerService) {}

  ngOnInit() {
    this.showBankerDetails = false;
    // this.imageAvailable = false;
    this.mailLink = 'mailto:';
    this.getData();
    // this.bankerImage = this.getImage(this.bankerImageUrl);
  }

  getData() {
    this.viewBankerService.getData().subscribe(
      res => {
        this.bankersInfo = res.json();
        this.clientsInfo = res.json();
        this.clientName = this.clientsInfo[0].FullNames;
        this.firstName = this.clientsInfo[0].FirstName;
        this.surName = this.clientsInfo[0].Surname;
        // this.bankerImageUrl = this.bankersInfo[2].bankerPicture;
        console.log(res);
      },
      (err: Error) => {
        console.log(err.message);
      }
    );
  }

  getInitials(firstName: string, lastName: string) {
    let initials: string;
    initials = firstName.charAt(0) + lastName.charAt(0);
    return initials;
  }

  // getImage(bankerImageUrl: string) {
  //   let bankerUrl: string;
  //   bankerUrl = 'data:image/jpeg;base64,' + this.bankerImageUrl;
  //   this.imageAvailable = true;
  //   return bankerUrl;
  // }

  showDetails() {
    this.showBankerDetails = true;
  }

  hideDetails() {
    this.showBankerDetails = false;
  }
}
