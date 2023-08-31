import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { GlobalService } from './services/global';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ContentService } from './services/content';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EmailService } from './services/email';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundAnimationComponent,
    HomeComponent,
    ProjectsComponent,
    MenuComponent,
    AboutComponent,
    ExploreComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    AppRoutingModule
  ],
  providers: [GlobalService, ContentService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
