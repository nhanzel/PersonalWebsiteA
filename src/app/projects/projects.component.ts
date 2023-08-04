import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContentService, Project } from '../services/content';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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

export class ProjectsComponent {
  projects!: Project[];

  constructor(private contentService: ContentService) {
    this.projects = contentService.getProjects();
  }
}
