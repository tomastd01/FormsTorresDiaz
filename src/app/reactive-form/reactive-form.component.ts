import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm: FormGroup;

  constructor() {
    let regExEmail: RegExp = /\S+@\S+\.\S+/;
    let regExUser: RegExp = /^[a-zA-Z]+[a-zA-Z0-9]+/;

    let controls: any = {
      username: new FormControl("", 
      [ 
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern(regExUser)
      ]),
      email: new FormControl("", [Validators.required, Validators.pattern(regExEmail)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      rememberCredentials: new FormControl(false, [])
    }

    this.loginForm = new FormGroup(controls)
  }

  login() {
    console.log(this.loginForm);
  }
}
