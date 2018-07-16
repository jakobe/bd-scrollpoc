import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers : { title:string, number:number}[] = [];

  ngOnInit() {
    const activities = ['DK Sushishoppen', 'DK Din tankstation', 'Til mormor', 'Biografen', 'TV-butikken', 'Overført fra mor', 'Tøjbutikken', 'Stormagasinet A/S'];
    let activitiesCopy = [...activities];
    for (var i = 0; i <= 50000; i++) {
      const activity = activitiesCopy[Math.floor(Math.random() * activitiesCopy.length)];
      this.numbers.push({ title: activity, number: i});
    }
  }
}