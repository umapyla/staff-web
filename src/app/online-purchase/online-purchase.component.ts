import { Component, Input } from '@angular/core';
import { Constant } from '../Constant';
@Component({
  selector: 'app-online-purchase',
  templateUrl: './online-purchase.component.html',
  styleUrls: ['./online-purchase.component.css']
})
export class OnlinePurchaseComponent {

  flag: Boolean = false;
  message = Constant.Messages;
  messageHeader: string;
  messageBody: string;
  // tslint:disable-next-line:no-inferrable-types
  msg: string = '';
  activate: string  = Constant.Messages.activateMessage;
  deactivate: string = Constant.Messages.deactivateMessage;

  onSaveBtn() {
      this.msg = this.flag
      ? this.activate : this.deactivate;
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
