import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetctComponent } from './card-projetct.component';

describe('CardProjetctComponent', () => {
  let component: CardProjetctComponent;
  let fixture: ComponentFixture<CardProjetctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjetctComponent]
    });
    fixture = TestBed.createComponent(CardProjetctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
