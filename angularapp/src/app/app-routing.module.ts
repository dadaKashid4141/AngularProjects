import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdduserComponent } from './authGuard/adduser/adduser.component';
import { AuthGuard } from './authGuard/auth.guard';
import { UnSavedChangesGuard } from './authGuard/un-saved-changes.guard';
import { AboutusComponent } from './learnRouting/aboutus/aboutus.component';
import { ContactusComponent } from './learnRouting/contactus/contactus.component';
import { DemopostComponent } from './learnRouting/demopost/demopost.component';
import { ElectronicModule } from './learnRouting/electronics/electronic.module';
import { LoginComponent } from './learnRouting/login/login.component';
import { PostdetailsComponent } from './learnRouting/postdetails/postdetails.component';
import { Error404Component } from './learnRouting/product/error404/error404.component';
import { LaptopComponent } from './learnRouting/product/laptop/laptop.component';
import { ProductComponent } from './learnRouting/product/product.component';
import { ProductsModule } from './learnRouting/product/products.module';
import { TabletComponent } from './learnRouting/product/tablet/tablet.component';
import { TvComponent } from './learnRouting/product/tv/tv.component';

import { WashigMachineComponent } from './learnRouting/product/washig-machine/washig-machine.component';
import { ReactFormAssignComponent } from './react-form-assign/react-form-assign.component';
import { CelebrityComponent } from './services/rapid/celebrity/celebrity.component';
import { RapidComponent } from './services/rapid/rapid.component';
import { YoutubeComponent } from './services/rapid/youtube/youtube.component';
import { SimpleFormAssingComponent } from './simple-form-assing/simple-form-assing.component';



const routes: Routes = [
    { path:'aboutus',  component:AboutusComponent},             //path =component /selector name,component:class of compo  
    { path:'contactus',component:ContactusComponent},
  //   {path:'product',component:ProductComponent,
  //   children:[{path:'laptop',component: LaptopComponent},
  //   {path:'tablet',component:TabletComponent},
  //   {path:'tv',component:TvComponent},                                                  //product feature module created 
  //   {path:'washing-machine',component:WashigMachineComponent}
  // ]},
    {path:'login',
     component: LoginComponent},
    // {path:'login',component:LoginComponent}, 
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'adduser',canDeactivate:[UnSavedChangesGuard], component:AdduserComponent},
    {path:'react-form-assign',component:ReactFormAssignComponent},
    {path:'simple-form-asssign',component:SimpleFormAssingComponent},
    {path:'demopost',component:DemopostComponent},
    {path:'postdetails/:id',component:PostdetailsComponent},
    {path:'rapid',component:RapidComponent},
    {path:'youtube',component:YoutubeComponent},
    {path:'celebrity',component:CelebrityComponent},
    {path:'electronics',loadChildren:'./learnRouting/electronics/electronic.module#ElectronicModule'},//lazzy loading
    {path:'product', canActivate:[AuthGuard],loadChildren:'./learnRouting/product/products.module#ProductsModule'},//lazzy loading
    {path:'order',loadChildren:'./learnRouting/order/order.module#OrderModule'} ,    //lazzy
    
    {path:'**',component:Error404Component}  //wild card rauting(404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy:PreloadAllModules}   //pre loading
    )],

  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('app.routing.module loadede');
    
  }
}
