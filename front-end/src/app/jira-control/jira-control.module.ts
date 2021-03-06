import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { InputComponent } from './input/input.component';
import { HeroIconsModule, arrowUp, arrowDown } from 'ng-heroicons';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';

@NgModule({
  declarations: [
    AvatarComponent,
    InputComponent,
    SvgIconComponent,
    ButtonComponent,
    BreadcrumComponent
  ],
  imports: [CommonModule, HeroIconsModule.withIcons({ arrowDown, arrowUp })],
  exports: [InputComponent, AvatarComponent, SvgIconComponent, ButtonComponent, BreadcrumComponent]
})
export class JiraControlModule {}
