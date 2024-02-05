import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as db from '../../db/data.json';
import { DB } from '../interfaces/db-interface';

@Injectable({
  providedIn: 'root',
})
export class SpaceTurismServiceService {
  private data = new BehaviorSubject<DB>(db);
  public data$ = this.data.asObservable();

  public getDB() {
    return this.data.getValue();
  }
}
