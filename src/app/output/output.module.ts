import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output.component';



@NgModule({
  declarations: [OutputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OutputComponent
  ]
})
export class OutputModule { }
