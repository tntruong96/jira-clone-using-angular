import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IssueStatus, JIssue } from '@app/interface/issue';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-status',
  templateUrl: './issue-status.component.html',
  styleUrls: ['./issue-status.component.scss']
})
export class IssueStatusComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  classBtn: string;
  listItem: IssueStatus[] = [
    IssueStatus['BACKLOG'],
    IssueStatus['DONE'],
    IssueStatus['IN_PROGRESS'],
    IssueStatus['SELECTED']
  ];
  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.valueBtn();
  }

  ngOnInit(): void {}

  valueBtn = () => {
    switch (this.issue.status) {
      case IssueStatus['DONE']:
        this.classBtn = 'btn-success';
        break;
      case IssueStatus['IN_PROGRESS']:
        this.classBtn = 'btn-primary';
        break;
      default:
        this.classBtn = 'btn-secondary';
    }
  };

  handleChangeStatus = (status: IssueStatus) => {
    const cloneIssue = { ...this.issue };
    cloneIssue.status = status;
    this._projectService.updateIssues(cloneIssue);
  };
}
