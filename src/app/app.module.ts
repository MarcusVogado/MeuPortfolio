import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';


import { SummaryComponent } from './pages/summary/summary.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CardProjetctComponent } from './components/card-projetct/card-projetct.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogContentComponent } from './pages/blog-content/blog-content.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { BlogSelectContentComponent } from './pages/blog-select-content/blog-select-content.component';
import { CsharpContentComponent } from './pages/csharp-content/csharp-content.component';
import { CodeSpaceComponent } from './components/code-space/code-space.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardSkillsComponent } from './components/card-skills/card-skills.component';
import { CardAcademicComponent } from './components/card-academic/card-academic.component';
import { TitleArticleComponent } from './components/title-article/title-article.component';
@NgModule({
  declarations: [
    AppComponent,
    AsideBarComponent,   
    SummaryComponent,
    ProjectsComponent,
    BlogComponent,
    CardProjetctComponent,
    ContactComponent,
    BlogContentComponent,
    CardBlogComponent,
    BlogSelectContentComponent,
    CsharpContentComponent,
    CodeSpaceComponent,
    CardSkillsComponent,
    CardAcademicComponent,
    TitleArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
