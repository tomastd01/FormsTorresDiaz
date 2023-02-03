import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm: FormGroup;

  constructor() {
    let controls: any = {
      email: new FormControl("", []),
      password: new FormControl("", []),
      rememberCredentials: new FormControl(false, [])
    }

    this.loginForm = new FormGroup(controls)
  }

  login() {
    console.log(this.loginForm);
  }
}
