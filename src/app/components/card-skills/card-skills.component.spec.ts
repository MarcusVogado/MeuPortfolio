import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkillsComponent } from './card-skills.component';

describe('CardSkillsComponent', () => {
  let component: CardSkillsComponent;
  let fixture: ComponentFixture<CardSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSkillsComponent]
    });
    fixture = TestBed.createComponent(CardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
