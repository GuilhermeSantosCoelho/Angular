import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'PHP'];
  mostrarCurso: boolean = false;
  aba: string = 'home';
  meuFavorito: boolean = false;
  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito;
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

}
