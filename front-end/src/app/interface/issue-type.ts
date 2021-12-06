import { IssueTypeIcon, IssueTypeValue } from './issue';

export class IssueType {
  icon;
  value;
  constructor(issueType: IssueTypeValue) {
    this.value = issueType;
    this.icon = IssueTypeIcon[issueType];
  }
}
