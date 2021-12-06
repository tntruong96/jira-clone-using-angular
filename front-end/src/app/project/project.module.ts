import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerComponent } from '../project/components/navigation/resizer/resizer.component';
import { SidebarComponent } from '../project/components/navigation/sidebar/sidebar.component';
import { NavbarLeftComponent } from '../project/components/navigation/navbar-left/navbar-left.component';
import { NavigationComponent } from '../project/components/navigation/navigation/navigation.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SearchDrawerComponent } from './components/search/search-drawer/search-drawer.component';
import { AddIssuesModalComponent } from './components/add-issues-modal/add-issues-modal.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BoardComponent } from './pages/board/board.component';
import { FullIssueDetailComponent } from './pages/full-issue-detail/full-issue-detail.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { JiraControlModule } from '@app/jira-control/jira-control.module';
import { IssueTitleComponent } from './components/issues/issue-title/issue-title.component';
import { IssueCardComponent } from './components/issues/issue-card/issue-card.component';
import { IssueModalComponent } from './components/issues/issue-modal/issue-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueTypeSelectComponent } from './components/add-issues-modal/issue-type-select/issue-type-select.component';
import { IssuePrioritySelectComponent } from './components/add-issues-modal/issue-priority-select/issue-priority-select.component';
import { IssueAssigneesSelectComponent } from './components/add-issues-modal/issue-assignees-select/issue-assignees-select.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HeroIconsModule, arrowDown, arrowUp, xCircle, check, bookmark } from 'ng-heroicons';
import { IssueReporterSelectComponent } from './components/add-issues-modal/issue-reporter-select/issue-reporter-select.component';
import { UserComponent } from './components/issues/user/user.component';

const NzModules = [
  NzIconModule,
  NzToolTipModule,
  NzDrawerModule,
  NzModalModule,
  NzPopoverModule,
  NzDividerModule,
  NzSelectModule
];

@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    NavbarLeftComponent,
    ResizerComponent,
    ProjectComponent,
    SearchDrawerComponent,
    AddIssuesModalComponent,
    BoardComponent,
    FullIssueDetailComponent,
    SettingsComponent,
    IssueTitleComponent,
    IssueCardComponent,
    IssueModalComponent,
    IssueTypeSelectComponent,
    IssuePrioritySelectComponent,
    IssueAssigneesSelectComponent,
    IssueReporterSelectComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ...NzModules,
    ProjectRoutingModule,
    JiraControlModule,
    FormsModule,
    ReactiveFormsModule,
    HeroIconsModule.withIcons({ arrowDown, arrowUp, check, xCircle, bookmark })
  ]
})
export class ProjectModule {}