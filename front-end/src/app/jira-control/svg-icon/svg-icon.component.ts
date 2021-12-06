import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html'
})
export class SvgIconComponent implements OnInit {
  @Input() name;
  @Input() size = 16;
  @Input() fill = '';
  window: any = window;
  constructor() {}
  ngOnInit(): void {
    console.log(this.name);
  }

  get iconUrl() {
    console.log(this.window);
    return `${this.window.location.href}#${this.name}`;
  }
}
