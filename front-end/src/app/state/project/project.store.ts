import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { JiraState } from '../../interface/jira.interface';

export interface ProjectState extends JiraState {}

const createInitialState = (): ProjectState => {
  return {
    issues: [],
    users: []
  } as ProjectState;
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'jira'
})
export class ProjectStore extends Store<ProjectState> {
  constructor() {
    super(createInitialState());
  }
}
