import { Component, Input, OnInit } from '@angular/core';
import { JUser } from '@app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: JUser;
  constructor() {}

  ngOnInit(): void {}
}
