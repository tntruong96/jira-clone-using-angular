import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JUser } from '@app/interface/user';

@Component({
  selector: 'app-issue-assignees-select',
  templateUrl: './issue-assignees-select.component.html',
  styleUrls: ['./issue-assignees-select.component.scss']
})
export class IssueAssigneesSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() assignees: JUser[];
  constructor() {}

  ngOnInit(): void {}

  getAssignee = (userId: string) => {
    return this.assignees.find((assignee) => assignee.id === userId);
  };
}
