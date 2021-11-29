import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    AvatarComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JiraControlModule { }
