import { Component } from '@angular/core';
import { WorkspaceMenuComponent } from '../workspace-menu/workspace-menu.component';
import { ChatMainComponent } from '../chat-main/chat-main.component';
import { ChatSmallComponent } from '../chat-small/chat-small.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  imports: [WorkspaceMenuComponent, ChatMainComponent, ChatSmallComponent],
  standalone: true,
})
export class MainpageComponent {}
