import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface FilterSate {
  searchTerm: string;
}

export function createInitialState(): FilterSate {
  return {
    searchTerm: ''
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'filter'
})
export class FilterStore extends Store<FilterSate> {
  constructor() {
    super(createInitialState());
  }
}
