import { Routes, RouterLink, RouterOutlet } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },
  {
    path: 'impressum',
    title: 'Marcus Loosen | Impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    title: 'Marcus Loosen | Datenschutz',
    component: DisclaimerComponent,
  },
];
