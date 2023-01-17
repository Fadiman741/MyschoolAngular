import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PapersComponent } from './papers/papers.component';
import { AuthComponent } from './auth/auth.component';
import { DiscussionforumComponent } from './discussionforum/discussionforum.component';

@NgModule({
  declarations: [					
    AppComponent,
      NavbarComponent,
      HomepageComponent,
      PapersComponent,
      AuthComponent,
      DiscussionforumComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
