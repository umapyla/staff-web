import { Component, OnInit, Input, TemplateRef, Inject } from '@angular/core';
import { DOCUMENT } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
@Input() isVisible: boolean;
@Input()  alternate = false;
@Input() template: TemplateRef<any>;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

}
