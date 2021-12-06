import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectQuery } from './state/project/project.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'front-end';
  constructor(public projectQuery: ProjectQuery) {}
}
