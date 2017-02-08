
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'msToTime'
})
export class msToTimePipe implements PipeTransform {
   transform(ms) :string {
      let date = new Date(null);
      date.setSeconds(ms/1000);
      return date.toISOString().substr(14, 5);
   }
}
