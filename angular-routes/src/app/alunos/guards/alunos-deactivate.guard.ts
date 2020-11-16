import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IformCandeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCandeactivate> {
  canDeactivate(
    component: IformCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.podeDesativar();
  }
  
}
