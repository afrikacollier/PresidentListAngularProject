import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PresidentsComponent } from './presidents/presidents.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PresidentDetailComponent } from './president-detail/president-detail.component';
import { PresidentInfopageComponent } from './president-infopage/president-infopage.component';

const routes : Routes = [
  { path: 'presidents', component: PresidentsComponent}, /*is where are routing is located*/
  { path: 'homepage', component: HomepageComponent},
  { path: 'presidentInfo', component: PresidentInfopageComponent}, 
  { path: '', redirectTo: '/homepage', pathMatch: 'full'} /*is where are routing is located*/
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
