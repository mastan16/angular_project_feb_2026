import { Component } from '@angular/core';
import { DatabindingDemo } from '../databinding-demo/databinding-demo';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { DirectivesDemo1 } from '../directives-demo1/directives-demo1';

@Component({
  selector: 'app-body',
  imports: [
   // DatabindingDemo
    DirectivesDemo
    //DirectivesDemo1
   ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
