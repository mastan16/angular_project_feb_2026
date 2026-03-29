import { Component } from '@angular/core';
import { DatabindingDemo } from '../databinding-demo/databinding-demo';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { DirectivesDemo1 } from '../directives-demo1/directives-demo1';
import { ProductList } from '../product-list/product-list';
import { DirectiveAssignments } from '../directive-assignments/directive-assignments';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { UserList } from '../user-list/user-list';
import { Demo1 } from '../demo1/demo1';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { FormDemo1 } from '../form-demo1/form-demo1';
import { TemplateForm1Demo1 } from '../template-form1-demo1/template-form1-demo1';


@Component({
  selector: 'app-body',
  imports: [
   // DatabindingDemo
   // DirectivesDemo,
   // DirectivesDemo1,
   // ProductList
   //DirectiveAssignments
  // PipesDemo,
  // Parent,
  // EmployeeCrud,
  // UserList
  //Starrating
  //Demo1
  //SignalDemo1
  // SignalDemo2
  // FormDemo1
  TemplateForm1Demo1

   ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
