import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public searchQuery$ = this.searchQuerySubject.asObservable();
  constructor() { }

  updateSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

}
