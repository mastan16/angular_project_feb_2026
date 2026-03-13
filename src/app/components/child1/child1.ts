import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','b'],
  outputs:['carsEvent']
})
export class Child1 {
a:any;
b:any;
cars=['Tata','Hyundai','Honda','Maruti']

carsEvent=new EventEmitter();
sendDataToParent()
{
this.carsEvent.emit(this.cars);
}

}
