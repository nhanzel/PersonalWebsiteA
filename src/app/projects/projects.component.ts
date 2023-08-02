import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContentService, Project } from '../services/content';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects!: Project[];

  constructor(private contentService: ContentService) {
    this.projects = contentService.getProjects();
  }
}
