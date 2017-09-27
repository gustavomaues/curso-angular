import { Curso } from './../curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent implements OnInit {

  cursos: Curso[];

  constructor() {
    this.cursos = [
      new Curso(1, 'Introdução ao Angular'),
      new Curso(2, 'Docker Avançado'),
      new Curso(3, 'Versionamento de código com o Git')
    ];
   }

  ngOnInit() {
  }

}
