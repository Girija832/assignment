import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText',
  pure: true  // pure pipe
})
export class FilterTextPipe implements PipeTransform {

  transform(items: any, searchText: any): any {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
  }

}
