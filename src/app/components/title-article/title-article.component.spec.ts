import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleArticleComponent } from './title-article.component';

describe('TitleArticleComponent', () => {
  let component: TitleArticleComponent;
  let fixture: ComponentFixture<TitleArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleArticleComponent]
    });
    fixture = TestBed.createComponent(TitleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
