import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardValidateur2Component } from './dashboard-validateur2.component';

describe('DashboardValidateur2Component', () => {
  let component: DashboardValidateur2Component;
  let fixture: ComponentFixture<DashboardValidateur2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardValidateur2Component]
    });
    fixture = TestBed.createComponent(DashboardValidateur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
