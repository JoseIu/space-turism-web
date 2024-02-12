import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { Technology } from '../../interfaces/db-interface';
import { SpaceTurismServiceService } from '../../services/space-turism-service.service';

@Component({
  selector: 'app-technology-page',
  standalone: true,
  imports: [CommonModule, HeaderComponentComponent],
  templateUrl: './technology-page.component.html',
  styleUrl: './technology-page.component.scss',
})
export class TechnologyPageComponent implements OnInit {
  private spaceTurismService = inject(SpaceTurismServiceService);

  public transformValue: string = '0%';
  public operation = 100 / 3;

  public technologys?: Technology[];
  public isActiveNav: number = 0;

  ngOnInit(): void {
    this.spaceTurismService.data$
      .pipe(map((value) => value.technology))
      .subscribe((technology) => {
        this.technologys = technology;
      });
  }

  public nextTechnolgy(index: number) {
    let position: number = index;
    this.isActiveNav = index;

    let caltculateTranslate = position * -this.operation;

    this.transformValue = `${caltculateTranslate}%`;
  }
}
