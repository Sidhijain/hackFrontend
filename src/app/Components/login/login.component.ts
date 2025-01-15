import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService,private loginService:LoginService){}
  login() {
      const payload = {
      username: this.username,
      password: this.password
    };
    this.loginService.login(payload).subscribe({
      next: (response: { token: string; }) => {
        this.authService.saveToken(response.token);
        console.log('Login successful');
      },
      error: (error: any) => {
        console.error('Login failed', error);
      },
    });
  }
  
}
