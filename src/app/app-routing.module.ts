import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AddComponent } from './components/courses/add/add.component';
import { UpdateComponent } from './components/courses/update/update.component';
import { ListComponent } from './components/courses/list/list.component';

const routes: Routes = [
  { path: 'courses/update/:id', component: UpdateComponent },
  { path: 'courses/add', component: AddComponent },
  { path: 'courses', component: ListComponent },
  { path: 'home', component: LandingPageComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
