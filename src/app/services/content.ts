import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  private projects$: Project[] = [
    new Project(1, 
        'Project 1', 
        'This is a description of project 1', 
        'placeholder_image.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis nisl, quis commodo risus posuere a. Vivamus dapibus elementum urna in rhoncus. Nulla pretium feugiat lacus, in euismod nisi faucibus malesuada. Fusce pellentesque turpis ac odio varius, quis varius metus efficitur. Vestibulum dignissim ipsum nisi, eget fringilla est venenatis at. Pellentesque id risus erat. Nunc mattis rhoncus erat in vestibulum. In venenatis lacinia accumsan. Sed eu felis ut metus vestibulum finibus eget ultricies nulla. Donec varius tortor sagittis, volutpat elit sed, pretium tortor. Sed ut porttitor elit, ac fringilla nisi. Maecenas lobortis risus id neque iaculis, suscipit tempus dolor tincidunt. Aliquam eget tortor ac massa tempor scelerisque. Donec ante neque, consequat ac commodo interdum, accumsan eu ante. Sed tristique est nec tincidunt commodo. Sed dignissim turpis nisi, a convallis augue elementum sed. Morbi quis sem sit amet lacus efficitur ultricies at nec nisl. Cras et egestas enim. Quisque volutpat sapien non gravida hendrerit. Sed elementum dictum mauris, ac mollis orci pulvinar eu. Fusce in eros eu massa iaculis dignissim. Quisque aliquet tellus vel malesuada ultrices. Cras sollicitudin ex in facilisis euismod. ',
        [
            ['Google', 'https://www.google.com'],
            ['Bing', 'https://www.bing.com'],
        ]
    ),
    new Project(2, 
        'Project 2', 
        'This is a description of project 2', 
        'placeholder_image.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis nisl, quis commodo risus posuere a. Vivamus dapibus elementum urna in rhoncus. Nulla pretium feugiat lacus, in euismod nisi faucibus malesuada. Fusce pellentesque turpis ac odio varius, quis varius metus efficitur. Vestibulum dignissim ipsum nisi, eget fringilla est venenatis at. Pellentesque id risus erat. Nunc mattis rhoncus erat in vestibulum. In venenatis lacinia accumsan. Sed eu felis ut metus vestibulum finibus eget ultricies nulla. Donec varius tortor sagittis, volutpat elit sed, pretium tortor. Sed ut porttitor elit, ac fringilla nisi. Maecenas lobortis risus id neque iaculis, suscipit tempus dolor tincidunt. Aliquam eget tortor ac massa tempor scelerisque. Donec ante neque, consequat ac commodo interdum, accumsan eu ante. Sed tristique est nec tincidunt commodo. Sed dignissim turpis nisi, a convallis augue elementum sed. Morbi quis sem sit amet lacus efficitur ultricies at nec nisl. Cras et egestas enim. Quisque volutpat sapien non gravida hendrerit. Sed elementum dictum mauris, ac mollis orci pulvinar eu. Fusce in eros eu massa iaculis dignissim. Quisque aliquet tellus vel malesuada ultrices. Cras sollicitudin ex in facilisis euismod. ',
        [
          ['Google', 'https://www.google.com'],
          ['Bing', 'https://www.bing.com'],
        ]
    ),
    new Project(3, 
        'Project 3', 
        'This is a description of project 3', 
        'placeholder_image.png',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis nisl, quis commodo risus posuere a. Vivamus dapibus elementum urna in rhoncus. Nulla pretium feugiat lacus, in euismod nisi faucibus malesuada. Fusce pellentesque turpis ac odio varius, quis varius metus efficitur. Vestibulum dignissim ipsum nisi, eget fringilla est venenatis at. Pellentesque id risus erat. Nunc mattis rhoncus erat in vestibulum. In venenatis lacinia accumsan. Sed eu felis ut metus vestibulum finibus eget ultricies nulla. Donec varius tortor sagittis, volutpat elit sed, pretium tortor. Sed ut porttitor elit, ac fringilla nisi. Maecenas lobortis risus id neque iaculis, suscipit tempus dolor tincidunt. Aliquam eget tortor ac massa tempor scelerisque. Donec ante neque, consequat ac commodo interdum, accumsan eu ante. Sed tristique est nec tincidunt commodo. Sed dignissim turpis nisi, a convallis augue elementum sed. Morbi quis sem sit amet lacus efficitur ultricies at nec nisl. Cras et egestas enim. Quisque volutpat sapien non gravida hendrerit. Sed elementum dictum mauris, ac mollis orci pulvinar eu. Fusce in eros eu massa iaculis dignissim. Quisque aliquet tellus vel malesuada ultrices. Cras sollicitudin ex in facilisis euismod. ',
        [
          ['Google', 'https://www.google.com'],
          ['Bing', 'https://www.bing.com'],
        ]
    ),
  ];

  getProjects(): any {
    return this.projects$;
  }

  getProject(id: number): Project {
    let answer: Project | undefined = this.projects$.find(p => p.id.toString() === id.toString());
    return answer != undefined ? answer : this.projects$[0];
  }
}

export class Project {
    id!: number;
    title!: string;
    blurb!: string;
    image!: string;
    description!: string;
    links!: any[];

    constructor(id: number, title: string, blurb: string, image: string, description: string, links: any[]) {
        this.id = id;
        this.title = title;
        this.blurb = blurb;
        this.image = image;
        this.description = description;
        this.links = links;
    }
}