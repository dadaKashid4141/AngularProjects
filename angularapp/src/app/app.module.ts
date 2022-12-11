import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { AssignComponent } from './assign/assign.component';
import { DemodirectiveComponent } from './demodirective/demodirective.component';
import { AssignStructDirectiveComponent } from './assign-struct-directive/assign-struct-directive.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { ParentComponent } from './@inpute/parent/parent.component';
import { ChildeComponent } from './@inpute/childe/childe.component';
import { ParentOneComponent } from './@output/parent-one/parent-one.component';
import { ChildOneComponent } from './@output/child-one/child-one.component';
import { AssigndirectiveComponent } from './assigndirective/assigndirective.component';
import { ParenthookComponent } from './hook/parenthook/parenthook.component';
import { HooksComponent } from './hook/hooks/hooks.component';
import { AddremovebuttonComponent } from './addremovebutton/addremovebutton.component';
import { TemplateformComponent } from './templateform/templateform.component';


@NgModule({
  declarations: [   //U can add all component here
    AppComponent, OneComponent, SecondComponent, AssignComponent, DemodirectiveComponent, AssignStructDirectiveComponent, AttriComponent, CustdirDirective, ParentComponent, ChildeComponent, ParentOneComponent, ChildOneComponent, HooksComponent, AssigndirectiveComponent, ParenthookComponent, AddremovebuttonComponent, TemplateformComponent, 
  ],
  imports: [            //All moduls 
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [ TemplateformComponent]    //default starting components
})
export class AppModule { }