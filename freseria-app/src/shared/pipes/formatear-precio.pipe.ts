import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearPrecio'
})
export class FormatearPrecioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
