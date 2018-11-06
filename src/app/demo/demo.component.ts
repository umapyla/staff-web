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
  failMsg: boolean;
  successFlag = false;
  private modalRef: NgbModalRef;
  toggleButtonCondtion = false;
  firstModel= true;
  secondModel= false;
  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
  }


  // tslint:disable-next-line:member-ordering
  closeResult: string;

  open(content) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onNextClick() {
    this.successFlag = true;

  }
  unFreezeClick() {
    this.unfreezeFlag = true;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  onclick() {
    if (this.clicked) {
      this.clicked = false;
    }else {
      this.clicked = true;
    }
  }
}
