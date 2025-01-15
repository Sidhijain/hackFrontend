import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://your-api'; // Base URL of your API
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

  // Method to handle login API call
  login(payload:any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, payload);
  }
}
