import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JUser } from '@app/interface/user';
import { ProjectQuery } from '@app/state/project/project.query';

@Component({
  selector: 'app-issue-reporter-select',
  templateUrl: './issue-reporter-select.component.html',
  styleUrls: ['./issue-reporter-select.component.scss']
})
export class IssueReporterSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() reporters: JUser[];

  constructor() {}

  ngOnInit(): void {}

  getReporter = (id: string) => {
    return this.reporters.find((reporter) => reporter.id === id);
  };
}
