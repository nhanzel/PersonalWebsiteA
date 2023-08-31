import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  
  private projects$: Project[] = [
    new Project(1, 
        'Alphabetized', 
        'A VS Code extension that alphabetizes lines of text', 
        'alphabetize.png',
        'Alphabetize is a vscode extension built using typescript and vscode\'s extension api. It allows users to alphabetize lines of text, as well as css selectors and properties. It is available on the vscode marketplace. This was a great learning experience and enabled me to learn more about the best IDE out there (sorry jetbrains fans).',
        [
            ['Extension', 'https://marketplace.visualstudio.com/items?itemName=nathan-hanzel.alphabetized'],
            ['Source', 'https://github.com/nhanzel/Alphabetize'],
        ]
    ),
    new Project(2, 
        'Discogs CLI Tool', 
        'A CLI tool for sellers looking to quickly price their inventory', 
        'vinyl.png',
        'Discogs is an online vinyl marketplace as well as forum for music fans. As an avid vinyl fan myself, I made this CLI tool that integrates with your discogs account to quickly price your inventory. It is built using python. You can either manually add your vinyl_ids, or make a folder of all your vinyl in discogs. It then runs a batch process for all the vinyl and displays the relevant financial and market information to the console.',
        [
          ['Discogs', 'https://www.discogs.com/'],
          ['Source', 'https://github.com/nhanzel/discogs_vinyl_sellers_tool'],
        ]
    ),
    new Project(3, 
        'Unity Maze Generator', 
        'A Unity asset that procedurally generates a maze', 
        'maze.png',
        'This is a Unity asset that procedurally generates a maze. It is built using C# and Unity. It is available on the Unity Asset Store. I have been a fan of game development for a long time, it is what got me into programming. I figured I would publish this small passion project so other developers could make something greater with it.',
        [
          ['Asset Store', 'https://assetstore.unity.com/packages/slug/264693'],
          ['Source', 'https://github.com/nhanzel/Maze-Generator-Unity'],
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