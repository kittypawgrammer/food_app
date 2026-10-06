import { Injectable } from '@angular/core';

// Filled in step by step in the auth lessons (basic login -> JWT).
@Injectable({ providedIn: 'root' })
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
