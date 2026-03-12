import { input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(input:number) {
    // if(!value || isNaN(value))
    // return '';
    // else
    //   return value;
    if(!input) return '';

    const mod100=input%100;
    if(mod100>=11 && mod100<=13)
    {   
      let rem=input%10;

    }
    return input;

  }
}
