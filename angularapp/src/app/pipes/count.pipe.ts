import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'    //he custom pipe name ahe,use where u want in html file like {{greeting | count}}
})
export class CountPipe implements PipeTransform {

  transform(value: number): any {
    return value.toString().length;
  }

}
