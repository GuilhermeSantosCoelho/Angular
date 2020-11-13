import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imagemUrl: string = "http://lorempixel.com/400/200/sports";

  constructor() { }

  ngOnInit(): void {
  }

}
