import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.scss',
})
export class DestinationPageComponent {}
