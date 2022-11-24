import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { AssignComponent } from './assign/assign.component';

@NgModule({
  declarations: [   //U can add all component here
    AppComponent, OneComponent, SecondComponent, AssignComponent
  ],
  imports: [            //All moduls 
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AssignComponent]    //default starting components
})
export class AppModule { }
