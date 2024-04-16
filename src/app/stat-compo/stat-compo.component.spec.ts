import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatCompoComponent } from './stat-compo.component';

describe('StatCompoComponent', () => {
  let component: StatCompoComponent;
  let fixture: ComponentFixture<StatCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatCompoComponent]
    });
    fixture = TestBed.createComponent(StatCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
