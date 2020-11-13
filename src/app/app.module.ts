import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiroService } from './meu-primeiro/meu-primeiro.service';
import { CursosModule } from './cursos/cursos.module';
import { CiclosComponent } from './ciclos/ciclos.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import br from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { SettingsService } from './settings/settings.service';
import { FiltroArrayPipe } from './pipes/filtro-array.pipe';

registerLocaleData(br, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    CiclosComponent,
    DiretivasComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    PropertyBindingComponent,
    ClassStyleBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    CriarCursoModule
  ],
  providers: [
    MeuPrimeiroService,
    LogService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
