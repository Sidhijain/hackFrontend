import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { LoginService } from '../../Services/login.service';
import { PopupService } from '../../Services/popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService,private loginService:LoginService,private popupService:PopupService){}
  login() {
   
      const payload = {
      email: this.email,
      password: this.password
    };
    console.log(this.email)
    this.loginService.login(payload).subscribe({
      next: (response: any) => {
        if (response.status_code === 200 && response.status === 'success') {
          const token = response.data.token;
          this.authService.saveToken(token,this.email); 
          console.log('Login successful:', response.message);
        } else {
          console.error('Unexpected response:', response);
          this.popupService.showPopup('Login Failed', 'failure');
        }
      },
      error: (error: any) => {
        console.error('Login failed', error);
        this.popupService.showPopup('Login Failed', 'failure');
      },
    });
  }
   logout()
   {
    const payload={
      email:localStorage.getItem(this.email)
    }
    this.loginService.logout(payload).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          console.log('Logout successful:', response.message);
          this.authService.clearLocalStorage(); 
        } else {
          console.error('Logout failed:', response.message);
        }
      },
      (error: any) => {
        console.error('Error during logout:', error);
      }
    );

    
   }
}
