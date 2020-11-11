import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent implements OnInit {

  constructor() { }

  ngOnChanges(){
    console.log('onChange');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  ngDoCheck(){
    console.log('doCheck');
  }

  ngAfterContentInit(){
    console.log('afterContentInit');
  }

  ngAfterContentChecked(){
    console.log('afterContentChecked');
  }

  ngAfterViewChecked(){
    console.log('afterViewChecked');
  }

  ngOnDestroy(){
    console.log('onDestroy');
  }
}
