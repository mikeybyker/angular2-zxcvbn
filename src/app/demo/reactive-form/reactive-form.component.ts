import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms';

import { StrongPasswordValidator } from '../../strong-password';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  register: FormGroup;    // the form
  valFn: ValidatorFn;     // the validation function

  user_inputs: string[] = ['foobar', 'barfoo'];
  level = '4';

  submitted = false;

  master = { name: 'Mike', password: 'password123', strength: 0 };
  user = { name: '', password: '', strength: 0 };

  constructor(private fb: FormBuilder) {
    this.valFn = StrongPasswordValidator(this.level, this.user_inputs);
  }

  ngOnInit() {
    this.register = this.fb.group({
      password: [this.user.password, [Validators.required, this.valFn]]
    });
    this.reset();
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid);
    this.user.password = value.password;
    this.submitted = true;
  }

  // Current password strength emitted from the strength-meter: Can't think of a practical use!
  onStrength({strength}) {
    // console.info({ strength });
    this.user.strength = strength;
  }

  reset() {
    this.user = Object.assign({}, this.master);
    this.submitted = false;
    this.register.patchValue({ password: this.user.password });
  }

}
