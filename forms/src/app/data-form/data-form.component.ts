import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })
  }

  getErrorMessage(campo) {
    if (this.formulario.get(campo).hasError('required')) {
      return 'Campo obrigatório';
    }else if(this.formulario.get(campo).hasError('email')){
      return 'Email inválido';
    }
    return '';
  }

  resetar(){
    this.formulario.reset(); 
  }

  onSubmit(){
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(res => {
        console.log(res);
        this.resetar();
      },
      (error: any) => alert('Ocorreu um erro.'));
  }

}
