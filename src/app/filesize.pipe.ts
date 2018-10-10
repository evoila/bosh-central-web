import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const size = value as number;
    return (size / 1000 / 1000).toFixed(2);
  }

}
