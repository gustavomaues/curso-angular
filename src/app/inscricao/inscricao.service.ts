import { Inscricao } from './inscricao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class InscricaoService {

  constructor(protected httpClient: HttpClient) { }

  URL: string = 'http://localhost:8080/api/inscricao/';

  getInscricoes(): Observable<Array<Inscricao>> {
    return this.httpClient.get<Array<Inscricao>>(`${this.URL}`);
  }

  public inscrever(inscricao: Inscricao): Observable<Inscricao> {
    return this.httpClient.post<Inscricao>(this.URL, inscricao);
  }

  public desinscrever(inscricao: Inscricao): Observable<Inscricao> {
    return this.httpClient.delete<Inscricao>(`${this.URL}/${inscricao.id}`);
  }

  public get(id: string): Observable<Inscricao> {
    return this.httpClient.get<Inscricao>(`${this.URL}/${id}`);
  }

  public atualizar(inscricao: Inscricao): Observable<Inscricao> {
    return this.httpClient.put<Inscricao>(`${this.URL}/${inscricao.id}`, inscricao);
  }

}
