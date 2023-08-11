import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-app.html',
  styleUrls: ['./my-app.css'],
})
export class App {
  now: any;

  seconds: any;
  mins: any;
  hour: any;

  secondsDegrees: any;
  minsDegrees: any;
  hourDegrees: any;

  minsHand_style: any;
  hourHand_style: any;
  secondHand_style: any;

  setTime() {
    this.now = new Date();

    this.seconds = this.now.getSeconds();
    this.mins = this.now.getMinutes();
    this.hour = this.now.getHours();

    this.secondsDegrees = (this.seconds / 60) * 360 + 90;
    this.minsDegrees = (this.mins / 60) * 360 + (this.seconds / 60) * 6 + 90;
    this.hourDegrees = (this.hour / 12) * 360 + (this.mins / 60) * 30 + 90;

    this.minsHand_style = `transform: rotate(${this.minsDegrees}deg)`;
    this.hourHand_style = `transform: rotate(${this.hourDegrees}deg)`;
    this.secondHand_style = `transform: rotate(${this.secondsDegrees}deg)`;
  }

  constructor() {
    interval(1000).subscribe(() => {
      console.log('timer set');
      this.setTime();
    });
  }
}

bootstrapApplication(App);
