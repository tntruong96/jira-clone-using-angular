import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddIssuesModalComponent } from '../../add-issues-modal/add-issues-modal.component';
import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  navItems: NavItem[] = [];
  showPropover: boolean = false;
  constructor(private _nzModalService: NzModalService, private _nzDrawerService: NzDrawerService) {}

  ngOnInit(): void {
    this.navItems = [
      new NavItem('search', 'Search Issues', this.handleDrawer.bind(this)),
      new NavItem('plus', 'Add Issues', this.handleModal.bind(this))
    ];
  }

  handleDrawer = () => {
    this._nzDrawerService.create({
      nzContent: SearchDrawerComponent,
      nzTitle: null,
      nzPlacement: 'left',
      nzClosable: false,
      nzWidth: 500
    });
  };

  handleModal = () => {
    this._nzModalService.create({
      nzTitle: '',
      nzContent: AddIssuesModalComponent
    });
  };

  change = (e: Event) => {
    console.log(e);
  };
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
