import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elips'
})
export class ElipsPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length>20){
      return value.substring(0,20)+'\.... more';
    } else{
      return value;
    }
  }

}
