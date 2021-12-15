import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent implements OnInit, OnChanges {
  @Input() expanded: boolean;
  @Output() toggleSidebar = new EventEmitter();

  icon;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.icon = changes.expanded.currentValue ? 'right-circle' : 'left-circle';
  }

  ngOnInit(): void {
    this.icon = 'left-circle';
  }

  toggle = () => {
    this.toggleSidebar.emit(!this.expanded);
  };
}
