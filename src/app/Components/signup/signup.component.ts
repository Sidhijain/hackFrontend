import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { PopupService } from '../../Services/popup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 constructor(private loginService:LoginService,private popupService:PopupService){}
 formData = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  answer: '',
};

errorMessages: any = {};
signUp(): void {
  this.loginService.signup(this.formData).subscribe(
    (response: any) => {
      if (response.status_code === 200) {
        console.log('Sign-up successful:', response.message);
      } else if (response.status_code === 400) {
        console.error('Sign-up failed:', response.message);
        this.popupService.showPopup(response.message, 'failure');
      }
    },
    (error: any) => {
      console.error('Error during sign-up:', error);
      this.popupService.showPopup('Error during sign-up:', 'failure');
    }
  );
}
}
