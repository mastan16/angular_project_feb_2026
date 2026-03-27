import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','b','employee'],
  outputs:['carsEvent'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class Child1 {
a:any;
b:any;
employee:any;
cars=['Tata','Hyundai','Honda','Maruti']

carsEvent=new EventEmitter();
sendDataToParent()
{
this.carsEvent.emit(this.cars);
}

sayHii()
{

}

constructor(private cdr:ChangeDetectorRef){
  console.log('Child1 Constructor')
}
ngOnChanges(changeObj:any)
{
  console.log('Child1 ngOnChanges');
 console.log(changeObj);

}
ngOnInit() {
  console.log('Child1 ngOnInit');
}
ngDoCheck() {
  console.log('Child1 ngDoCheck');
 // this.cdr.markForCheck();
}
refresh()
{
  this.cdr.markForCheck();
}

}
