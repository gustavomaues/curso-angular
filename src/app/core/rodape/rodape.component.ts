import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  copyright: string = 'Semana de Tecnologia e Segurança da Informação - 2017';

  constructor() { }

  ngOnInit() {
  }

}
