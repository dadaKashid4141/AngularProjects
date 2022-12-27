import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './learnRouting/aboutus/aboutus.component';
import { ContactusComponent } from './learnRouting/contactus/contactus.component';
import { DemopostComponent } from './learnRouting/demopost/demopost.component';
import { LoginComponent } from './learnRouting/login/login.component';
import { PostdetailsComponent } from './learnRouting/postdetails/postdetails.component';
import { Error404Component } from './learnRouting/product/error404/error404.component';
import { LaptopComponent } from './learnRouting/product/laptop/laptop.component';
import { ProductComponent } from './learnRouting/product/product.component';
import { TabletComponent } from './learnRouting/product/tablet/tablet.component';
import { TvComponent } from './learnRouting/product/tv/tv.component';

import { WashigMachineComponent } from './learnRouting/product/washig-machine/washig-machine.component';
import { ReactFormAssignComponent } from './react-form-assign/react-form-assign.component';
import { SimpleFormAssingComponent } from './simple-form-assing/simple-form-assing.component';



const routes: Routes = [
    { path:'aboutus',  component:AboutusComponent},             //path =component selector,componenr:class of compo  
    { path:'contactus',component:ContactusComponent},
    {path:'product',component:ProductComponent,
    children:[{path:'laptop',component: LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},
    {path:'washing-machine',component:WashigMachineComponent}
  ]},
    {path:'login', component: LoginComponent},
    // {path:'login',component:LoginComponent}, 
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'react-form-assign',component:ReactFormAssignComponent},
    {path:'simple-form-asssign',component:SimpleFormAssingComponent},
    {path:'demopost',component:DemopostComponent},
    {path:'postdetails/:id',component:PostdetailsComponent},
    {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
