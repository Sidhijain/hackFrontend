import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public errorMessage(control: AbstractControl, fieldName: string, errorList: any): string {
    const message = errorList[fieldName];
    if (control.touched && (control.hasError('required') || !control.value)) {
      return message.required || `Please Enter ${fieldName}`;
    } else if (control.hasError('pattern')) {
      return message.pattern || `Invalid ${fieldName}`;
    } else if (control.hasError('maxlength')) {
      return message.maxLength || `Length error`;
    } else if (control.hasError('max')) {
      return message.max || `Max error`;
    }
    else {
      return '';
    }
  }
}

