import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSpaceComponent } from './code-space.component';

describe('CodeSpaceComponent', () => {
  let component: CodeSpaceComponent;
  let fixture: ComponentFixture<CodeSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeSpaceComponent]
    });
    fixture = TestBed.createComponent(CodeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
