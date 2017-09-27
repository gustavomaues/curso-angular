import { BrowserModule } from '@angular/platform-browser';
import { InscricaoService } from './inscricao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InscricaoRoutingModule } from './inscricao-routing.module';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InscricaoRoutingModule
  ],
  declarations: [CursoListaComponent, CursoDetalheComponent, InscricaoFormComponent],
  providers: [InscricaoService]
})
export class InscricaoModule { }
