import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorfilter'
})
export class ColorfilterPipe implements PipeTransform {

  transform(value: any, filterString : string , propName : string): any {
    if(value.length === 0){
      return value;
    }
    const resultArray = [];
    for (let item of value)
    {
      if(item[propName] === filterString){
         resultArray.push(item);
      }
    }
    return resultArray;
  }

}
