import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService{
    getCursos(){
        return ['Angular 2', 'Java', 'Phonegap'];
    }
}