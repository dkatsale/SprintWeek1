import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-block',
  imports: [CommonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})

export class BlockComponent implements OnInit {
  logMessages: string[] = [];

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to log messages from the service
    this.logService.logMessages$.subscribe(messages => {
      this.logMessages = messages;
    });
  }
}
