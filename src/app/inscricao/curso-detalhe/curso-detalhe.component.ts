import { Curso } from './../curso';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  @Input() curso: Curso;

  constructor() { }

  ngOnInit() {
  }

}
