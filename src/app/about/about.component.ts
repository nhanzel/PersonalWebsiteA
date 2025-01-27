import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  pdfUrl: SafeResourceUrl;

  constructor(private santizier: DomSanitizer) {
    this.pdfUrl = this.santizier.bypassSecurityTrustResourceUrl("../assets/resume.pdf");
  }

  openPdf() {
    window.open("../assets/resume.pdf", "_blank");
  }

  skills: any[] = [
    {
      name: "C#",
      imagePath: "assets/csharp_logo.png",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      description: ".NET Core, .NET Framework, ASP.NET, MVC, Web API, Entity Framework, LINQ"
    },
    {
      name: "Javascript",
      imagePath: "assets/javascript_logo.png",
      link: "https://www.javascript.com/",
      description: "Angular, React, Vue, Node.js, Express.js, jQuery, Typescript"
    },
    {
      name: "Python",
      imagePath: "assets/python_logo.png",
      link: "https://www.python.org/",
      description: "Tensorflow, Flask, Numpy, Pandas, Matplotlib"
    },
    {
      name: "SQL",
      imagePath: "assets/sql_logo.png",
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      description: "SQLServer, MySQL, Microsoft SQL Server"
    },
    {
      name: "Git/Development Tools",
      imagePath: "assets/git_logo.png",
      link: "https://git-scm.com/",
      description: "Git, AWS, Azure DevOps, Powershell"
    }
  ];
  experience: any[] = [
    {
      title: "Instructional Assistant",
      company: "Utah Valley University",
      date: "Aug 2024 - Present",
      description: [
        "Assist professors and Utah Valley University with grading and curriculum development",
        "Work with students in private tutoring sessions",
        "Aid in developing new assignments for Utah Valley University students in Python and C++"
      ]
    },
    {
      title: "Full-Stack Software Engineer",
      company: "DHICorp Inc.",
      date: "Dec 2020 - Jun 2024",
      description: [
        "Developed and maintained financial software for banks and institutions across the United States",
        "Designed and tested software built with C#, Typescript, and MVC architectures",
        "Managed a micro-service architecture with RabbitMQ and Azure",
        "Collaborated with financial institutions and banks on large-scale projects"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Utah Valley University",
      date: "Jun 2020 - Dec 2020",
      description: [
        "Developed and trained various machine learning models and frameworks using Python's Tensorflow",
        "Gathered and Preprocessed data for use in machine learning models",
        "Researched and implemented various machine learning algorithms and techniques"
      ]
    },
    {
      title: "Onsite Implementation Specialist",
      company: "Boostability",
      date: "Dec 2018 - Jun 2020",
      description: [
        "Developed web applications for clients using HTML, CSS, and Javascript",
        "Implemented and monitored online marketing tools for client's websites, including Google Analytics and Google Search Console",
        "Collaborated with clients to develop and implement SEO strategies for their websites"
      ]
    }
  ];
  aboutMe: string = "When I'm not coding, you can find me growing my vinyl collection, going to concerts, watching the latest A24 movie, reading, or enjoying space documentaries (if you haven't guessed, I like space). " + 
  "Please feel free to contact me with any questions or inquiries.";
}
