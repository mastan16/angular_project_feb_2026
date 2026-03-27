import { Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [FormsModule,Child1,Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent  implements OnChanges,OnInit{
a:number;
mySal:number=500;
carsParent:any;
employee={name:'Ajit',Salary:5000,skills:['HITML','CSS','Angular']}


receiveCarsData(carsFromChild:any)
{
this.carsParent=carsFromChild;
}
constructor(private ele:ElementRef){ //Dependency Injection
  console.log('Parent Constructor');
  this.a=100;
}
ngOnChanges()   //onChanges won't be called as this component is not receiving any input
{
  console.log('Parent ngOnChanges');

}
ngOnInit() {
  console.log('Parent ngOnInit');
  
}

}
