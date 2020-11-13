import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
