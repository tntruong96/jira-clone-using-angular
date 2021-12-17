import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JIssue } from '@app/interface/issue';
import { JUser } from '@app/interface/user';
import { ProjectService } from '@app/state/project/project.service';
import _ from 'lodash';

@Component({
  selector: 'app-issue-assignees',
  templateUrl: './issue-assignees.component.html',
  styleUrls: ['./issue-assignees.component.scss']
})
export class IssueAssigneesComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;
  @Input() users: JUser[];

  filterList: JUser[];
  listChoseAssignees: string[] = [];
  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const changeIssue = changes.issue;
    if (
      !changeIssue.firstChange &&
      changeIssue.currentValue.userIds.length !== changeIssue.previousValue.userIds.length
    ) {
      setTimeout(() => this.filterListAssignee(), 500);
    }
  }

  ngOnInit(): void {
    //push list assignee of current issue
    this.listChoseAssignees = [...this.issue.userIds];
    this.filterListAssignee();
  }

  filterListAssignee = () => {
    this.filterList = this.users.filter((user) => !this.listChoseAssignees.includes(user.id));
    console.log(this.filterList);
  };

  chooseAssignee = (userId: string) => {
    this.listChoseAssignees.push(userId);
    this.updateIssue();
  };

  removeAssignee = (userId: string) => {
    this.listChoseAssignees = this.listChoseAssignees.filter((assignee) => assignee !== userId);
    this.updateIssue();
  };

  updateIssue = () => {
    const cloneIssue = _.cloneDeep(this.issue);
    cloneIssue.userIds = [...this.listChoseAssignees];
    this._projectService.updateIssues(cloneIssue);
  };

  getDetailAssignee = (id: string) => {
    return this.users.find((user) => user.id === id);
  };
}
