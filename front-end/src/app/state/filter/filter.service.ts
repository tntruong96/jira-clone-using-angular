import { Injectable } from '@angular/core';
import { FilterStore } from './filter.store';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private _store: FilterStore) {}

  updateSearchTerm = (term: string) => {
    this._store.update((state) => ({
      ...state,
      searchTerm: term
    }));
  };
}
