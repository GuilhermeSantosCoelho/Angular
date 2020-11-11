import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroService } from './meu-primeiro/meu-primeiro.service';
import { CursosModule } from './cursos/cursos.module';
import { OutputComponent } from './output/output.component';
import { CiclosComponent } from './ciclos/ciclos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    CiclosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [MeuPrimeiroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
