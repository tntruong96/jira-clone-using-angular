import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() linkAvatar: string;
  @Input() rounded: boolean = true;
  @Input() size = 14;
  @Input() className = '';
  constructor() {}

  ngOnInit(): void {}

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      'background-image': `url(${this.linkAvatar})`,
      'boder-radius': this.rounded ? '100%' : '3px'
    };
  }
}
