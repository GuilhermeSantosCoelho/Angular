import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { FormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';
import { OutputModule } from '../output/output.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    OutputModule
  ],
  providers: [
    CursosService
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
