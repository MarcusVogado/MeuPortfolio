import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAboutComponent } from './card-about.component';

describe('CardAboutComponent', () => {
  let component: CardAboutComponent;
  let fixture: ComponentFixture<CardAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAboutComponent]
    });
    fixture = TestBed.createComponent(CardAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
