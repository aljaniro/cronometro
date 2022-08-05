import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReacContainerComponent } from './reac-container/reac-container.component';
import { TiempoComponent } from './tiempo/tiempo.component';



@NgModule({
  declarations: [
    ReacContainerComponent,
    TiempoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReacContainerComponent,TiempoComponent
  ]
})
export class ReactModule { }
