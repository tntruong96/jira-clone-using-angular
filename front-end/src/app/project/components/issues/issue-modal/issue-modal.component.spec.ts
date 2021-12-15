import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueModalComponent } from './issue-modal.component';

describe('IssueModalComponent', () => {
  let component: IssueModalComponent;
  let fixture: ComponentFixture<IssueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
