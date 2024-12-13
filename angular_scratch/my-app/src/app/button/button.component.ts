import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { BlockComponent } from '../block/block.component';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private logService: LogService) { }

  logMessage() {
    const message = 'Button clicked!';
    console.log(message);  // Log to browser console

    // Update log messages in the service
    this.logService.updateLogMessages(message);
  }

  onClick() {
    alert('Button clicked');
    this.logMessage();
  }

  ngOnInit(): void {
  }

}
