import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
 transform(employees: any[], searchText: string): any[] {
    if (!employees) return [];
    if (!searchText) return employees;

    searchText = searchText.toLowerCase();

    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchText) ||
      emp.designation.toLowerCase().includes(searchText) ||
      emp.gender.toLowerCase().includes(searchText)
    );
  }
}
