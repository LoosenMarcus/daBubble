import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from '../services/toggle-menus.service';

@Component({
  selector: 'app-workspace-menu',
  templateUrl: './workspace-menu.component.html',
  styleUrls: ['./workspace-menu.component.scss'],
})
export class WorkspaceMenuComponent implements OnInit {
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
