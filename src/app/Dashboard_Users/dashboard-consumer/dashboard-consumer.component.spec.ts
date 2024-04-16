import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsumerComponent } from './dashboard-consumer.component';

describe('DashboardConsumerComponent', () => {
  let component: DashboardConsumerComponent;
  let fixture: ComponentFixture<DashboardConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardConsumerComponent]
    });
    fixture = TestBed.createComponent(DashboardConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
