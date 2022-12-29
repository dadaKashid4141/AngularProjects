import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerCompoComponent } from './eager-compo/eager-compo.component';
import { Route, RouterModule, Routes } from '@angular/router';

const egrRoute:Routes=[
  {path:'eager', component:EagerCompoComponent}
]

@NgModule({
  declarations: [EagerCompoComponent],
  imports: [
    CommonModule,
    RouterModule .forRoot(egrRoute)
  ],
  exports: [RouterModule]
})
export class EagerModule { }
