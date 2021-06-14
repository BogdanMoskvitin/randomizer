import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  names = [];

  add(name){
    this.names.push(name);
  }

  lastNumber = 0;
  randomName;

  getRandom() {
    let min = 1;
    let max = this.names.length;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber != this.lastNumber) {
      this.randomName = this.names[randomNumber - 1];
      this.lastNumber = randomNumber;
    } else {
      this.getRandom();
    }
  }
}