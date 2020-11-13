import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'O guia definitivo do mochileiro das galáxias',
    dimensoes: '23.6 x 16.2 x 4.4 cm',
    ranking: 'Nº 367 em Livros',
    avaliacao: 4.7967,
    preco: 49.90,
    dataLancamento: new Date(2020, 3, 24)
  };

  livros: string[] = ['Angular', 'Java'];

  filtro: string = '';

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  })

  valorAsync2 = interval(2000)
    .pipe(map(valor => 'Valor assíncrono 2'))

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor){
    this.livros.push(valor)
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    })
  }

}
