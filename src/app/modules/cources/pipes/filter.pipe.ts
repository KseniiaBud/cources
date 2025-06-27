import { Pipe, PipeTransform } from '@angular/core';
import { ICource, ICourceResponse } from 'src/app/models/cources';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cources: ICource[], filter: string): ICource[] {
    if (filter == '') return cources;
    let filterCources: ICource[] =[];
    for (let key = 0; key < cources.length; key++) {
      let cource = cources[key];
      if (cource.title.toLowerCase().indexOf(filter.toLowerCase()) > 0) {
        filterCources.push(cource);
      }
    }
    return filterCources;
  }

}
