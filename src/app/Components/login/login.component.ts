import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { LoginService } from '../../Services/login.service';
import { PopupService } from '../../Services/popup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  storedEmail:any;
  constructor(private authService: AuthService,private loginService:LoginService,private popupService:PopupService,private router:Router){}
  ngOnInit(): void {
    // Optional: Fetch email on component load
    this.storedEmail = localStorage.getItem('email');
    console.log(this.storedEmail);
  }
 startLogoutTimer() {
    const logoutTimer = setTimeout(() => {
        this.logout();
    }, 30 * 60 * 1000); // 30 minutes
}
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
          // this.startLogoutTimer()
          this.authService.startLogoutTimer(() => this.logout());
          this.router.navigate(['/signup']);
          
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
      email:this.storedEmail||localStorage.getItem('email')
    }
    console.log(payload,"email")
    this.loginService.logout(payload).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          console.log('Logout successful:', response.message);
          this.authService.clearLocalStorage(); 
          this.authService.clearLogoutTimer();
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
