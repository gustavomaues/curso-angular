import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { StringInversaPipe } from './string-inversa.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [TopoComponent, RodapeComponent, HomeComponent, PaginaNaoEncontradaComponent, StringInversaPipe],
  exports: [TopoComponent, RodapeComponent, HomeComponent, PaginaNaoEncontradaComponent, StringInversaPipe]
})
export class CoreModule { }
