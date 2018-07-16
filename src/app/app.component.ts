import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numbers : {number}[] = [];

  ngOnInit() {
    for (var i = 0; i <= 50000; i++) {
      this.numbers.push({ number: i});
    }
  }
}