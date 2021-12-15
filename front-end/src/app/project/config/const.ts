import { IssuePriorityValue, IssueTypeValue } from '@app/interface/issue';
import { IssuePriority } from '@app/interface/issue-priority';
import { IssueType } from '@app/interface/issue-type';
import { IssueUtil } from '../util/issue-util';

export class ConstVariables {
  static issueTypeValue: IssueType[] = [
    IssueUtil.getTypeData(IssueTypeValue.TASK),
    IssueUtil.getTypeData(IssueTypeValue.BUG),
    IssueUtil.getTypeData(IssueTypeValue.STORY)
  ];

  static issuePriority: IssuePriority[] = [
    IssueUtil.getPriorityData(IssuePriorityValue.LOWEST),
    IssueUtil.getPriorityData(IssuePriorityValue.LOW),
    IssueUtil.getPriorityData(IssuePriorityValue.MEDIUM),
    IssueUtil.getPriorityData(IssuePriorityValue.HIGH),
    IssueUtil.getPriorityData(IssuePriorityValue.HIGHEST)
  ];
}
