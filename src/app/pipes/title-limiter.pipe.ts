import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleLimiter'
})
export class TitleLimiterPipe implements PipeTransform {

  transform(value: string): string {
    let splitted = value.split(' ')
    if (splitted.length == 1) {
      if (splitted[0].length > 10) {
        return value.substring(0, 10) + '...'
      }
      else {
        return splitted[0]
      }
    }
    if (splitted.length <= 4) {
      let reJoined = splitted.join('');
      return reJoined;
    }
    else {
      let fourthWord: string = '';
      if (splitted[3].length > 3) {
        fourthWord = value.substring(0, 2) + '...'
        return fourthWord;
      }
      else {
        return fourthWord;
      }
    }
  }

}
