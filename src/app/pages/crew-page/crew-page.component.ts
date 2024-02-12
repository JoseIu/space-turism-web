import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { Crew } from '../../interfaces/db-interface';
import { SpaceTurismServiceService } from '../../services/space-turism-service.service';

@Component({
  selector: 'app-crew-page',
  standalone: true,
  imports: [CommonModule, HeaderComponentComponent],
  templateUrl: './crew-page.component.html',
  styleUrl: './crew-page.component.scss',
})
export class CrewPageComponent implements OnInit {
  private spaceTurismServiceService = inject(SpaceTurismServiceService);

  public crew?: Crew[];
  public transformValue = '0%';
  public isActiveNav: number = 0;

  ngOnInit() {
    this.spaceTurismServiceService.data$
      .pipe(map((data) => data.crew))
      .subscribe((crew) => {
        console.log('crew', crew);
        this.crew = crew;
      });
  }

  public nextPerson(index: number) {
    let position = index;
    this.isActiveNav = index;
    let opration = position * -25;

    this.transformValue = `${opration}%`;
  }
}
