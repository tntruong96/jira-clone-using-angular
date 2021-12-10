import { Component, ViewEncapsulation, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ProjectQuery } from './state/project/project.query';
import { ProjectService } from './state/project/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'front-end';
  constructor(
    public projectQuery: ProjectQuery,
    private _cdr: ChangeDetectorRef,
    private _projectService: ProjectService
  ) {
    this._projectService.setLoading(true);
  }
  ngAfterViewInit(): void {
    this._cdr.detectChanges(); //fix Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError
  }
}
