import { Component } from '@angular/core';
import { MeuPrimeiroService } from './meu-primeiro.service';

@Component({
    selector: 'meu-primeiro-component',
    templateUrl: './meu-primeiro.component.html',
    styleUrls: ['./meu-primeiro.component.scss']
})
export class MeuPrimeiroComponent {
    constructor(private MeuPrimeiroService: MeuPrimeiroService){

    }
}