import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDescriptionComponent } from './issue-description.component';

describe('IssueDescriptionComponent', () => {
  let component: IssueDescriptionComponent;
  let fixture: ComponentFixture<IssueDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
