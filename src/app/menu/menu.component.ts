import { Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { GlobalService } from '../services/global';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {
  private isAnimating: Subscription | undefined;
  constructor(private globalService: GlobalService) {
    this.isAnimating = this.globalService.getIsAnimating().subscribe((_isAnimating: boolean) => {
      console.log(_isAnimating);
      if (_isAnimating) {
        this.menuItems.forEach((item: ElementRef) => {
          item.nativeElement.style.pointerEvents = 'none';
        }); 
      } else {
        this.menuItems.forEach((item: ElementRef) => {
          item.nativeElement.style.pointerEvents = 'auto';
        });
      }
    });
  }
  
  @ViewChildren("myLinks")
  menuItems!: QueryList<ElementRef>;

  ngOnDestroy(): void {
    if (this.isAnimating) {
      this.isAnimating.unsubscribe();
    }
  }
}