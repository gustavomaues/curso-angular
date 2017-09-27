import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [TopoComponent]
})
export class CoreModule { }
