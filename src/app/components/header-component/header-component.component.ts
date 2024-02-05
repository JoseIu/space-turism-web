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
  imports: [RouterModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss',
})
export class HeaderComponentComponent {
  public nav: Nav[] = [
    {
      path: 'home',
      name: 'Home',
      number: '00',
    },
    {
      path: 'destination',
      name: 'Destination',
      number: '02',
    },
    {
      path: 'crew',
      name: 'Crew',
      number: ' 03',
    },
    {
      path: 'technology',
      name: 'Technology',
      number: ' 04',
    },
  ];
}
