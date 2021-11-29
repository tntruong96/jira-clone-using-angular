import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;
  items: SidebarItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      new SidebarItem('board', 'Kanban Board', 'board'),
      new SidebarItem('cog', 'Project Settings', 'settings'),
      new SidebarItem('ship', 'Releases', ''),
      new SidebarItem('filters', 'Issues and filters', ''),
      new SidebarItem('page', 'Pages', ''),
      new SidebarItem('report', 'Reports', ''),
      new SidebarItem('component', 'Components', '')
    ];
  }
}

class SidebarItem {
  constructor(public icon: string, public title: string, public path: string) {}
}
