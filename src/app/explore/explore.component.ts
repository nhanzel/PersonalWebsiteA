import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  animations: [
    trigger( 'inOutAnimation', [
        transition(
          ':enter', [
            style({ opacity: 0 }),
            animate('400ms ease-in-out', style({ opacity: 1 }))
          ]
        )
      ]
    )
  ]
})
export class ExploreComponent {

}
