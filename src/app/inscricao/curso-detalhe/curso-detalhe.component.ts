import { Curso } from './../curso';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  @Input() curso: Curso;

  @Output() cursoSelecionado = new EventEmitter<Curso>();


  constructor() { }

  ngOnInit() {
  }

  inscrever(): void {
    console.log(`Alguém querendo se inscrever no curso ${this.curso.nome}`);
    this.cursoSelecionado.emit(this.curso);
  }

}
