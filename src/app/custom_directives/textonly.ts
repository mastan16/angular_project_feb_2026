import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextonly]',
})
export class Textonly {
  @HostBinding('style.background-color')
  myBgColor:string='';

  @HostListener('keyup',['$event.target'])
  handleKeyUp(element:any){
  //console.log(element.value);
  const value=element.value;
  let regex=new RegExp(/^[a-z]+$/); //Text Only

  if(!regex.test(value)){
    this.myBgColor='red';
  }else{
    this.myBgColor='lightgreen';
  }

  }
}
