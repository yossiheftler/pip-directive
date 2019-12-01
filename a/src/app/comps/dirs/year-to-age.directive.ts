import { Pipe, PipeTransform } from '@angular/core';
 

@Pipe({
  name: 'yearToAge'
})
export class YearToAgeDirective {

  transform(birthYear: number):  number {
    let thisYear = new Date().getFullYear()
    return thisYear - birthYear
  }
  

}
