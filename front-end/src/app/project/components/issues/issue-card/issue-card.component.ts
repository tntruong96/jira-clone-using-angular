import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IssuePriorityValue, IssueTypeValue, JIssue } from '@app/interface/issue';
import { IssueUtil } from '@app/project/util/issue-util';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {
  @Input() issue: JIssue;
  constructor() {}

  ngOnInit(): void {}

  getPrioryIcon = (issuePriory: IssuePriorityValue) => IssueUtil.getPriorityIcon(issuePriory);
  getTypeIcon = (issueType: IssueTypeValue) => IssueUtil.getTypeIcon(issueType);
}
