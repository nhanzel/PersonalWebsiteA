import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ContentService, Project } from '../services/content';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  project!: Project;

  constructor(private contentService: ContentService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.project = contentService.getProject(params['id']));
    console.log(this.project.links);
  }
}
