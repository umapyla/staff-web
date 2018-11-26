import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { constants } from '../constants';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
checkboxStatus: boolean;
  confirmOverlay: boolean;
  confirmVisible: boolean;
  displayOverlay: boolean;
  isCardFreeze: boolean;
  private modalRef: NgbModalRef;
  openModal: boolean;
  labels = constants.labels.freeze;
  displayLabel= false;
  constructor(private modalService: NgbModal) {}
  ngOnInit() {
    this.displayOverlay = false;
    this.confirmVisible = true;
    this.confirmOverlay = false;
    this.checkboxStatus = false;
    this.openModal = true;
  }

  openNew() {
    this.displayOverlay = true;
    this.labels.freezeConfirm = this.openModal ? this.labels.freezeConfirm : this.labels.unfreeze;
    this.labels.freezeNote = this.openModal ? this.labels.freezeNote : this.labels.transactionEnabled;
    this.labels.lostStolen = this.openModal ? this.labels.lostStolen : '';
    this.labels.freezeCard =  this.openModal && !this.isCardFreeze ? this.labels.freezeCard : this.labels.unfreezeCard;
  }
  open(content) {
     this.modalRef = this.modalService.open(content);
    this.displayLabel = false;
    this.displayOverlay = true;
  }

  openLg(content) {
    this.modalService.open(content);
  }
  onNextClick(value: string) {
    // this.checkboxStatus = !this.checkboxStatus;
    this.displayOverlay = false;
    this.displayLabel = true;
    this.isCardFreeze = value === 'freeze' ? true : false;
    console.log('isCardFreeze' + this.isCardFreeze);
  }
  closeClick() {
    this.checkboxStatus = false;
    this.openModal = !this.openModal;
    this.displayOverlay = false;
  }
}
