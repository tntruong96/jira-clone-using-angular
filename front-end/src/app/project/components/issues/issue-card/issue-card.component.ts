import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IssuePriorityValue, IssueTypeValue, JIssue } from '@app/interface/issue';
import { JUser } from '@app/interface/user';
import { IssueUtil } from '@app/project/util/issue-util';
import { ProjectQuery } from '@app/state/project/project.query';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map } from 'rxjs/operators';
import { IssueModalComponent } from '../issue-modal/issue-modal.component';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
@UntilDestroy()
export class IssueCardComponent implements OnInit {
  @Input() issue: JIssue;
  linkAvatar = [];
  users: JUser[];
  constructor(private _projectQuery: ProjectQuery, private nzModal: NzModalService) {}
  ngOnInit(): void {
    this._projectQuery.user$.pipe(untilDestroyed(this)).subscribe((res) => {
      this.getUserAvatar(res);
    });
  }

  getPrioryIcon = (issuePriory: IssuePriorityValue) => IssueUtil.getPriorityIcon(issuePriory);

  getTypeIcon = (issueType: IssueTypeValue) => IssueUtil.getTypeIcon(issueType);

  getUserAvatar = (users: JUser[]) => {
    if (this.issue) {
      this.issue.userIds.forEach((userId) => {
        users.forEach((user) => {
          if (user.id === userId) {
            this.linkAvatar.push(user.avatarUrl);
          }
        });
      });
    }
  };

  openIssueDetail = (id: string) => {
    this.nzModal.create({
      nzContent: IssueModalComponent,
      nzComponentParams: {
        issue$: this._projectQuery.issueById$(id)
      },
      nzFooter: null,
      nzWidth: '1000px'
    });
  };
}
