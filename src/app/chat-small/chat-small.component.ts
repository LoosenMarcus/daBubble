import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-small',
  templateUrl: './chat-small.component.html',
  styleUrls: ['./chat-small.component.scss'],
})
export class ChatSmallComponent {
  isHideSmallChatContainer = false;
}
