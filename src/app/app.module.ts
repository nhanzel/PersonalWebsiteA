import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundAnimationComponent } from './background-animation/background-animation.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ExploreComponent } from './explore/explore.component';
import { GlobalService } from './global';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
