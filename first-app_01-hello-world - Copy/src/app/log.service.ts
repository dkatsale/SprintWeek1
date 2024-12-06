import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logMessagesSource = new BehaviorSubject<string[]>([]);
  logMessages$ = this.logMessagesSource.asObservable();

  updateLogMessages(message: string) {
    const currentMessages = this.logMessagesSource.value;
    currentMessages.push(message);

    // Limit to 5 messages
    if (currentMessages.length > 5) {
      currentMessages.shift();
    }

    this.logMessagesSource.next(currentMessages);
  }
}
