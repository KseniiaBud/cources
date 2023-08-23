import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(min: number): string {
    let resStr = "";
    if (min <= 60) {
      if (min == 1) resStr += min + " минута";
      if (min > 1 && min < 5) resStr += min + " минуты";
      if (min >= 5) resStr += min + " минут";
    } else if (min > 60) {
      let h = (min - min % 60) / 60;
      let m = min % 60;
      if (h == 1) resStr = h + " час ";
      if (h > 1 && h < 5) resStr = h + " часа ";
      if (h >= 5) resStr = h + " часов ";
      if (m == 1) resStr += m + " минута";
      if (m > 1 && m < 5) resStr += m + " минуты";
      if (m >= 5) resStr += m + " минут";
    }
    return resStr;
  }

}
