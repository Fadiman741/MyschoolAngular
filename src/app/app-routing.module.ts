
import { DiscussionforumComponent } from './discussionforum/discussionforum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

import {SignupComponent} from './auth/signup/signup.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';

import {AccountingComponent} from './papers/grade12/accounting/accounting.component';
import {LifescienceComponent} from './papers/grade12/lifescience/lifescience.component';
import {MathematicsComponent} from './papers/grade12/mathematics/mathematics.component';
import {PhysicalscienceComponent} from './papers/grade12/physicalscience/physicalscience.component';

import {Accounting11Component} from  './papers/grade11/accounting11/accounting11.component';
import {Lifesciene11Component} from  './papers/grade11/lifesciene11/lifesciene11.component';
import {Mathematics11Component} from  './papers/grade11/mathematics11/mathematics11.component';
import {Physicalscience11Component} from  './papers/grade11/physicalscience11/physicalscience11.component';

import {Accounting10Component} from  './papers/grade10/accounting10/accounting10.component';
import {Lifescience10Component} from  './papers/grade10/lifescience10/lifescience10.component';
import {Mathematics10Component} from  './papers/grade10/mathematics10/mathematics10.component';
import {Physicalscience10Component} from  './papers/grade10/physicalscience10/physicalscience10.component';
 
import {Accountingforum12Component} from './discussionforum/grade12/accountingforum12/accountingforum12.component';
import {Lifescienceforum12Component} from './discussionforum/grade12/lifescienceforum12/lifescienceforum12.component';
import {Mathematicsforum12Component} from './discussionforum/grade12/mathematicsforum12/mathematicsforum12.component';
import {Physicalscienceforum12Component} from './discussionforum/grade12/physicalscienceforum12/physicalscienceforum12.component';

import {Accountingforum11Component} from  './discussionforum/grade11/accountingforum11/accountingforum11.component';
import {Lifescienceforum11Component} from  './discussionforum/grade11/lifescienceforum11/lifescienceforum11.component';
import {Mathematicsforum11Component} from  './discussionforum/grade11/mathematicsforum11/mathematicsforum11.component';
import {Physicalscienceform11Component} from  './discussionforum/grade11/physicalscienceform11/physicalscienceform11.component';

import {Accountingforum10Component} from  './discussionforum/grade10/accountingforum10/accountingforum10.component';
import {Lifescienceforum10Component} from  './discussionforum/grade10/lifescienceforum10/lifescienceforum10.component';
import {Mathematicsforum10Component} from  './discussionforum/grade10/mathematicsforum10/mathematicsforum10.component';
import {Physicalscienceforum10Component} from  './discussionforum/grade10/physicalscienceforum10/physicalscienceforum10.component';
 

const routes: Routes = [

  { path: '', component: HomepageComponent },

  { path: 'login',component:SignInComponent},
  { path: 'signup', component:SignupComponent},

  { path: 'grade12/accounting', component:AccountingComponent} ,
  { path: 'grade12/lifescience', component:LifescienceComponent},
  { path: 'grade12/mathematics', component:MathematicsComponent},
  { path: 'grade12/physicalscience', component:PhysicalscienceComponent},

  { path: 'grade11/accounting', component:Accounting11Component},
  { path: 'grade11/lifescience', component:Lifesciene11Component},
  { path: 'grade11/mathematics', component:Mathematics11Component},
  { path: 'grade11/physicalscience', component:Physicalscience11Component},

  { path: 'grade10/accounting', component:Accounting10Component},
  { path: 'grade10/lifescience', component:Lifescience10Component},
  { path: 'grade10/mathematics', component:Mathematics10Component},
  { path: 'grade10/physicalscience', component:Physicalscience10Component},

  { path: 'grade12/accounting/comments', component:Accountingforum12Component} ,
  { path: 'grade12/lifescience/comments', component:Lifescienceforum12Component},
  { path: 'grade12/mathematics/comments', component:Mathematicsforum12Component},
  { path: 'grade12/physicalscience', component:Physicalscienceforum12Component},

  { path: 'grade11/accounting/comments', component:Accountingforum11Component},
  { path: 'grade11/lifescience/comments', component:Lifescienceforum11Component},
  { path: 'grade11/mathematics/comments', component:Mathematicsforum11Component},
  { path: 'grade11/physicalscience/comments', component:Physicalscienceform11Component},

  { path: 'grade10/accounting/comments', component:Accountingforum10Component},
  { path: 'grade10/lifescience/comments', component:Lifescienceforum10Component},
  { path: 'grade10/mathematics/comments', component:Mathematicsforum10Component},
  { path: 'grade10/physicalscience/comments', component:Physicalscienceforum10Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   

 }
