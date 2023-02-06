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
    let regExEmail: string = "^[a-z]+@[a-z]+\\.[a-z]{2-3}$";
    let regExUser: string = "^[^\W\d][\w]+";
    let controls: any = {
      username: new FormControl("", 
      [ 
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(20), 
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
