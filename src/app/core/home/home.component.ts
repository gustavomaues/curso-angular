import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logado: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isUsuarioAutenticado(): boolean {
    return this.logado;
  }

  alteraAutenticacao(): void {
    this.logado = !this.logado;
  }
}
