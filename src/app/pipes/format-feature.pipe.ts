import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFeature',
  standalone: true
})
export class FormatFeaturePipe implements PipeTransform {

  transform(value?: number, ...args: unknown[]): unknown {
    if(value && (args[0] === 'ht' || args[0] === 'wt')){
      return (value / 10).toFixed(1) + (args[0] === 'ht' ? ' m' : ' kg');
    }
    return null;
  }

}
