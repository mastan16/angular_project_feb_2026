import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs:['aChild2','cars']
})
export class Child2 {
  aChild2:any;
  cars:any;

  b:number=200;
  c:number=300;
}
