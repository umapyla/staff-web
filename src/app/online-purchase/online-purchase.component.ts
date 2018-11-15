import { Component, Input } from '@angular/core';
import { Constant } from '../Constant';
@Component({
  selector: 'app-online-purchase',
  templateUrl: './online-purchase.component.html',
  styleUrls: ['./online-purchase.component.css']
})
export class OnlinePurchaseComponent {

  flag = false;
  message = Constant.Messages;
  messageHeader: string;
  messageBody: string;
  msg = '';
  deactivate = '';

  onSaveBtn() {
    this.msg = this.flag
      ? 'Online Purchases now Active'
      : 'Online Purchases now Deactivate';
  }
  onclick() {
    this.flag = !this.flag;
    this.messageHeader = this.flag
      ? this.message.activateMessagegHeader
      : this.message.deactivateMessagegHeader;
    this.messageBody = this.flag
      ? this.message.activeMessageBody
      : this.message.deactivateMessageBody;
  }
}
