import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContentService } from './services/content';
import { EmailService } from './services/email';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from './services/global';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    BackgroundAnimationComponent,
    ContactMeComponent,
    ExploreComponent,
    HomeComponent,
    MenuComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
    ProjectsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    ToastrModule.forRoot()
  ],
  providers: [GlobalService, ContentService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
