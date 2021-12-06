import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuePriorityValue, IssueTypeValue } from '@app/interface/issue';
import { JUser } from '@app/interface/user';
import { ProjectQuery } from '@app/state/project/project.query';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-issues-modal',
  templateUrl: './add-issues-modal.component.html',
  styleUrls: ['./add-issues-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@UntilDestroy()
export class AddIssuesModalComponent implements OnInit {
  createForm: FormGroup;
  reporter$: Observable<JUser[]>;
  assignees$: Observable<JUser[]>;

  constructor(private _fb: FormBuilder, private _projectQuery: ProjectQuery) {}

  get fc() {
    return this.createForm?.controls;
  }

  ngOnInit(): void {
    this.initForm();
    this.reporter$ = this._projectQuery.user$.pipe(
      untilDestroyed(this),
      tap((users) => {
        const [user] = users;
        this.fc.reporter.patchValue(user.id);
      })
    );

    this.assignees$ = this._projectQuery.user$;
  }

  initForm() {
    this.createForm = this._fb.group({
      type: [IssueTypeValue.TASK],
      priority: [IssuePriorityValue.LOWEST],
      title: ['', Validators.compose([Validators.required])],
      description: '',
      reporter: '',
      assignees: [[]]
    });
  }

  handleSubmit = (value) => {
    console.log(this.createForm);
  };
}
