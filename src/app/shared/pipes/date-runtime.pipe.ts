import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRuntime'
})
export class DateRuntimePipe implements PipeTransform {

  transform(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}h ${seconds}m`;;
  }

}
