import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

  // Method to handle login API call
  login(payload:any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>("https://bit-builder-backend.onrender.com/signin", payload);
  }
  logout(payload:any): Observable<any> {
    return this.http.post("https://bit-builder-backend.onrender.com/logout", payload);
  }
  signup(payload:any): Observable<any> {
    return this.http.post("https://bit-builder-backend.onrender.com/signup", payload);
  }
  passwordreset(payload: { email: string; new_password: string; answer: string }):Observable<any>{
    return this.http.post("https://bit-builder-backend.onrender.com/reset_password", payload);
  }

}
