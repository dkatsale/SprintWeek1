import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { BlockComponent } from '../block/block.component';
@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {

  constructor() { }
  message = "";
  logMessage() {
    this.message = 'Button clicked!';
    console.log(this.message);  // Log to browser console

    // Update log messages in the service
    //this.logService.updateLogMessages(message);
  }

  onClick() {
    //alert('Button clicked');
    this.logMessage();
  }

  ngOnInit(): void {
  }

}
