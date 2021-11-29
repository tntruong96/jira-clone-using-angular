export interface JiraState {
  id: string;
  name: string;
  url: string;
  description: string;
  category: ProjectCategory;
  createdAt: string;
  updatedAt: string;
  issues: JIssue[];
  users: Juser[];
}

export interface JIssue {
  status: string;
  listPosition: string;
}

export interface Juser {}

export interface ProjectCategory {}
