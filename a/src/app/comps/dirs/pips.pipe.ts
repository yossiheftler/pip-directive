import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips'
})
export class PipsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
