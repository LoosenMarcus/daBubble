import { Component } from '@angular/core';
import { GoogleLoginService } from '../services/google-login.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent {
  constructor(private googleLoginService: GoogleLoginService) {}

  signIn(): void {
    this.googleLoginService.signIn();
  }

  signOut(): void {
    this.googleLoginService.signOut();
  }
}
