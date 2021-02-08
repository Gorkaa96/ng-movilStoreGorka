import { PipeTransform} from '@angular/core';
import { Pipe } from '@angular/core';

    @Pipe({ name: 'myCurrency' })
    export class MyCurrencyPipe implements PipeTransform {
    
      transform(value: any, ...args: any[]){;
         if (value){
           return String(value) + "€";
         };
         return value;
      }

}