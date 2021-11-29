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

const NzModules = [
  NzIconModule,
  NzToolTipModule,
  NzDrawerModule,
  NzModalModule,
  NzPopoverModule,
  NzDividerModule
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
    SettingsComponent
  ],
  imports: [CommonModule, ...NzModules, ProjectRoutingModule]
})
export class ProjectModule {}
