import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { Destination } from '../../interfaces/db-interface';
import { SpaceTurismServiceService } from '../../services/space-turism-service.service';

@Component({
  selector: 'app-destination-page',
  standalone: true,
  imports: [CommonModule, HeaderComponentComponent],
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.scss',
})
export class DestinationPageComponent implements OnInit {
  private spaceTurismServiceService = inject(SpaceTurismServiceService);
  public destination?: Destination[];

  public transformValue = '0%';

  public isActiveNav: number = 0;

  ngOnInit(): void {
    this.spaceTurismServiceService.data$
      .pipe(map((data) => data.destinations))
      .subscribe((destinations) => {
        this.destination = destinations;
        console.log('destinations', this.destination);
      });
  }

  public nextPlanet(index: number) {
    let position = index;
    this.isActiveNav = position;
    let opration = position * -25;

    this.transformValue = `${opration}%`;
  }
}
