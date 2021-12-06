import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from '@app/state/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {
  constructor(private _projectService: ProjectService) {}

  ngOnInit(): void {
    this._projectService.getProject();
  }
}
