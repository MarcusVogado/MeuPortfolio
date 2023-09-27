import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogContentComponent } from './pages/blog-content/blog-content.component';
import { CsharpContentComponent } from './pages/csharp-content/csharp-content.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog-content/:id',
    component: BlogContentComponent
  },
  {
    path: 'csharp',
    component: CsharpContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
