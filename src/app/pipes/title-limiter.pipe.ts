import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleLimiter'
})
export class TitleLimiterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
