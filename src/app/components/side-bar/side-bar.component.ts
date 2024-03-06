import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/interfaces';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  links: Links[] = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      {
        name: 'Dashboard',
        route: '/dashboard',
      },
      {
        name: 'Receitas',
        route: '/receitas',
      },
      {
        name: 'Dividas',
        route: '/dividas',
      },
      {
        name: 'Calendar',
        route: '/calendar',
      },
      {
        name: 'Authentication',
        route: '/auth',
      },
    ];
  }
}
