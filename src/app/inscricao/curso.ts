export class Curso {

  id: number;
  nome: string;
  clicks: number = 0;

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  incrementa(): void {
    this.clicks++;
  }

}
