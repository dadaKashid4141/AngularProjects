import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { SecondComponent } from './second/second.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';//for forms
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
import { SimpleformComponent } from './simpleform.component';
import { ReFormComponent } from './re-form.component';
import { TempletdrivenassiComponent } from './templetdrivenassi/templetdrivenassi.component';
import { SimpleFormAssingComponent } from './simple-form-assing/simple-form-assing.component';
import { ReactFormAssignComponent } from './react-form-assign/react-form-assign.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactFormAssign2Component } from './react-form-assign2/react-form-assign2.component';
import { Comp1Component } from './services/comp1/comp1.component';
import { Comp2Component } from './services/comp2/comp2.component';
import { Comp3Component } from './services/comp3/comp3.component';
import { Comp4Component } from './services/comp4/comp4.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';  //use for reading or fetching data form webserver. 
import { FilpterpipeComponent } from './pipes/filpterpipe.component';
import { CountPipe } from './pipes/count.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PipeassigComponent } from './pipes/pipeassig/pipeassig.component';
import { CheckgenderPipe } from './pipes/checkgender.pipe';
import { AboutusComponent } from './learnRouting/aboutus/aboutus.component';
import { ContactusComponent } from './learnRouting/contactus/contactus.component';
// import { ProductComponent } from './learnRouting/product/product.component';
import { LoginComponent } from './learnRouting/login/login.component';
import { AppRoutingModule } from './app-routing.module';
// import { LaptopComponent } from './learnRouting/product/laptop/laptop.component';
// import { TabletComponent } from './learnRouting/product/tablet/tablet.component';
// import { TvComponent } from './learnRouting/product/tv/tv.component';
// import { WashigMachineComponent } from './learnRouting/product/washig-machine/washig-machine.component';
import { Error404Component } from './learnRouting/product/error404/error404.component';
import { DemopostComponent } from './learnRouting/demopost/demopost.component';
import { PostdetailsComponent } from './learnRouting/postdetails/postdetails.component';
import { ElectronicModule } from './learnRouting/electronics/electronic.module';
import { EagerModule } from './learnRouting/eager/eager.module';
import { AdduserComponent } from './authGuard/adduser/adduser.component';
import { RapidComponent } from './services/rapid/rapid.component';
import { YoutubeComponent } from './services/rapid/youtube/youtube.component';
import { CelebrityComponent } from './services/rapid/celebrity/celebrity.component';
// import { ProductsModule } from './learnRouting/product/products.module';
// import { CameraComponent } from './learnRouting/electronics/camera/camera.component';
// import { ElectronicsComponent } from './learnRouting/electronics/electronics.component';
// import { WatchesComponent } from './learnRouting/electronics/watches/watches.component';

@NgModule({
  declarations: [   //U can add all component,custom directive,pipe here
    AppComponent, OneComponent, SecondComponent, AssignComponent, DemodirectiveComponent, AssignStructDirectiveComponent, AttriComponent,
    // CustdirDirective,
    ParentComponent,
    ChildeComponent,
    ParentOneComponent,
    ChildOneComponent,
    HooksComponent,
    AssigndirectiveComponent,
    ParenthookComponent,
    AddremovebuttonComponent,
    TemplateformComponent,
    SimpleformComponent,
    ReFormComponent,
    TempletdrivenassiComponent,
    SimpleFormAssingComponent,
    ReactFormAssignComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    ReactFormAssign2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component, Comp4Component,
    PipedemoComponent,
    FilpterpipeComponent,
    CountPipe,
    FilterPipe,
    PipeassigComponent,
    CheckgenderPipe,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    //  LaptopComponent,
    //  TabletComponent, 
    //  TvComponent,
    //  WashigMachineComponent,   //splite in to new module i.e product model
    Error404Component,
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidComponent,
    YoutubeComponent,
    CelebrityComponent,
    // CameraComponent,
    //  ElectronicsComponent, 
    //  WatchesComponent
  ],
  imports: [            //All moduls 
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule,EagerModule, AppRoutingModule,
  ],
  providers: [],   //All services
  bootstrap: [AppComponent]    //default starting components
})
export class AppModule {
  constructor() {
    console.log('app.module loaded');

  }
}
