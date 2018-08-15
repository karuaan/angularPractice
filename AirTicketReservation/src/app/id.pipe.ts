import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {
  result1: string;
  result2: string;
  result3: string;

  transform(value: string): string {
    if (value == null)
    {
      return null;
    }

    else
    {
      this.result1 = value.slice(0,3);
      this.result2 = value.slice(3);
      this.result3 = this.result1 + "-" + this.result2;

      return this.result3;
    }
  }

}
