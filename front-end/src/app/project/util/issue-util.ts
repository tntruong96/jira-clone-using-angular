import { IssuePriorityValue, IssueTypeValue, IssueTypeIcon } from '@app/interface/issue';
import { IssuePriority } from '@app/interface/issue-priority';
import { IssueType } from '@app/interface/issue-type';

export class IssueUtil {
  static getPriorityData = (issuePriority: IssuePriorityValue): IssuePriority =>
    new IssuePriority(issuePriority);

  static getTypeData = (issueType: IssueTypeValue): IssueType => new IssueType(issueType);

  static getTypeIcon(issueType: IssueTypeValue): string {
    return IssueTypeIcon[issueType];
  }

  static getPriorityIcon = (issuePriority: IssuePriorityValue): IssuePriority => {
    return new IssuePriority(issuePriority);
  };
}
