import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ToggleMenuService {
  // BehaviorSubjects für die verschiedenen Container
  private isHideWorkspaceContainerSubject = new BehaviorSubject<boolean>(false);
  private isHideAddChannelContainerSubject = new BehaviorSubject<boolean>(
    false
  );
  private isHideProfileContainerSubject = new BehaviorSubject<boolean>(false);
  private isHideUserMenuContainerSubject = new BehaviorSubject<boolean>(false);
  private isHideSmallChatContainerSubject = new BehaviorSubject<boolean>(false);
  private isHideAddUserContainerSubject = new BehaviorSubject<boolean>(false);
  private isHideDirektMessageContainerSubject = new BehaviorSubject<boolean>(
    false
  );
  private isHideChannelContainerSubject = new BehaviorSubject<boolean>(false);
  // Exponierte Observables für die Komponenten
  isHideWorkspaceContainer$ =
    this.isHideWorkspaceContainerSubject.asObservable();
  isHideAddChannelContainer$ =
    this.isHideAddChannelContainerSubject.asObservable();
  isHideProfileContainer$ = this.isHideProfileContainerSubject.asObservable();
  isHideUserMenuContainer$ = this.isHideUserMenuContainerSubject.asObservable();
  isHideSmallChatContainer$ =
    this.isHideSmallChatContainerSubject.asObservable();
  isHideAddUserContainer$ = this.isHideAddUserContainerSubject.asObservable();
  isHideDirektMessageContainer$ =
    this.isHideDirektMessageContainerSubject.asObservable();
  isHideChannelContainer$ = this.isHideChannelContainerSubject.asObservable();
  // Generische Umschaltmethode, die je nach übergebenem Parameter den Zustand toggelt
  toggleContainer(
    container:
      | 'workspace'
      | 'addChannel'
      | 'profile'
      | 'userMenu'
      | 'smallChat'
      | 'addUser'
      | 'direktMessage'
      | 'channel'
  ) {
    switch (container) {
      case 'workspace':
        this.isHideWorkspaceContainerSubject.next(
          !this.isHideWorkspaceContainerSubject.value
        );
        break;
      case 'addChannel':
        this.isHideAddChannelContainerSubject.next(
          !this.isHideAddChannelContainerSubject.value
        );
        break;
      case 'profile':
        this.isHideProfileContainerSubject.next(
          !this.isHideProfileContainerSubject.value
        );
        break;
      case 'userMenu':
        this.isHideUserMenuContainerSubject.next(
          !this.isHideUserMenuContainerSubject.value
        );
        break;
      case 'smallChat':
        this.isHideSmallChatContainerSubject.next(
          !this.isHideSmallChatContainerSubject.value
        );
        break;
      case 'addUser':
        this.isHideAddUserContainerSubject.next(
          !this.isHideAddUserContainerSubject.value
        );
        break;
      case 'direktMessage':
        this.isHideDirektMessageContainerSubject.next(
          !this.isHideDirektMessageContainerSubject.value
        );
        break;
      case 'channel':
        this.isHideChannelContainerSubject.next(
          !this.isHideChannelContainerSubject.value
        );
        break;
      default:
        console.error('Unknown container type');
    }
  }

  // Methoden zum Abfragen der aktuellen Zustände
  getContainerState(
    container:
      | 'workspace'
      | 'addChannel'
      | 'profile'
      | 'userMenu'
      | 'smallChat'
      | 'addUser'
      | 'direktMessage'
      | 'channel'
  ): boolean {
    switch (container) {
      case 'workspace':
        return this.isHideWorkspaceContainerSubject.value;
      case 'addChannel':
        return this.isHideAddChannelContainerSubject.value;
      case 'profile':
        return this.isHideProfileContainerSubject.value;
      case 'userMenu':
        return this.isHideUserMenuContainerSubject.value;
      case 'smallChat':
        return this.isHideSmallChatContainerSubject.value;
      case 'addUser':
        return this.isHideAddUserContainerSubject.value;
      case 'direktMessage':
        return this.isHideDirektMessageContainerSubject.value;
      case 'channel':
        return this.isHideChannelContainerSubject.value;
      default:
        console.error('Unknown container type');
        return false;
    }
  }
}
