import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics.component';
import { CameraComponent } from './camera/camera.component';
import { WatchesComponent } from './watches/watches.component';

const rroute:Routes=[{path:'electronics',component:ElectronicsComponent,
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
    RouterModule.forChild(rroute)
  ],
  exports:[RouterModule]
})
export class ElectronicModule { }
