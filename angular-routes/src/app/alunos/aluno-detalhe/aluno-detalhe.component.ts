import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );*/
    this.inscricao = this.route.data.subscribe(
      (info) => {
        this.aluno = info.aluno;
      }
    )
  }

  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
