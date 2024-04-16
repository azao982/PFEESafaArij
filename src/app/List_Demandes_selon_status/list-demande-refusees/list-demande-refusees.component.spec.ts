import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeRefuseesComponent } from './list-demande-refusees.component';

describe('ListDemandeRefuseesComponent', () => {
  let component: ListDemandeRefuseesComponent;
  let fixture: ComponentFixture<ListDemandeRefuseesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeRefuseesComponent]
    });
    fixture = TestBed.createComponent(ListDemandeRefuseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
