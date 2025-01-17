import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { PopupService } from '../../Services/popup.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent {
  constructor(private loginService:LoginService,private popupService:PopupService){}
  formData = {
    email: '',
    new_password: '', 
    answer: '',
  };
  resetPassword(): void{
    this.loginService.passwordreset(this.formData).subscribe(
      (response: any) => {
        if (response.status_code === 200) {
          console.log('Password reset successful:', response.message);
        } else {
          this.popupService.showPopup(response.message, 'failure');
        }
      },
      (error: any) => {
        this.popupService.showPopup('Error during sign-up:', 'failure');
      }
    );
  }
  }


