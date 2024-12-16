import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { BehaviorSubject } from 'rxjs';
import { SharedStateService } from '../shared-state.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { getPositionOfLineAndCharacter } from 'typescript';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})

export class BlockComponent implements OnInit {

  //logMessages: string[] = [];

  searchQuery: string = '';
 

  
  constructor(private apiService: ApiService, private sharedStateService: SharedStateService) {


  }

  
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
  sendPostRequest() {
    const postData = this.searchQuery;
    this.apiService.postMessage(postData).subscribe({
      next: (response) => {
        console.log("POST request successful", response);

      },
      error: (error) => {
        console.error("Error during POST request", error);

      },
    });
  }

  onClick() {
    //alert('Button clicked');

    //this.subject.next();
    this.sharedStateService.updateSearchQuery(this.searchQuery);
    this.sendPostRequest();
  }

  



}
