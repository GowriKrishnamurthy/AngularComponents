import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase'
})
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value)
      return null;
    return  value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}