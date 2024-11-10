import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AvatarPickerComponent } from './avatar-picker/avatar-picker.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { NewPwComponent } from './new-pw/new-pw.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ProfileComponent,
    SignInComponent,
    AvatarPickerComponent,
    ResetPwComponent,
    NewPwComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
