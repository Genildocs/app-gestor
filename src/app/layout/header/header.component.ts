import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Carlos Vicente';
  constructor() {}

  ngOnInit(): void {}
}
