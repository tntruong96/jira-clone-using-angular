export interface JIssue {
  id: string;
  title: string;
  type: IssueTypeValue;
  priority: IssuePriorityValue;
  status: IssueStatus;
  createdDate: string;
  updatedDate: string;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  reporterId: string;
  projectId: string;
  userIds: string[];
  comments: string[];
}

export enum IssueTypeValue {
  STORY = 'Story',
  TASK = 'Task',
  BUG = 'Bug'
}

export const IssueTypeIcon = {
  [IssueTypeValue.STORY]: 'bookmark',
  [IssueTypeValue.TASK]: 'check',
  [IssueTypeValue.BUG]: 'x-circle'
};

export enum IssueStatus {
  BACKLOG = 'Backlog',
  SELECTED = 'Selected',
  IN_PROGRESS = 'InProgress',
  DONE = 'Done'
}

export const IssueStatusDisplay = {
  [IssueStatus.BACKLOG]: 'Backlog',
  [IssueStatus.SELECTED]: 'Selected for development',
  [IssueStatus.IN_PROGRESS]: 'In Progress',
  [IssueStatus.DONE]: 'Done'
};

export enum IssuePriorityValue {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}

export const IssuePriorityColor = {
  [IssuePriorityValue.HIGHEST]: '#CD1317',
  [IssuePriorityValue.HIGH]: '#E9494A',
  [IssuePriorityValue.MEDIUM]: '#E97F33',
  [IssuePriorityValue.LOW]: '#2D8738',
  [IssuePriorityValue.LOWEST]: '#57A55A'
};
