import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuePriorityValue, IssueStatus, IssueTypeValue, JIssue } from '@app/interface/issue';
import { JUser } from '@app/interface/user';
import { quillConfiguraiton } from '@app/project/config/editor';
import { DateUtil } from '@app/project/util/date-util';
import { IssueUtil } from '@app/project/util/issue-util';
import { ProjectQuery } from '@app/state/project/project.query';
import { ProjectService } from '@app/state/project/project.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef } from 'ng-zorro-antd/modal';
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

  constructor(
    private _fb: FormBuilder,
    private _projectQuery: ProjectQuery,
    private _projectService: ProjectService,
    private _nzModal: NzModalRef
  ) {}

  editorConfiguration;
  listPosition;

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

    this.getListPosition();

    this.editorConfiguration = quillConfiguraiton;
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
    const { reporter, assignees, title, type, priority, description } = this.createForm.value;
    const newIssue: JIssue = {
      title,
      type,
      priority,
      updatedAt: DateUtil.getNow(),
      createdAt: DateUtil.getNow(),
      id: IssueUtil.randomIssueId(),
      reporterId: reporter,
      userIds: assignees,
      status: IssueStatus.BACKLOG,
      listPosition: this.listPosition,
      description,
      estimate: null,
      timeSpent: null,
      timeRemaining: null,
      projectId: null,
      comments: []
    };
    console.log(newIssue);
    this._projectService.updateIssues(newIssue);
    this._nzModal.close();
  };

  getListPosition = () => {
    return this._projectQuery
      .issueByStatusSorted$(IssueStatus.BACKLOG)
      .subscribe((data) => (this.listPosition = data.length + 1));
  };
}
