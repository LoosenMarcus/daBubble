import { Component } from '@angular/core';
import { WorkspaceMenuComponent } from '../workspace-menu/workspace-menu.component';
import { ChatMainComponent } from '../chat-main/chat-main.component';
import { ChatSmallComponent } from '../chat-small/chat-small.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  variable = true;
  json = [
    {
      id: 1,
      name: 'Marcus',
      alter: 41,
    },
    {
      id: 2,
      name: 'Marcus2',
      alter: 412,
    },
  ];
  constructor() {
    // this.loadEmojis();
    console.log(this.json);
  }

  /**
   * Load all Emojis
   */
  // async loadEmojis() {
  //   let emoji = await fetch(
  //     `https://emoji-api.com/emojis?access_key=2b3522d2007654b0ef6dfc90c2c5c4cd74d62247`
  //   );
  //   this.emojiJson.push(await emoji.json());
  // }
}
