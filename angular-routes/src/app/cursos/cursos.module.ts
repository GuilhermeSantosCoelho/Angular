import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        CursosRoutingModule
    ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule {}