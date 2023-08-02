import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1',
      image: '../assets/placeholder_image.png'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2',
      image: '../assets/placeholder_image.png'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3',
      image: '../assets/placeholder_image.png'
    }
  ];
}
