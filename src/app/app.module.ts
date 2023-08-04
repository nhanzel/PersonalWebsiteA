import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ExploreComponent } from './explore/explore.component';
import { GlobalService } from './services/global';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ContentService } from './services/content';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundAnimationComponent,
    HomeComponent,
    ProjectsComponent,
    MenuComponent,
    AboutComponent,
    BlogComponent,
    ExploreComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [GlobalService, ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
