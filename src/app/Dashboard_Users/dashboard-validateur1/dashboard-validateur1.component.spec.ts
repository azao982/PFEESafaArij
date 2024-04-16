import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardValidateur1Component } from './dashboard-validateur1.component';

describe('DashboardValidateur1Component', () => {
  let component: DashboardValidateur1Component;
  let fixture: ComponentFixture<DashboardValidateur1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardValidateur1Component]
    });
    fixture = TestBed.createComponent(DashboardValidateur1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
