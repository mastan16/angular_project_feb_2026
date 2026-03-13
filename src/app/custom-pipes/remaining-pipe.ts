import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure:true
})
export class RemainingPipe implements PipeTransform {
  transform(msg:string) {
  
    return 100-msg.length;
  }
}
