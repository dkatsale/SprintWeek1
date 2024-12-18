import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api'; // Spring Boot backend URL

  constructor(private http: HttpClient) {}

  getMessage(endpoint: string): Observable<string> {
    const headers = { 'Content-Type': 'text/plain' };
    return this.http.get<string>(`${this.apiUrl}/${endpoint}`, { headers, responseType: 'text' as 'json'});
  }
  postMessage(angular: string): Observable<string> {
    const headers = { 'Content-Type': 'text/plain' };
    return this.http.post<string>(`${this.apiUrl}/greet`, angular, { headers , responseType: 'text' as 'json'});
  }
}
