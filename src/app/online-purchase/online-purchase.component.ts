import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-online-purchase',
  templateUrl: './online-purchase.component.html',
  styleUrls: ['./online-purchase.component.css']
})
export class OnlinePurchaseComponent  {
  activateMsgBody = 'you will be able to pay online with your card.';
  activateMsgHeader = 'Activate online Service.?';
  DeactivateMsgHeader = 'Deactivate online purchases?';
  DeactivateMsgBody = 'you wont be able to pay online with your card.'  ;

  status = 'true';
  flag = true;
  @Input() Msg = '';

  onClickActivateOnlinePurchaseBtn() {
    this.Msg = 'Online Purchases now Active';
  }
  onClickDeactivateOnlinePurchaseBtn() {
    this.Msg = 'Online Purchases now Deactivate';
  }
  constructor() {
  }
}
