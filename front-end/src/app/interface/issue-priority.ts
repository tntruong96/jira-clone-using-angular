import { IssuePriorityValue, IssuePriorityColor } from './issue';

export class IssuePriority {
  value;
  color;
  icon;
  constructor(issuePriority: IssuePriorityValue) {
    const issueLow = [IssuePriorityValue.LOW, IssuePriorityValue.LOWEST];
    this.value = issuePriority;
    this.color = IssuePriorityColor[issuePriority];
    this.icon = issueLow.includes(issuePriority) ? 'arrow-down' : 'arrow-up';
  }
}
