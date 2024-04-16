import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminDelegueComponent } from './dashboard-admin-delegue.component';

describe('DashboardAdminDelegueComponent', () => {
  let component: DashboardAdminDelegueComponent;
  let fixture: ComponentFixture<DashboardAdminDelegueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardAdminDelegueComponent]
    });
    fixture = TestBed.createComponent(DashboardAdminDelegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
