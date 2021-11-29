import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssuesModalComponent } from './add-issues-modal.component';

describe('AddIssuesModalComponent', () => {
  let component: AddIssuesModalComponent;
  let fixture: ComponentFixture<AddIssuesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIssuesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIssuesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
