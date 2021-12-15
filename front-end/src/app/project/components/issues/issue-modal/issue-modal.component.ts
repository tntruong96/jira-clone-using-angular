import { Component, Input, OnInit } from '@angular/core';
import { JIssue } from '@app/interface/issue';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-issue-modal',
  templateUrl: './issue-modal.component.html',
  styleUrls: ['./issue-modal.component.scss']
})
@UntilDestroy()
export class IssueModalComponent implements OnInit {
  @Input() issue$: Observable<JIssue>;
  constructor() {}

  ngOnInit(): void {}
}
