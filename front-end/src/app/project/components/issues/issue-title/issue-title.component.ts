import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JIssue } from '@app/interface/issue';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-issue-title',
  templateUrl: './issue-title.component.html',
  styleUrls: ['./issue-title.component.scss']
})
export class IssueTitleComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  controlValue: FormControl;
  constructor(private _projectService: ProjectService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const issueChange = changes.issue;
    if (issueChange.currentValue !== issueChange.previousValue) {
      this.controlValue = new FormControl(this.issue.title);
    }
  }

  ngOnInit(): void {}

  onBlur = () => {
    const cloneIssue = { ...this.issue };
    cloneIssue.title = this.controlValue.value;
    this._projectService.updateIssues(cloneIssue);
  };
}
