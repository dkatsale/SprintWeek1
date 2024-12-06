import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {LogService} from '../log.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button" (click)="logMessage()">Click me to log message</button>
        
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private logService: LogService) {}

  logMessage() {
    const message = 'Button clicked!';
    console.log(message);  // Log to browser console

    // Update log messages in the service
    this.logService.updateLogMessages(message);
  }
}