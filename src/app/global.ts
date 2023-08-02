import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  private isAnimating$: Subject<boolean> = new Subject<boolean>;

  setIsAnimating(isAnimating: boolean): void {
    this.isAnimating$.next(isAnimating);
  }

  getIsAnimating(): Observable<boolean> {
    return this.isAnimating$.asObservable();
  }
}
