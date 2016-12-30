import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'password-feedback',
  templateUrl: './password-feedback.component.html',
  styleUrls: ['./password-feedback.component.css']
})
export class PasswordFeedbackComponent implements OnInit {

  @Input()
  feedback = {};


  constructor() { }

  ngOnInit() {

  }

}
