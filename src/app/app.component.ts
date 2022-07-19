import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  showText = false;
  log = [];

  onToggleDetails() {
    this.showText = !this.showText;
    this.log.push(this.log.length + 1, new Date());
  }
}
