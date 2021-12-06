import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IssueTypeValue } from '@app/interface/issue';
import { IssueType } from '@app/interface/issue-type';
import { ConstVariables } from '@app/project/config/const';
import { IssueUtil } from '@app/project/util/issue-util';

@Component({
  selector: 'app-issue-type-select',
  templateUrl: './issue-type-select.component.html',
  styleUrls: ['./issue-type-select.component.scss']
})
export class IssueTypeSelectComponent implements OnInit {
  issueTypes: IssueType[] = [];
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.issueTypes = ConstVariables.issueTypeValue;
  }

  getIssueTypeIcon = (value: IssueTypeValue) => {
    return IssueUtil.getTypeIcon(value);
  };
}
