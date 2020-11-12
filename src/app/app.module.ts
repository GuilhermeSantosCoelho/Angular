import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroService } from './meu-primeiro/meu-primeiro.service';
import { CursosModule } from './cursos/cursos.module';
import { CiclosComponent } from './ciclos/ciclos.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    CiclosComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule
  ],
  providers: [MeuPrimeiroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
