import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresidentsComponent } from './presidents/presidents.component';
import { PresidentDetailComponent } from './president-detail/president-detail.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PresidentInfopageComponent } from './president-infopage/president-infopage.component';
@NgModule({
  declarations: [
    AppComponent,
    PresidentsComponent,
    PresidentDetailComponent,
    HomepageComponent,
    PresidentInfopageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
