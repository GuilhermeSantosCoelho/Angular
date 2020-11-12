import { Component, OnInit } from '@angular/core';

import { ServicoService } from './servico.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent implements OnInit {

  cursos: string[];
  servicoService: ServicoService;

  constructor() { 
    this.servicoService = new ServicoService();
  }

  ngOnInit(): void {
    this.cursos = this.servicoService.getCursos();
  }

}
