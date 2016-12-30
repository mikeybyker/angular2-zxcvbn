import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  example: string = `<input type="password" name="password" strongPassword="3" [user_inputs]="dictionary">`;
  constructor() { }

  ngOnInit() {
  }

}
