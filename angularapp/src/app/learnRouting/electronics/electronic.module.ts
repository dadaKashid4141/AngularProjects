import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { CameraComponent } from './camera/camera.component';
import { WatchesComponent } from './watches/watches.component';
import { UtilityModule } from 'src/app/modelss/utility.module';

const rroute:Routes=[{path:'',component:ElectronicsComponent,
children:[{path:'camera',component:CameraComponent},
{path:'watches',component:WatchesComponent}]}]

@NgModule({
  declarations: [
    ElectronicsComponent,
    CameraComponent,
    WatchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rroute),
    UtilityModule                    //shared module used for watches
  ],
  exports:[RouterModule]
})
export class ElectronicModule {
  constructor(){
    console.log('Electronic.MOdule loaded ');
    
  }
 }
