import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() click = new EventEmitter();
  @Input() class;
  @Input() title: string;
  @Input() disable: boolean;

  constructor() {}

  ngOnInit(): void {}

  handleClick = (event) => {
    // this.click.emit;
  };
}
