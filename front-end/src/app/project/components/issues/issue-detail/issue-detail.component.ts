import { Component, Input, OnInit } from '@angular/core';
import { JIssue } from '@app/interface/issue';
import { ProjectQuery } from '@app/state/project/project.query';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  @Input() issueDetail: JIssue;

  constructor(public projectQuery: ProjectQuery) {}

  ngOnInit(): void {}
}
