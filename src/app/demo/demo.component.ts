import { Component, OnInit, ViewContainerRef } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { constants } from "../constants";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  public isCardFreeze: boolean;
  clicked = true;
  private modalRef: NgbModalRef;
  labels = constants.labels.freeze;
  public isNewFreeze: boolean;
  displayLabel = false;
  isOpen: boolean;
  openModal: true;
  constructor(private modalService: NgbModal) {}
  ngOnInit() {}

  openNew() {
    this.labels.freezeConfirm = this.openModal ? this.labels.freezeConfirm : this.labels.unfreeze;
    this.labels.freezeNote = this.openModal ? this.labels.freezeNote  : this.labels.transactionEnabled;
    this.labels.lostStolen = this.openModal ? this.labels.lostStolen : '';
    this.labels.freezeCard = this.openModal && !this.isCardFreeze ? this.labels.freezeCard : this.labels.unfreezeCard;
  }
  open(content, value: string) {
    this.displayLabel = false;
    this.modalRef = this.modalService.open(content);
  }
  openLg(content) {
    this.modalService.open(content);
  }
  onNextClick(value: string) {
    this.displayLabel = true;
    this.isCardFreeze = value === this.labels.freeze ? true : false;
  }
}
