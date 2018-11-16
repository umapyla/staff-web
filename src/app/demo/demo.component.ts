import { Component, OnInit, ViewContainerRef } from '@angular/core';
// import { User } from '../models/User';
// import { Address } from '../models/address';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
 unfreezeFlag = false;
clicked= true;

  successFlag = false;
  private modalRef: NgbModalRef;
  firstModel= true;
  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  open(content) {
    this.modalRef = this.modalService.open(content);

  }


  openLg(content) {
    this.modalService.open(content);
  }

  onNextClick() {
    this.successFlag = true;

  }
  unFreezeClick() {
    this.unfreezeFlag = true;
  }
}
