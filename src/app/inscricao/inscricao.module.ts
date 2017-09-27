import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscricaoRoutingModule } from './inscricao-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';

@NgModule({
  imports: [
    CommonModule,
    InscricaoRoutingModule
  ],
  declarations: [CursoListaComponent, CursoDetalheComponent, InscricaoFormComponent]
})
export class InscricaoModule { }
