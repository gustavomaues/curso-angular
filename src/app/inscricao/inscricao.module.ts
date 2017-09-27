import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscricaoRoutingModule } from './inscricao-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

@NgModule({
  imports: [
    CommonModule,
    InscricaoRoutingModule
  ],
  declarations: [CursoListaComponent]
})
export class InscricaoModule { }
