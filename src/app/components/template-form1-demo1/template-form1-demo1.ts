import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-template-form1-demo1',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form1-demo1.html',
  styleUrl: './template-form1-demo1.css',
})
export class TemplateForm1Demo1 {
submitSignUpForm(formData:NgForm)
{
  console.log(formData);
}

}
