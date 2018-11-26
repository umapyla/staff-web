import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild('userForm') newForm: NgForm;
  isFormValid(): boolean {
    return this.newForm.invalid;
  }
  onSubmit(value: any) {
    if (!this.isFormValid()) {
      console.log(value);
    }
  }

}
