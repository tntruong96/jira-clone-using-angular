import { Component, Input, OnInit } from '@angular/core';
import { IssuePriorityValue, JIssue } from '@app/interface/issue';
import { IssuePriority } from '@app/interface/issue-priority';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-priority',
  templateUrl: './issue-priority.component.html',
  styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit {
  @Input() issue: JIssue;

  listPriority;
  get currentPriority() {
    return new IssuePriority(this.issue.priority);
  }

  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this.listPriority = [
      new IssuePriority(IssuePriorityValue.LOWEST),
      new IssuePriority(IssuePriorityValue.LOW),
      new IssuePriority(IssuePriorityValue.MEDIUM),
      new IssuePriority(IssuePriorityValue.HIGH),
      new IssuePriority(IssuePriorityValue.HIGHEST)
    ];
  }

  isSelectedPriority = (selectedPriority) => {
    return this.issue.priority === selectedPriority;
  };

  updateIssue = (priority) => {
    const cloneIssue = { ...this.issue };
    cloneIssue.priority = priority;
    this._projectService.updateIssues(cloneIssue);
  };
}
