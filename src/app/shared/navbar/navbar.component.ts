import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

export interface NavbarItemConfiguration {
  name: string;
  path: string;
  icon?: string;
}

export interface NavToolbarConfiguration {
  title: string;
  description: string;
  items: NavbarItemConfiguration[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  toolbar = {
    title: environment.app_name,
    description: '',
    items: [
      { name: 'Login', path: '/auth/login' },
      { name: 'Register', path: '/auth/register', icon: 'emoji_people' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
