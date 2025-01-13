import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {
  
  constructor(private http: HttpClient) { }
  private url="https://bit-builder-backend.onrender.com/get"
   getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
