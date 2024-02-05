import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-crew-page',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './crew-page.component.html',
  styleUrl: './crew-page.component.scss',
})
export class CrewPageComponent {}
