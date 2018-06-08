import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
   if (!filterString || !value || value.length === 0) {
      return value;
    }
    else {
      // option 1: return value.filter((val) => val[propName].startsWith(filterString));
      // option 2: 
      const resultsArray = [];
      for (let item of value) {
        if ((item[propName]).startsWith(filterString)) {
          resultsArray.push(item);
        }
      }
      return resultsArray;
    }
  }
}
