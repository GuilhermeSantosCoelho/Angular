import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  mostrarCurso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCurso(){
    this.mostrarCurso = !this.mostrarCurso;
  }

}
