import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CursosService
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
