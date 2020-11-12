import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = [];
  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
