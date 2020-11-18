import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form) {

  }

  consultaCep(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe(dados => {
            console.log(dados);
          });
      }
    }
  }

  aplicaCssErro(campo) {
    return {

    }
  }

}
