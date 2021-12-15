import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  expanded: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.handleResize();
  }

  handleToggle = (isExpanded: boolean) => {
    this.expanded = isExpanded;
  };

  handleResize = () => {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      console.log(e);
      this.expanded = !e.matches;
    });
  };
}
