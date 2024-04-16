import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStructureComponent } from './ajouter-structure.component';

describe('AjouterStructureComponent', () => {
  let component: AjouterStructureComponent;
  let fixture: ComponentFixture<AjouterStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterStructureComponent]
    });
    fixture = TestBed.createComponent(AjouterStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
