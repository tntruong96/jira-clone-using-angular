import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IssueStatus, JIssue } from '@app/interface/issue';
import { ProjectService } from '@app/state/project/project.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

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
  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this.issues$.pipe(untilDestroyed(this)).subscribe((data) => {
      this.issuesData = data;
      this.count = data.length;
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
}
