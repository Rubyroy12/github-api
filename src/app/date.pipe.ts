import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any):number {
    let today:Date = new Date();

    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(value - todayWithoutTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.01;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

   
      return 0;

    
   
  }
}
