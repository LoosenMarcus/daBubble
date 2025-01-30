import { Component, OnInit } from '@angular/core';
import { WorkspaceMenuComponent } from '../workspace-menu/workspace-menu.component';
import { ChatMainComponent } from '../chat-main/chat-main.component';
import { ChatSmallComponent } from '../chat-small/chat-small.component';
import { Routes, RouterLink, RouterOutlet } from '@angular/router';
import { ToggleMenuService } from '../services/toggle-menus.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  isHideWorkspaceContainer!: boolean;
  isHideAddChannelContainer!: boolean;
  isHideProfileContainer!: boolean;
  isHideUserMenuContainer!: boolean;
  isHideSmallChatContainer!: boolean;
  isHideAddUserContainer!: boolean;

  constructor(private toggleMenuService: ToggleMenuService) {}

  ngOnInit(): void {
    // Aktuelle Zustände abonnieren
    this.toggleMenuService.isHideWorkspaceContainer$.subscribe(
      (value) => (this.isHideWorkspaceContainer = value)
    );
    this.toggleMenuService.isHideAddChannelContainer$.subscribe(
      (value) => (this.isHideAddChannelContainer = value)
    );
    this.toggleMenuService.isHideProfileContainer$.subscribe(
      (value) => (this.isHideProfileContainer = value)
    );
    this.toggleMenuService.isHideUserMenuContainer$.subscribe(
      (value) => (this.isHideUserMenuContainer = value)
    );
    this.toggleMenuService.isHideSmallChatContainer$.subscribe(
      (value) => (this.isHideSmallChatContainer = value)
    );
    this.toggleMenuService.isHideAddUserContainer$.subscribe(
      (value) => (this.isHideAddUserContainer = value)
    );
  }

  // Generische Methode zum Umschalten des Containers
  toggleContainer(
    container:
      | 'workspace'
      | 'addChannel'
      | 'profile'
      | 'userMenu'
      | 'smallChat'
      | 'addUser'
  ) {
    this.toggleMenuService.toggleContainer(container);
  }
}
