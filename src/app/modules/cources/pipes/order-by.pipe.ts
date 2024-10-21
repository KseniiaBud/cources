import { Pipe, PipeTransform } from '@angular/core';
import { ICource } from 'src/app/models/cources';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(cources: ICource[], orderBy?: string): ICource[] {
    if (!orderBy || orderBy == '') return cources;
    let filterCources: ICource[] = cources;
    // Сортировка по дате от новых к старым
    if (orderBy == 'creationDate')
      filterCources = cources.sort((a, b) => a[orderBy] < b[orderBy] ? 1 : -1);
    // Сортировка по алфавиту/возрастанию требуемого времени
    if ( orderBy == 'title' || orderBy == 'duration')
      filterCources = cources.sort((a, b) => a[orderBy] > b[orderBy] ? 1 : -1);
    return filterCources;
  }
}
