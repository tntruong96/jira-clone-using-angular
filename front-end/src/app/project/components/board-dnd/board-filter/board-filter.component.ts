import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterService } from '@app/state/filter/filter.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-board-filter',
  templateUrl: './board-filter.component.html',
  styleUrls: ['./board-filter.component.scss']
})
@UntilDestroy({})
export class BoardFilterComponent implements OnInit {
  searchValue: FormControl = new FormControl();
  constructor(private _filterService: FilterService) {}

  ngOnInit(): void {
    this.searchValue.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((data) => this._filterService.updateSearchTerm(data));
  }
}
