import { Component } from '@angular/core';
import { MathService } from '../../services/math-service';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {

  constructor(private mathService:MathService)   // Dependency Injection
  {
     console.log(this.mathService.sum([10,20,30,40,50]));
     console.log(this.mathService.average([10,20,30,40,50]));
     console.log(this.mathService.average([10,20,30,40,50]));


  }


}
