import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCounter += 1;
  }

  setClasses () {
    let myClasses = {
      active: this.clickCounter > 5,
      notActive : this.clickCounter <= 5
    };
    return myClasses;
  }

}
