import { InscricaoFormComponent } from './inscricao-form/inscricao-form.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'curso',
      children: [
        { path: '', redirectTo: 'disponiveis', pathMatch: 'full'},
        { path: 'inscricao/:cursoId', component: InscricaoFormComponent},
        { path: 'disponiveis', component: CursoListaComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscricaoRoutingModule { }
