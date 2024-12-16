import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient, private apiService: ApiService){}
  ngOnInit() {
    this.apiService.getMessage().subscribe(
      (response) => {
        console.log('Response from backend:', response);

      },
      (error) => {
        console.error('Error calling backend:', error);
      }

    );
  }
}
