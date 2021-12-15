import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullIssueDetailComponent } from './full-issue-detail.component';

describe('FullIssueDetailComponent', () => {
  let component: FullIssueDetailComponent;
  let fixture: ComponentFixture<FullIssueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullIssueDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullIssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
