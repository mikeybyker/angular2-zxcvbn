import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import * as zxcvbn from 'zxcvbn';

@Component({
  selector: 'strength-meter',
  templateUrl: './strength-meter.component.html',
  styleUrls: ['./strength-meter.component.css']
})
export class StrengthMeterComponent implements OnInit, OnChanges {

  @Input()
  password: string = '';

  @Output('strength')
  passwordStrength = new EventEmitter();

  strength: number = 0;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['password'];
    if (change) {
      this.getStrength(change.currentValue);
    }
  }

  getStrength(password) {
    const estimation = zxcvbn(password || '');
    this.strength = estimation.score;
    this.passwordStrength.emit({
      strength: this.strength
    });
  }

  getClass() {
    return `level-${this.strength}`;
  }

}
