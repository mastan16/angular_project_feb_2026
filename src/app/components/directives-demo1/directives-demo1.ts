import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo1',
  imports: [
    CommonModule,FormsModule
  ],
  templateUrl: './directives-demo1.html',
  styleUrl: './directives-demo1.css',
})
export class DirectivesDemo1 {
num:number=4;

statesArr=["Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra"
]

employees=[
  {"eId":101,"name":"sanjay","sal":5000,"gender":"male"},
  {"eId":102,"name":"geeta","sal":8000,"gender":"female"},
  {"eId":103,"name":"sameer","sal":7000,"gender":"male"},
  {"eId":104,"name":"sita","sal":9000,"gender":"female"},
  {"eId":105,"name":"deepak","sal":8000,"gender":"male"},
];

columnArr:any=[]
constructor(){
this.columnArr=Object.keys(this.employees[0])

}
}


