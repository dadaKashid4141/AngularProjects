import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './learnRouting/aboutus/aboutus.component';
import { ContactusComponent } from './learnRouting/contactus/contactus.component';
import { LoginComponent } from './learnRouting/login/login.component';
import { ProductComponent } from './learnRouting/product/product.component';
import { ReactFormAssignComponent } from './react-form-assign/react-form-assign.component';
import { SimpleFormAssingComponent } from './simple-form-assing/simple-form-assing.component';



const routes: Routes = [
    { path:'aboutus',  component:AboutusComponent},              
    { path:'contactus',component:ContactusComponent},
    {path:'product',component:ProductComponent},
    {path:'login', component: LoginComponent},
    // {path:'login',component:LoginComponent}, 
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'react-form-assign',component:ReactFormAssignComponent},
    {path:'simple-form-asssign',component:SimpleFormAssingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
