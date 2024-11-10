import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AvatarPickerComponent } from './avatar-picker/avatar-picker.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { NewPwComponent } from './new-pw/new-pw.component';
export const routes: Routes = [{ path: '', component: NewPwComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
