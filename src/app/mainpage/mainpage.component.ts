import { Component } from '@angular/core';
import { WorkspaceMenuComponent } from '../workspace-menu/workspace-menu.component';
import { ChatMainComponent } from '../chat-main/chat-main.component';
import { ChatSmallComponent } from '../chat-small/chat-small.component';
import { Routes, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  openUserMenuStatus = false;
  openPopUpUserProfileStatus = false;
  isHideWorkspaceContainer = false;

  toggleContainer(name: string) {
    if (name == 'userPopUp' && this.openUserMenuStatus == false) {
      console.log('User Menü Pop Up');
      this.openUserMenuStatus = true;
    } else if (name == 'userPopUp' && this.openUserMenuStatus == true) {
      this.openUserMenuStatus = false;
    } else if (name == 'userProfile') {
      console.log('user Profile');
      this.openUserMenuStatus = false;
      this.openPopUpUserProfileStatus = true;
    } else if (name == 'userProfileClose') {
      this.openPopUpUserProfileStatus = false;
    }
  }
}
