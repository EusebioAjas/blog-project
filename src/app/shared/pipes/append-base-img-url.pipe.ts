import { Pipe, PipeTransform } from '@angular/core';
import { BASE_IMG_URL } from 'src/app/config/tmdb';

@Pipe({
  name: 'appendBaseImgUrl',
})
export class AppendBaseImgUrlPipe implements PipeTransform {
  transform(value: string): string {
    return BASE_IMG_URL + value;
  }
}
