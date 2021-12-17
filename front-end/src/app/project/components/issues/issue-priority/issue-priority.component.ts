import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IssuePriorityValue, JIssue } from '@app/interface/issue';
import { IssuePriority } from '@app/interface/issue-priority';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-priority',
  templateUrl: './issue-priority.component.html',
  styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  listPriority;
  get currentPriority() {
    return new IssuePriority(this.issue.priority);
  }

  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange.currentValue !== issueChange.previousValue) {
      setTimeout(() => this.filterSelectedPriority(), 500);
    }
  }

  ngOnInit(): void {}

  filterSelectedPriority = () => {
    this.listPriority = [
      new IssuePriority(IssuePriorityValue.LOWEST),
      new IssuePriority(IssuePriorityValue.LOW),
      new IssuePriority(IssuePriorityValue.MEDIUM),
      new IssuePriority(IssuePriorityValue.HIGH),
      new IssuePriority(IssuePriorityValue.HIGHEST)
    ].filter((priority) => priority.value !== this.issue.priority);
  };

  updateIssue = (priority) => {
    const cloneIssue = { ...this.issue };
    cloneIssue.priority = priority;
    this._projectService.updateIssues(cloneIssue);
  };
}
