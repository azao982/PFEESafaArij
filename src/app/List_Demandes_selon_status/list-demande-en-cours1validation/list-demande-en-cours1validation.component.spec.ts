import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeEnCours1validationComponent } from './list-demande-en-cours1validation.component';

describe('ListDemandeEnCours1validationComponent', () => {
  let component: ListDemandeEnCours1validationComponent;
  let fixture: ComponentFixture<ListDemandeEnCours1validationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeEnCours1validationComponent]
    });
    fixture = TestBed.createComponent(ListDemandeEnCours1validationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
