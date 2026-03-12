import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipe/assignment/ordinal-pipe';
import { AgePipe } from '../../custom-pipe/assignment/age-pipe';
import { SalutationPipe } from '../../custom-pipe/assignment/salutation-pipe';
import { FilterPipe } from '../../custom-pipe/assignment/filter-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule,RemainingPipe,OrdinalPipe,AgePipe,SalutationPipe,FilterPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {

  userName='SacHIn teNdUlKAr';
  salary=5000;
  dateObj=new Date();
  user={sal:5000,name:'Ajit',age:22,add:'hyderabad',gender:'male'};
cars=['Tata','Honda','Maruti','Hyundai','Toyota'];
msg='Hello';

studentRank=[1,2,3,4,11,21,22,23,24,111];
searchText: string = '';
employees = [
    { name: 'John Doe', gender: 'male', designation: 'Developer' },
    { name: 'Jane Smith', gender: 'female', designation: 'Designer' },
    { name: 'Robert Brown', gender: 'male', designation: 'Manager' },
    { name: 'Emily Davis', gender: 'female', designation: 'Tester' }
  ];

}
