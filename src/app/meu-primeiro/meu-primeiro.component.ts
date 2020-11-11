import { Component } from '@angular/core';
import { MeuPrimeiroService } from './meu-primeiro.service';

@Component({
    selector: 'meu-primeiro-component',
    templateUrl: './meu-primeiro.component.html',
    styleUrls: ['./meu-primeiro.component.scss']
})
export class MeuPrimeiroComponent {

    cursos: string[];

    constructor(private meuPrimeiroService: MeuPrimeiroService){
        this.cursos = this.meuPrimeiroService.getCursos();
    }

}