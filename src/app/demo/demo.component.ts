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
  freezeConfirm: string;
  freezeNote: string;
  lostStolen: string;
  freezeCard: string;
  labels = constants.labels.freeze;
  displayLabel = false;
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
    this.displayOverlay = false;
    this.confirmVisible = true;
    this.confirmOverlay = false;
    this.checkboxStatus = false;
    this.openModal = true;
    this.isCardFreeze = false;
  }

  openNew() {
    this.displayOverlay = true;
    if (this.isCardFreeze === false) {
      this.freezeConfirm = this.labels.freezeConfirm;
      this.freezeNote = this.labels.freezeNote;
      this.lostStolen = this.labels.lostStolen;
      this.freezeCard = this.labels.freezeCard;
    }
    else if (this.isCardFreeze === true) {
      this.freezeConfirm = this.labels.unfreeze;
      this.freezeNote = this.labels.transactionEnabled;
      this.lostStolen = '';
      this.freezeCard = this.labels.unfreezeCard;
    }
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
    this.displayOverlay = false;
    this.displayLabel = true;
    this.isCardFreeze = value === 'freeze' ? true : false;
  }
  closeClick() {
    this.checkboxStatus = false;
    this.openModal = !this.openModal;
    this.displayOverlay = false;
  }
}
