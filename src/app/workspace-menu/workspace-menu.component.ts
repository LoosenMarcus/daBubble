import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace-menu',
  templateUrl: './workspace-menu.component.html',
  styleUrls: ['./workspace-menu.component.scss'],
})
export class WorkspaceMenuComponent {
  addChannelPopUpStatus = false;
  addUserPopUpStatus = false;

  toggleAddChannelPopUp() {
    if (!this.addChannelPopUpStatus) {
      this.addChannelPopUpStatus = true;
    } else {
      this.addChannelPopUpStatus = false;
    }
  }

  toggleAddUserPopUp() {
    if (!this.addChannelPopUpStatus) {
      this.addUserPopUpStatus = true;
      this.addChannelPopUpStatus = false;
    } else {
      this.addUserPopUpStatus = false;
    }
  }

  addUserPopUp() {
    // saveChannel();
    this.addChannelPopUpStatus = false;
    if (!this.addUserPopUpStatus) {
      this.addChannelPopUpStatus = true;
    } else {
      this.addUserPopUpStatus = false;
    }
  }
}
