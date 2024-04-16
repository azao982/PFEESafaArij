import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApiConsumerComponent } from './list-api-consumer.component';

describe('ListApiConsumerComponent', () => {
  let component: ListApiConsumerComponent;
  let fixture: ComponentFixture<ListApiConsumerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApiConsumerComponent]
    });
    fixture = TestBed.createComponent(ListApiConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
