import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  dictionary: string[] = ['foo', 'bar'];
  submitted = false;

  master = { name: 'Mike', password: 'qwerty', strength: 0 };
  user = { name: '', password: '', strength: 0 };

  constructor() {
    this.reset();
  }

  onSubmit({ value }) {
    console.log({ value });
    this.user.password = value.password;
    this.submitted = true;
  }

  ngOnInit() {
  }

  // Current password strength emitted from the strength-meter: Can't think of a practical use!
  onStrength({strength}) {
    // console.info({ strength });
    this.user.strength = strength;
  }

  reset() {
    this.user = Object.assign({}, this.master);
    this.submitted = false;
  }

}
