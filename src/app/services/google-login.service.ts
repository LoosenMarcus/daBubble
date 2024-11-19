import { Injectable } from '@angular/core';
import { gapi } from 'gapi-script';

@Injectable({
  providedIn: 'root',
})
export class GoogleLoginService {
  private clientId =
    '357973315472-vus8kk3hvo4goepfj3bq3ddp03q6jn2k.apps.googleusercontent.com';

  constructor() {
    this.loadGoogleAPI();
  }

  private loadGoogleAPI(): void {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: this.clientId,
      });
    });
  }

  public signIn(): void {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signIn().then((user: any) => {
      console.log('Google user:', user);
      // Hier kannst du den Benutzer in deiner Anwendung authentifizieren
      const profile = user.getBasicProfile();
      const token = user.getAuthResponse().id_token;

      // Beispiel: Speichern des Tokens im lokalen Speicher
      localStorage.setItem('google_token', token);
    });
  }

  public signOut(): void {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(() => {
      console.log('User signed out.');
      // Hier kannst du den Benutzer ausloggen
      localStorage.removeItem('google_token');
    });
  }
}
