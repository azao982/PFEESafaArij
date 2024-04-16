import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStructureComponent } from './list-structure.component';

describe('ListStructureComponent', () => {
  let component: ListStructureComponent;
  let fixture: ComponentFixture<ListStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStructureComponent]
    });
    fixture = TestBed.createComponent(ListStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
