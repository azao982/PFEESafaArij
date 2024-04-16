import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeRectifieesComponent } from './list-demande-rectifiees.component';

describe('ListDemandeRectifieesComponent', () => {
  let component: ListDemandeRectifieesComponent;
  let fixture: ComponentFixture<ListDemandeRectifieesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeRectifieesComponent]
    });
    fixture = TestBed.createComponent(ListDemandeRectifieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
