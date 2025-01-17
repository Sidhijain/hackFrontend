import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string="";

  constructor(private router: Router) { }
  private tokenKey = 'auth-token';
  // Save token to localStorage
  saveToken(token: string,email:any): void {
    console.log("token",token);
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem('email',email)

  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  getEmail(): string | null {
    return localStorage.getItem(this.email);
  }

  // Remove token
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  // private logoutTimer: any;

  // getTokenExpiration(): Date | null {
  //   const token = localStorage.getItem(this.tokenKey);
  //   if (!token) return null;

  //   const decoded: any = jwt_decode(token);
  //   return decoded.exp ? new Date(decoded.exp * 1000) : null;
  // }

  // startTokenExpirationTimer(): void {
  //   const expiration = this.getTokenExpiration();
  //   if (expiration) {
  //     const timeout = expiration.getTime() - Date.now();
  //     if (timeout <= 0) {
  //       this.logout();
  //     } else {
  //       this.logoutTimer = setTimeout(() => {
  //         this.logout();
  //       }, timeout);
  //     }
  //   }
  // }

  // clearLogoutTimer(): void {
  //   if (this.logoutTimer) {
  //     clearTimeout(this.logoutTimer);
  //   }
  // }

  // logout(): void {
  //   localStorage.removeItem(this.tokenKey);
  //   this.clearLogoutTimer();
  //   // Redirect to login page
  //   console.log('User logged out');
  // }
  private logoutTimer: any;

 

  startLogoutTimer(callback: () => void) {
    this.clearLogoutTimer(); // Clear any existing timer
    this.logoutTimer = setTimeout(() => {
      callback();
    }, 10 * 1000); // 30 minutes
  }

  clearLogoutTimer() {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
  }
}
