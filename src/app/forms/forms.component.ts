import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../d.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  loginForm: FormGroup;
  s;

  constructor(
    private fb: FormBuilder,
    private ds: DataService) {
  }



  ngOnInit() {
    console.log('from display', (this.ds.updateForm()));
    this.s = this.ds.updateForm();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.loginForm.setValue(this.s);
  }

  get fc() {
    return this.loginForm.controls;
  }
  OnSubmit(): void {
    this.ds.pushData(this.loginForm.value);
  }

}

