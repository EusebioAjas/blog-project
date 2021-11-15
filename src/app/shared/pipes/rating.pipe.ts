import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(rate: number): number {
    return (Math.floor(rate) * 5) / 10;
  }
}
