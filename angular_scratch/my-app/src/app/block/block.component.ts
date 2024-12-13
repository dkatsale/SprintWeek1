import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  //logMessages: string[] = [];

  constructor(private logService: LogService) {}
  /*logMessage() {
    const message = 'Button clicked!';
    console.log(message);  // Log to browser console

    // Update log messages in the service
    this.logService.updateLogMessages(message);
  }*/

  ngOnInit() {
    // Subscribe to log messages from the service
    //this.logService.logMessages$.subscribe(messages => {
      //this.logMessages = messages;
    //});
  }

}
