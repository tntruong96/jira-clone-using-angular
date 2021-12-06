import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IssuePriorityValue } from '@app/interface/issue';
import { IssuePriority } from '@app/interface/issue-priority';
import { ConstVariables } from '@app/project/config/const';
import { IssueUtil } from '@app/project/util/issue-util';

@Component({
  selector: 'app-issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent implements OnInit {
  @Input() control: FormControl;
  issuePriorities: IssuePriority[];
  constructor() {}

  ngOnInit(): void {
    this.issuePriorities = ConstVariables.issuePriority;
  }

  getIssuePriorityIcon = (issuePriority: IssuePriorityValue): IssuePriority => {
    return IssueUtil.getPriorityIcon(issuePriority);
  };
}
