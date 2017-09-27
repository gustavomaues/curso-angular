import { HttpClient } from '@angular/common/http';
import { InscricaoService } from './../inscricao.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Inscricao } from '../inscricao';

@Component({
  selector: 'app-inscricao-form',
  templateUrl: './inscricao-form.component.html',
  styleUrls: ['./inscricao-form.component.css']
})
export class InscricaoFormComponent implements OnInit {

  inscricaoForm: FormGroup;

  public inscricao: Inscricao = new Inscricao();

  inscricoes: Array<Inscricao>;

  constructor(private service: InscricaoService, private fb: FormBuilder) {
    this.criarForm();
  }

  criarForm() {
    this.inscricaoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit() {
    this.service.getInscricoes().subscribe(
      data => { this.inscricoes = data; }
    );
  }

}
