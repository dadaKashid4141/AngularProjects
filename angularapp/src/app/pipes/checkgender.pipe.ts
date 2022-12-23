import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkgender'
})
export class CheckgenderPipe implements PipeTransform {

  
  
  transform(value: string, gender1: string):string {
        if(gender1=='male'){
          return 'Mr.'+value;
        }else{
          return 'Miss.'+value;
        }

      }
}
