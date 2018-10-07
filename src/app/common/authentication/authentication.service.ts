import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private service: AngularFireAuth
  ) { }

  public login(credentials: { email: string, password: string }) {
    const { email, password } = credentials;
    return this.service.auth.signInWithEmailAndPassword( email, password );
  }

  public async logout(): Promise<void> {
    try {
      await this.service.auth.signOut();
      console.log('logout successful');
    } catch (_error) {
      console.log('unable to logout');
    }
  }
}
