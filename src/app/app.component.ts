import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ensure this is imported
  ],
  standalone: true,
})
export class AppComponent {
  title = 'daBubble';
}
