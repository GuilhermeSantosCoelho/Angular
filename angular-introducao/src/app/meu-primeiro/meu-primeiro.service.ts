import { Injectable } from '@angular/core';

@Injectable()
export class MeuPrimeiroService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
