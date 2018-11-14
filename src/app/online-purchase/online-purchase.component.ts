import { Component, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Constant } from '../Constant';
@Component({
  selector: 'app-online-purchase',
  templateUrl: './online-purchase.component.html',
  styleUrls: ['./online-purchase.component.css']
})
export class OnlinePurchaseComponent  {
  labelforActivateMsgHeader = Constant.Messages.activateMsgHeader;
  labelforActiveMsgBody = Constant.Messages.activateMsgBody;
  labelfoDeactivateMsgHeader = Constant.Messages.deactivateMsgHeader;
  labelforDeactivateMsgBody = Constant.Messages.deactivateMsgBody;
  labelFlag = Constant.Messages.flag;
   msg = '';

  onSaveBtn() {
    this.msg = this.labelFlag ? 'Online Purchases now Active' : 'Online Purchases now Deactivate';
  }
  onclick() {
    this.labelFlag = !this.labelFlag;
  }
}
