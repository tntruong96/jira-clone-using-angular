import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectStore } from './project.store';
import { JiraState } from '../../interface/jira.interface';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { arrayUpsert, setLoading } from '@datorama/akita';
import { environment } from '@src/environments/environment';
import { JIssue } from '@app/interface/issue';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl: string;

  constructor(private _http: HttpClient, private _store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setLoading(isLoading: boolean) {
    this._store.setLoading(isLoading);
  }

  getProject() {
    this._http
      .get<JiraState>(`${this.baseUrl}/data.json`)
      .pipe(
        setLoading(this._store),
        tap((project) => {
          this._store.update((state) => {
            return {
              ...state,
              ...project
            };
          }),
            catchError((err) => {
              this._store.setError(err);
              return of(err);
            });
        })
      )
      .subscribe();
  }

  updateIssues(issue: JIssue) {
    issue.updatedAt = new Date().toISOString();
    this._store.update((state) => {
      const issues = arrayUpsert(state.issues, issue.id, issue);
      return {
        ...state,
        issues
      };
    });
  }
}
