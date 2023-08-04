import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
export class AboutComponent {
  aboutMyCareer: string = "My name is Nathan Hanzel, and welcome to my website. " + 
  "I am a full-stack engineer with a passion for programming and learning.\n\n " + 
  "I am proficient in a range of languages, including C#, Python, and JavaScript, along with most popular JavaScript frameworks (see the explore page). " + 
  "My expertise extends to the realm of databases, and I'm well-versed in SQL, as well as database providers like mySql and MySQLServer. Additionally, I have hands-on experience with various tools and technologies like Git, Azure, PowerShell scripting, and RabbitMQ.\n\n " + 
  "For the past three years, I have been deeply immersed in the corporate landscape as an enterprise programmer, contributing to the development of proprietary software that caters to the needs of banks and institutions across the United States. ";
  aboutMe: string = "When I'm not coding, you can find me growing my vinyl collection, going to concerts, watching the latest A24 movie, learning a new board game, or enjoying space documentaries (if you haven't guessed, I like space). " + 
  "Please feel free to contact me with any questions or inquiries.";
}
