import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JIssue } from '../../interface/issue';
import { ProjectState, ProjectStore } from './project.store';

@Injectable({
  providedIn: 'root'
})
export class ProjectQuery extends Query<ProjectState> {
  constructor(protected store: ProjectStore) {
    super(store);
  }

  isLoading$ = this.selectLoading();
  all$ = this.select();
  issues$ = this.select('issues');
  user$ = this.select('users');

  issueByStatusSorted$ = (status: string): Observable<JIssue[]> => {
    return this.issues$.pipe(
      map((issues) => {
        let filterIssues = issues.filter((x) => x.status === status);

        return filterIssues;
      })
    );
  };
}
