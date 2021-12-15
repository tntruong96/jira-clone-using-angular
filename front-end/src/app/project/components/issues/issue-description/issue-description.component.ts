import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JIssue } from '@app/interface/issue';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss']
})
export class IssueDescriptionComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  descriptionValue: FormControl;
  change = false;
  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange.currentValue !== issueChange.previousValue) {
      this.descriptionValue = new FormControl(this.issue.description);
    }
  }

  ngOnInit(): void {}

  isClicked() {
    this.change = !this.change;
  }

  updateIssue = () => {
    const cloneIssue = { ...this.issue };
    cloneIssue.description = this.descriptionValue.value;
    this._projectService.updateIssues(cloneIssue);
    this.isClicked();
  };
}
