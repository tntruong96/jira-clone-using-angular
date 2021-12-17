import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FilterSate, FilterStore } from './filter.store';

@Injectable({
  providedIn: 'root'
})
export class FilterQuery extends Query<FilterSate> {
  all$ = this.select();
  searchTerm$ = this.select('searchTerm');
  constructor(protected store: FilterStore) {
    super(store);
  }
}
