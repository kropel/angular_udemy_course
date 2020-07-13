import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      .whiteColor {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showPassword = false;
  now = Date.now();
  timeBetwinClicks = [];
  onClickHandler() {
    let now = Date.now();
    this.timeBetwinClicks.push((now - this.now) / 1000);
    this.now = now;
    this.showPassword = !this.showPassword;
  }
  isIndexGreater(index, num) {
    return index > num;
  }
}
