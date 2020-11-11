import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[];
  imagemUrl: string = "http://lorempixel.com/400/200/sports";
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  pessoa: any = {
    nome: "abc",
    idade: 20
  }

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }

  botaoClicado(){
    alert('Botão clicado.');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  ngOnInit(): void {
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
