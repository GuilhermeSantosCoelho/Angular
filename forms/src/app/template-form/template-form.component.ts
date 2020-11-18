import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: 'Guilherme',
    email: 'guilherme@gmail.com',
    endereco: {
      cep: '',
      numero: null,
      complemento: null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form){

  }

}
