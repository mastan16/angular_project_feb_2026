import { Component, ContentChild, ViewChild, viewChild } from '@angular/core';

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

  @ContentChild('inputBoxFromParent') inputBoxFromParent:any;
  @ViewChild('myInputBox') myInputBox:any;
 
  constructor(){
    console.log('Child-2 Constructor')
    console.log(this.inputBoxFromParent); //inputBoxFromParent is null
    console.log(this.myInputBox); // myInputbox is null
  }

  ngAfterContentInit()
  {
    console.log('Child-2 ngAfterContentInit');
    console.log(this.inputBoxFromParent);
    this.inputBoxFromParent.nativeElement.style.color='red';
  }



}
