import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public loader = new Subject<boolean>();

  constructor() { }

  public setLoader(startSpinner: boolean): void {
    this.loader.next(startSpinner);
  }
}
