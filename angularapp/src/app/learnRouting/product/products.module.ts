import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductComponent } from './product.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashigMachineComponent } from './washig-machine/washig-machine.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes= [{path:'',component:ProductComponent,
children:[{path:'laptop',component: LaptopComponent},         
{path:'tablet',component:TabletComponent},
{path:'tv',component:TvComponent},
{path:'washing-machine',component:WashigMachineComponent}
]}]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashigMachineComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
  
})
export class ProductsModule {                         //products splited from app.module 
  constructor(){
    console.log('product module loaded');
    
  }
 }
