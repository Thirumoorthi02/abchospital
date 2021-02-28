import { Component } from '@angular/core';
import { SharedDataService } from '../shared-service/shared-data.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  public startSpinner = false;

  constructor(private sharedDataService: SharedDataService) {
    this.sharedDataService.loader.subscribe((startSpinner) => {
      this.startSpinner = startSpinner;
    });
  }
}
