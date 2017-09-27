import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringInversa'
})
export class StringInversaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let novaString: string = '';
    for (let i = value.length - 1; i >= 0; i--) {
      novaString += value.charAt(i);
    }
    return novaString;
  }
}
