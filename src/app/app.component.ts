import { Component } from '@angular/core';
import { GlobalService } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animating: boolean = false;

  constructor(private globalService: GlobalService) {
    this.globalService.getIsAnimating().subscribe((_isAnimating: boolean) => {
      this.animating = !this.animating;
    });
  }
}
