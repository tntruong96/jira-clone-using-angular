import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IssueStatus, JIssue } from '@app/interface/issue';
import { IssueUtil } from '@app/project/util/issue-util';
import { FilterQuery } from '@app/state/filter/filter.query';
import { FilterSate } from '@app/state/filter/filter.store';
import { ProjectService } from '@app/state/project/project.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: '[app-board-dnd-list]',
  templateUrl: './board-dnd-list.component.html',
  styleUrls: ['./board-dnd-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@UntilDestroy()
export class BoardDndListComponent implements OnInit {
  @Input() status: IssueStatus;
  @Input() issues$: Observable<JIssue[]>;
  count;

  issuesData: JIssue[];
  constructor(private _projectService: ProjectService, private _filterQuery: FilterQuery) {}

  ngOnInit(): void {
    this.issues$.pipe(untilDestroyed(this)).subscribe((data) => {
      this.issuesData = data;
      this.count = data.length;
    });
    combineLatest(this.issues$, this._filterQuery.all$)
      .pipe(untilDestroyed(this))
      .subscribe(([issues, searchTerm]) => {
        this.issuesData = this.filterIssue(issues, searchTerm);
      });
  }

  drop = (event: CdkDragDrop<JIssue[]>) => {
    const newIssue: JIssue = { ...event.item.data };
    const newIssues = [...event.container.data];
    if (event.previousContainer === event.container) {
      moveItemInArray(newIssues, event.previousIndex, event.currentIndex);
      this.updateListPosition(newIssues);
      console.log(newIssues);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        newIssues,
        event.previousIndex,
        event.currentIndex
      );
      this.updateListPosition(newIssues);
      newIssue.status = event.container.id as IssueStatus;

      this._projectService.updateIssues(newIssue);
    }
  };

  updateListPosition = (issues: JIssue[]) => {
    const newIssues = issues.map((issue, idx) => {
      const newIssuePosition = { ...issue, listPosition: idx + 1 };
      this._projectService.updateIssues(newIssuePosition);
    });
  };

  filterIssue = (issues: JIssue[], search: FilterSate) => {
    const { searchTerm } = search;
    return issues.filter((issue) => {
      let searchByTerm = search ? IssueUtil.searchString(searchTerm, issue.title) : true;

      return searchByTerm;
    });
  };
}
