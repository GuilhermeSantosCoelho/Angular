import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[];
  imagemUrl: string = "http://lorempixel.com/400/200/sports";

  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
