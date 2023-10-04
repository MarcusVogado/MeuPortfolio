import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcademicComponent } from './card-academic.component';

describe('CardAcademicComponent', () => {
  let component: CardAcademicComponent;
  let fixture: ComponentFixture<CardAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAcademicComponent]
    });
    fixture = TestBed.createComponent(CardAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
