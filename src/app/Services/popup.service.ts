import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  private popupSubject = new Subject<{ message: string; type: 'success' | 'failure' }>();
  popupState$ = this.popupSubject.asObservable();

  showPopup(message: string, type: 'success' | 'failure') {
    this.popupSubject.next({ message, type });
  }
}
