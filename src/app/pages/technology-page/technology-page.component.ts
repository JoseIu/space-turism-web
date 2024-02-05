import { Component } from '@angular/core';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';

@Component({
  selector: 'app-technology-page',
  standalone: true,
  imports: [HeaderComponentComponent],
  templateUrl: './technology-page.component.html',
  styleUrl: './technology-page.component.scss',
})
export class TechnologyPageComponent {}
