import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: '',
      numero: null,
      complemento: null
    }
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(res => {
        console.log(res);
      });
  }

  consultaCep(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }


  populaDadosForm(dados, form) {
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    })
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
}
