import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPrimeiroComponent } from './meu-primeiro.component';
import { MeuPrimeiroService } from './meu-primeiro.service';

@NgModule({
  declarations: [
    MeuPrimeiroComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeuPrimeiroComponent
  ],
  providers: [
    MeuPrimeiroService
  ]
})
export class MeuPrimeiroModule { }
