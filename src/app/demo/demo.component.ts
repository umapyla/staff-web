import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { constants } from '../constants';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public isCardFreeze: boolean;
  clicked = true;
  private modalRef: NgbModalRef;
  openModal = true;
  labels = constants.labels.freeze;
  displayLabel = false;
  constructor(private modalService: NgbModal) {}
  ngOnInit() {}

  open(content) {
    this.displayLabel = true;
    this.modalRef = this.modalService.open(content);
  }

  openLg(content) {
    this.modalService.open(content);
  }

  onNextClick(value: string) {
    this.isCardFreeze = value === this.labels.freeze ? true : false;
  }
}
