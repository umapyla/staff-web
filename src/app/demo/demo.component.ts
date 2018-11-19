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
  openModel = true;
  labels = constants.labels.freeze;
  displayLabel: boolean = false;
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
    if (value === "freeze") {
      this.isCardFreeze = true;
    } else if (value === "unfreeze") {
      this.isCardFreeze = false;
    }
  }
}
