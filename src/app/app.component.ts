import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fphch0401';

  shouldShow = true;
  score = 60;
  color: string;
  isBordered = true;
  fontsize: string;
  classObj = {
    bordered: this.isBordered,
    blue: false,
    round: true
  }
  cities = ['杭州', '上海', '南京', '无锡'];
  people = [];
  peopleByCity = [];

  constructor() {
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' }
    ];
    this.peopleByCity = [
       {
        city: 'Miami',
        people: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 }
        ]
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 }
        ]
      }
    ];
  }
  onToggle() {
    this.shouldShow = !this.shouldShow;
    return false;
  }
  grade() {
    return Math.floor(this.score / 10);
  }
  onInput(evt: Event) {
    const inputEle = <HTMLInputElement>evt.target;
    this.score = Number(inputEle.value);

  }
  toggleBorder() {
    this.isBordered = !this.isBordered;

  }
  apply(color: string, fontsize: string) {
    this.color = color;
    this.fontsize = fontsize;
  }
}
