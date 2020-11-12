import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'PHP'];
  mostrarCurso: boolean = false;
  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
