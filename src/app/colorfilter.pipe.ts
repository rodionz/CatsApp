import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorfilter',
  pure:false
})
export class ColorfilterPipe implements PipeTransform {

  transform(value: any[], filterString : string , propName : string): any[] {
    const resultArray = [];
    if(value.length === 0){
      return value;
    }

    else if (filterString === "")
    {
      return value;
    }
    
else{

    for (let item of value)
    {
      if(item[propName] === filterString){
         resultArray.push(item);
      }
    }
    return resultArray;
  }
  }
}
