import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeEnCours2ValidationComponent } from './list-demande-en-cours2-validation.component';

describe('ListDemandeEnCours2ValidationComponent', () => {
  let component: ListDemandeEnCours2ValidationComponent;
  let fixture: ComponentFixture<ListDemandeEnCours2ValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeEnCours2ValidationComponent]
    });
    fixture = TestBed.createComponent(ListDemandeEnCours2ValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
