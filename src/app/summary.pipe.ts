import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  // The start poistion and character limit are optional
  transform(value: any, start?: number, limit?: number): any {
    if (!value)
      return null;

    //If no start position or limit variables are passed, consider 1 and 50 resp.
    let actualStart = start ? start : 1;
    let actualLimit = limit ? limit : 50;

    return value.substring(actualStart, actualLimit) + '...';
  }
}
