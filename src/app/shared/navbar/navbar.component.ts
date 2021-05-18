import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { AuthService } from '@app/services';

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
    items: [],
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  tokenMissing(): boolean {
    const token = this.authService.token;
    return (!token || token.length === 0);
  }
}
