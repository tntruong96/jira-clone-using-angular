import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JIssue } from '@app/interface/issue';
import { JUser } from '@app/interface/user';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-reporter',
  templateUrl: './issue-reporter.component.html',
  styleUrls: ['./issue-reporter.component.scss']
})
export class IssueReporterComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;
  @Input() users: JUser[];

  currentUser: JUser;
  filterUsers: JUser[];
  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      !changes.issue.firstChange &&
      changes.issue.currentValue.reporterId !== changes.issue.previousValue.reporterId
    ) {
      this.findUser();
      setTimeout(() => this.filterUser(), 500);
    }
  }

  ngOnInit(): void {
    this.findUser();
    this.filterUser();
  }

  findUser = () => {
    this.currentUser = this.users.find((u) => u.id === this.issue.reporterId);
  };

  filterUser = () => {
    this.filterUsers = this.users.filter((user) => user.id !== this.currentUser.id);
  };

  handleUpdateIssue = (reporterId) => {
    const cloneIssue = { ...this.issue };
    cloneIssue.reporterId = reporterId;
    this._projectService.updateIssues(cloneIssue);
  };
}
