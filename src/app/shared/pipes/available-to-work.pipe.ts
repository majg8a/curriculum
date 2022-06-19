import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availableToWorkColor',
})
export class AvailableToWorkColorPipe implements PipeTransform {
  transform(value: number) {
    if (value % 2 == 0) {
      return 'blue';
    } else if (value % 3 == 0) {
      return 'yellow';
    } else {
      return 'white';
    }
  }
}
