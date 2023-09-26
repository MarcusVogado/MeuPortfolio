import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSelectContentComponent } from './blog-select-content.component';

describe('BlogSelectContentComponent', () => {
  let component: BlogSelectContentComponent;
  let fixture: ComponentFixture<BlogSelectContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSelectContentComponent]
    });
    fixture = TestBed.createComponent(BlogSelectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
