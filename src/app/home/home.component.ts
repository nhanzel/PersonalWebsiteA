import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { GlobalService } from '../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger( 'inOutAnimation', [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in-out', style({ opacity: 1 }))
          ]
        ),
      ]
    )
  ]
})
export class HomeComponent {
  title: string = 'Nathan Hanzel';
  subtitle: string = 'Full Stack Engineer';
}
