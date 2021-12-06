import { JIssue } from './issue';
import { JUser } from './user';

export interface JiraState {
  id: string;
  name: string;
  url: string;
  description: string;
  category: ProjectCategory;
  createdAt: string;
  updatedAt: string;
  issues: JIssue[];
  users: JUser[];
}

export enum ProjectCategory {
  SOFTWARE = 'Software',
  MARKETING = 'Marketing',
  BUSINESS = 'Business'
}
