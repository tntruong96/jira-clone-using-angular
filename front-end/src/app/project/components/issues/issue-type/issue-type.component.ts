import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IssueTypeValue, JIssue } from '@app/interface/issue';
import { IssueType } from '@app/interface/issue-type';
import { IssueUtil } from '@app/project/util/issue-util';
import { ProjectService } from '@app/state/project/project.service';
import { NzContextMenuService } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-issue-type',
  templateUrl: './issue-type.component.html',
  styleUrls: ['./issue-type.component.scss']
})
export class IssueTypeComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  constructor(private _projectService: ProjectService) {}

  issueType: IssueTypeValue[] = [
    IssueTypeValue['STORY'],
    IssueTypeValue['BUG'],
    IssueTypeValue['TASK']
  ];
  listItem: IssueTypeValue[] = [];

  ngOnInit(): void {
    // this.filterListItem();
  }

  ngOnChanges(change: SimpleChanges): void {
    setTimeout(() => this.filterListItem(), 500);
  }

  getTypeIcon = (issueType: IssueTypeValue) => {
    return IssueUtil.getTypeIcon(issueType);
  };

  handleChangeType = (issueType: IssueTypeValue): void => {
    const issueChanged = { ...this.issue };
    issueChanged.type = issueType;
    this._projectService.updateIssues(issueChanged);
  };

  filterListItem = (): void => {
    this.listItem = this.issueType.filter((issue) => issue !== this.issue.type);
  };
}
