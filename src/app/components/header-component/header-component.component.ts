import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
interface Nav {
  path: string;
  name: string;
  number: string;
}
@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss',
})
export class HeaderComponentComponent {
  public isOpen: boolean = false;
  public nav: Nav[] = [
    {
      path: 'home',
      name: 'Home',
      number: '00',
    },
    {
      path: 'destination',
      name: 'Destination',
      number: '01',
    },
    {
      path: 'crew',
      name: 'Crew',
      number: ' 02',
    },
    {
      path: 'technology',
      name: 'Technology',
      number: ' 03',
    },
  ];

  public closeMenu() {
    this.isOpen = false;
  }
  public openMenu() {
    this.isOpen = true;
  }
}
